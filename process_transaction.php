<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Remove var_dump and exit
    // var_dump($_POST);
    // exit;

    $hexCode = bin2hex(random_bytes(16));

    // Database connection (update with your details)
    $get_merchants = $conn->query("SELECT * FROM merchants where status = 'Active'");
    $merchants = $get_merchants->fetch_assoc();

    // Personal Information
    $fname = isset($_POST["m_fname"]) ? $conn->real_escape_string($_POST["m_fname"]) : "";
    $lname = isset($_POST["m_lname"]) ? $conn->real_escape_string($_POST["m_lname"]) : "";
    $name = $fname . ' ' . $lname;
    $email = isset($_POST["m_email"]) ? $conn->real_escape_string($_POST["m_email"]) : "None";
    $phone = isset($_POST["m_phone"]) ? $conn->real_escape_string($_POST["m_phone"]) : "None";
    $brief = isset($_POST["brief"]) ? $conn->real_escape_string($_POST["brief"]) : "None";
    $price = isset($_POST["price"]) ? $conn->real_escape_string($_POST["price"]) : "None";
    $wordCountTotal = isset($_POST["word_count"]) ? $conn->real_escape_string($_POST["word_count"]) : "None";

    // Payment Information
    $m_fname = isset($_POST["m_fname"]) ? $conn->real_escape_string($_POST["m_fname"]) : "";
    $m_lname = isset($_POST["m_lname"]) ? $conn->real_escape_string($_POST["m_lname"]) : "";
    $m_name = $m_fname . " " . $m_lname;
    $m_email = isset($_POST["m_email"]) ? $conn->real_escape_string($_POST["m_email"]) : "None";
    $m_phone = isset($_POST["m_phone"]) ? $conn->real_escape_string($_POST["m_phone"]) : "None";
    $m_street = isset($_POST["m_street"]) ? $conn->real_escape_string($_POST["m_street"]) : "None";
    $m_city = isset($_POST["m_city"]) ? $conn->real_escape_string($_POST["m_city"]) : "None";
    $m_country = isset($_POST["m_country"]) ? $conn->real_escape_string($_POST["m_country"]) : "None";
    $m_state = isset($_POST["m_state"]) ? $conn->real_escape_string($_POST["m_state"]) : "None";
    $m_zipcode = isset($_POST["m_zipcode"]) ? $conn->real_escape_string($_POST["m_zipcode"]) : "None";

    $m_card = isset($_POST["m_card"]) ? $conn->real_escape_string($_POST["m_card"]) : "None";
    $m_exp = isset($_POST["m_exp"]) ? $conn->real_escape_string($_POST["m_exp"]) : "None";
    $m_cvc = isset($_POST["m_cvc"]) ? $conn->real_escape_string($_POST["m_cvc"]) : "None";

    // Coupon Code
    $coupon = isset($_POST["coupon"]) ? $conn->real_escape_string($_POST["coupon"]) : "None";

    // Handling File Upload
    if (isset($_POST["docFiles"])) {
        $fileDetails = json_decode($_POST["docFiles"], true);
        $filePaths = [];
        $wordCounts = [];
        $prices = [];

        foreach ($fileDetails as $index => $file) {
            $file_name = date("dmyhis") . "-" . $file["fileName"];
            $file_tmp = $_FILES["file"]["tmp_name"][$index];
            $upload_dir = "uploads/";

            if (!is_dir($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }

            $file_path = $upload_dir . $file_name;
            if (move_uploaded_file($file_tmp, $file_path)) {
                $filePaths[] = $file_path;
                $wordCounts[] = $file["wordCount"];
                $prices[] = $file["price"];
            } else {
                echo json_encode(['success' => false, 'error' => 'Error uploading file.']);
                exit;
            }
        }

        $filePathsJson = json_encode($filePaths);
        $wordCountsJson = json_encode($wordCounts);
        $pricesJson = json_encode($prices);
    } else {
        echo json_encode(['success' => false, 'error' => 'No files uploaded.']);
        exit;
    }

    // Call the payment processing function
    if ($merchants["merchant_name"] == "Stripe") {
        $token = $_POST['stripeToken'] ? $_POST['stripeToken'] : '';
        require 'stripe/process_payment_stripe.php';
        $paymentResponse = proccess_transaction($token, $price, $m_fname, $m_lname, $m_phone, $m_email, $m_street, $m_country, $m_state, $m_city, $m_zipcode);
    } else if ($merchants["merchant_name"] == "Authorize") {
        require 'authorize/process_transaction_authorize.php';
        $paymentResponse = proccess_transaction(preg_replace('/\D/', '', $m_card), $m_exp, $m_cvc, $price, $m_fname, $m_lname, $m_phone, $m_email, $m_street, $m_country, $m_state, $m_city, $m_zipcode);
    }

    $paymentResponse = json_decode($paymentResponse, true);

    $p_status = 'Paid';
    $status = '1';

    if ($paymentResponse['success']) {
        // Insert into Database using prepared statements
        $stmt = $conn->prepare("INSERT INTO submissions (name, email, phone, brief, word_count, price, file_path, m_name, m_email, m_street, m_city, m_country, m_state, m_zipcode, payment_status, status, transaction_id, tracking_no, coupon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssssssssssssss", $name, $email, $phone, $brief, $wordCountsJson, $pricesJson, $filePathsJson, $m_name, $m_email, $m_street, $m_city, $m_country, $m_state, $m_zipcode, $p_status, $status, $paymentResponse['transactionId'], $hexCode, $coupon);

        $stmt2 = $conn->query("SELECT * FROM coupons WHERE code = '$coupon'");
        $stmt_arr = $stmt2->fetch_assoc();

        $discount = 0;
        $coupon_title = '';

        if(isset($stmt_arr)){
            $discount = $stmt_arr['discount'];
            $coupon_title = $stmt_arr['title'];
        }else{
            $discount = "0";
            $coupon_title = "";
        }

        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Payment successful!',
                'trackingNo' => $hexCode,
                'totalWordCount' => $wordCountTotal,
                'discount' => $discount,
                'coupon_title' => $coupon_title,
                'totalPrice' => $price,
                'orderStatus' => $p_status,
                'files' => $fileDetails
            ]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Error: ' . $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'error' => $paymentResponse['error'], 'errorMessages' => $paymentResponse['errorMessages']]);
    }

    $conn->close();
}

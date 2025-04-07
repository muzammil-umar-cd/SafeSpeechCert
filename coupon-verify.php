<?php
require('db.php');

// Get the JSON input
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['voucherCode'])) {
    $voucherCode = $conn->real_escape_string($data['voucherCode']);

    // Query to check if the voucher code exists and is valid
    $query = "SELECT discount FROM coupons WHERE code = '$voucherCode' AND status = 1";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $discount = $row['discount'];

        // Return success response with the discount amount
        echo json_encode([
            'success' => true,
            'discount' => $discount,
        ]);
    } else {
        // Return error response if the voucher is invalid
        echo json_encode([
            'success' => false,
            'message' => '(Invalid or expired voucher code.)',
        ]);
    }
} else {
    // Return error response if no voucher code is provided
    echo json_encode([
        'success' => false,
        'message' => '(No voucher code provided.)',
    ]);
}
?>
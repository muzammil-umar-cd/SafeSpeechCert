<?php include('includes/header.php'); ?>

<?php
require 'db.php';

if (isset($_GET['tag'])) {
    $trackingNo = $conn->real_escape_string($_GET['tag']);
    $query = "SELECT * FROM submissions WHERE tracking_no = '$trackingNo'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $order = $result->fetch_assoc();
        $filePaths = json_decode($order['file_path'], true);
        $wordCounts = json_decode($order['word_count'], true);
        $prices = json_decode($order['price'], true);
?>


<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/assets/freemium/freemium-banner.jpg');
      background-position: top center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header">Order Details (<?php echo $order['name']; ?>)</h1>
            <?php
                    $or_status = $order['status'];
                    $get_status = "Select * from order_statuses WHERE id= $or_status";
                    $qr = mysqli_query($conn, $get_status);
                    $rs = mysqli_fetch_assoc($qr);
                    ?>
            <p class="text-warning">

            </p>
            <p class="lead p-4" style="text-transform: uppercase;">
                Order Status: &nbsp;
                <span class="text-warning"><?php echo $rs['name']; ?></span>
            </p>
        </div>
    </div>
</div>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
            <div class="card shadow-sm">
                <div class="card-header text-white text-center" style="background-color: #44aed7;">
                    <h3><strong>Tracking Number:</strong> <?php echo $order['tracking_no']; ?></h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Name:</strong>
                                <?php echo $order['name']; ?></p>
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Email:</strong>
                                <?php echo $order['email']; ?></p>
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Phone:</strong>
                                <?php echo $order['phone']; ?></p>
                        </div>
                        <div class="col-md-6">
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Brief:</strong>
                                <?php echo $order['brief']; ?></p>
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Status:</strong> <span
                                    style="text-transform: uppercase;font-weight: bold;"><?php echo $order['payment_status']; ?></span>
                            </p>
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Date:</strong>
                                <?php echo $order['created_at']; ?></p>
                        </div>
                    </div>
                    <h4 class="mt-4">Files</h4>
                    <table class="table table-bordered">
                        <thead class="thead-light">
                            <tr>
                                <th>File Name</th>
                                <th>Word Count</th>
                                <th>Price</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                    for ($i = 0; $i < count($filePaths); $i++) {
                                        echo "<tr>";
                                        echo "<td>" . basename($filePaths[$i]) . "</td>";
                                        echo "<td>" . $wordCounts[$i] . "</td>";
                                        echo "<td>$" . $prices[$i] . "</td>";
                                        echo "<td><a href='" . $filePaths[$i] . "' download class='btn btn-primary btn-sm'>Download</a></td>";
                                        echo "</tr>";
                                    }
                                    ?>
                        </tbody>
                    </table>
                    <div class="row mt-4 text-center">
                        <div class="col-md-6">
                            <p><strong>Total Word Count:</strong> <?php echo array_sum($wordCounts); ?></p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>Total Price:</strong> $<?php echo array_sum($prices); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    } else {
        echo "<p>No order found with the provided tracking number.</p>";
    }
} else {
    echo "<p>Invalid request.</p>";
}
?>

<?php include('includes/footer.php'); ?>
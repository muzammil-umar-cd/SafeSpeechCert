<?php include('includes/header.php'); ?>
<style>
.badge-container {
    position: relative;
    cursor: pointer;
}

.badge-radio {
    display: none;
}

.badge-radio:checked+label .badge-image {
    border: 3px solid #44aed7;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
}

.badge-image {
    width: 100%;
    height: auto;
    transition: border 0.1s, box-shadow 0.1s;
}
</style>

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
            </p>
            <p class="lead p-4" style="text-transform: uppercase;">
                Order Status: &nbsp;
                <span class="text-warning"><?php echo $rs['name']; ?></span>
            </p>
            <p class="lead">
                <strong>Tracking Number:</strong> <?php echo $order['tracking_no']; ?>
            </p>
        </div>
    </div>
</div>

<div class="container-fluid mt-2 p-5" id="trackingDiv">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6 col-sm-12">
            <div class="card shadow-sm">
                <div class="card-header text-white text-center" style="background-color: #44aed7;">
                    <input type="hidden" id="token_no" value="<?php echo $order['tracking_no']; ?>">
                    <h3>Order Details</h3>
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
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Payment: </strong> <span
                                    style="text-transform: uppercase;font-weight: bold;"><?php echo $order['payment_status']; ?></span>
                            </p>
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;"><strong>Date:</strong>
                                <?php echo $order['created_at']; ?></p>
                            <p class="p-2" style="border-bottom: 1px solid #44aed7;">
                                <strong>Certification:</strong>&nbsp;<a
                                    href="certification?token=<?php echo $order['tracking_no']; ?>" target="_blank"
                                    class="btn btn-primary btn-sm">View Certificate</a>
                            </p>
                        </div>
                    </div>
                    <div class="card-header text-white text-center mt-4" style="background-color: #44aed7;">
                        <input type="hidden" id="token_no" value="<?php echo $order['tracking_no']; ?>">
                        <h3>Files</h3>
                    </div>
                    <!-- <h4 class="mt-4"></h4> -->
                    <table class="table table-bordered table-responsive">
                        <thead class="thead-light">
                            <tr>
                                <th>File Name</th>
                                <th>Word Count</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                    for ($i = 0; $i < count($filePaths); $i++) {
                                        echo "<tr>";
                                        echo "<td>" . basename($filePaths[$i]) . "</td>";
                                        echo "<td>" . $wordCounts[$i] . "</td>";
                                        echo "<td>" . $rs['name'] . "</td>";
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
        <div class="col-md-6 col-lg-6 col-sm-12">
            <div class="card shadow-sm">
                <div class="card-header text-white text-center" style="background-color: #44aed7;">
                    <h3><strong>Get Your Protection Badge</h3>
                </div>
                <div class="card-body p-2">
                    <div class="row p-2">
                        <div class="col-md-6 pr-2">
                            <h4>1. Select a Badge</h4>
                            <div class="row" style="height: 185px;overflow-y: scroll;">
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge1" name="badge" value="ssc-badge-1.png"
                                        class="badge-radio">
                                    <label for="badge1">
                                        <img src="ice9/assets/badges/ssc-badge-1.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge2" name="badge" value="ssc-badge-2.png"
                                        class="badge-radio">
                                    <label for="badge2">
                                        <img src="ice9/assets/badges/ssc-badge-2.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge3" name="badge" value="ssc-badge-3.png"
                                        class="badge-radio">
                                    <label for="badge3">
                                        <img src="ice9/assets/badges/ssc-badge-3.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge4" name="badge" value="ssc-badge-4.png"
                                        class="badge-radio">
                                    <label for="badge4">
                                        <img src="ice9/assets/badges/ssc-badge-4.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge5" name="badge" value="ssc-badge-5.png"
                                        class="badge-radio">
                                    <label for="badge5">
                                        <img src="ice9/assets/badges/ssc-badge-5.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge6" name="badge" value="ssc-badge-1.png"
                                        class="badge-radio">
                                    <label for="badge6">
                                        <img src="ice9/assets/badges/ssc-badge-1.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge7" name="badge" value="ssc-badge-2.png"
                                        class="badge-radio">
                                    <label for="badge7">
                                        <img src="ice9/assets/badges/ssc-badge-2.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge8" name="badge" value="ssc-badge-3.png"
                                        class="badge-radio">
                                    <label for="badge8">
                                        <img src="ice9/assets/badges/ssc-badge-3.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge9" name="badge" value="ssc-badge-4.png"
                                        class="badge-radio">
                                    <label for="badge9">
                                        <img src="ice9/assets/badges/ssc-badge-4.png" class="badge-image" />
                                    </label>
                                </div>
                                <div class="col-md-6 p-3 badge-container">
                                    <input type="radio" id="badge10" name="badge" value="ssc-badge-5.png"
                                        class="badge-radio">
                                    <label for="badge10">
                                        <img src="ice9/assets/badges/ssc-badge-5.png" class="badge-image" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <div id="canvas-container" style="position: relative; display: inline-block;">
                                <img src="Stamp.png" id="image" alt="Image" width="400px" />
                                <div id="qr-code"
                                    style="position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%);">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>2. Embed Your Badge</h4>
                                    <textarea readonly name="" id="badgeEmbedCode" rows="2"
                                        style="background: ghostwhite;height: auto;border: 1px solid #dbdbdb;"></textarea>
                                </div>
                            </div>
                        </div>                        
                        <div class="col-md-6 d-flex justify-content-center">
                            <div class="row">
                                <div class="col-md-12">
                                    <button id="download-btn" class="btn btn-primary">Download Badge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    } else { ?>
<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/assets/freemium/freemium-banner.jpg');
      background-position: top center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header">Order Details (Unknown)</h1>
            <p class="lead p-4" style="text-transform: uppercase;">
                Order Status: &nbsp;
                <span class="text-warning">Invalid</span>
            </p>
        </div>
    </div>
</div>
<div class="container mt-5 p-5">
    <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
            <div class="card shadow-sm">
                <div class="card-header text-white text-center" style="background-color: #44aed7;">
                    <h3><strong>No Order Found With Tracking NO: </strong>
                        <?php echo isset($_GET['tag']) ? $_GET['tag'] : '' ?></h3>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    }
} else {
    echo "<p>Invalid request.</p>";
}
?>

<?php include('includes/footer.php'); ?>

<script>
$(document).ready(function() {
    $('#getBadgeButton').on('click', function() {
        $('#trackingDiv').hide();
        $('#badgeDiv').show();
    });

    $token_no = $('#token_no').val();

    $('.badge-radio').on('change', function() {
        var selectedBadge = $('input[name="badge"]:checked').val();
        if (selectedBadge) {
            var refurl = encodeURIComponent(window.location.href);
            var embedCode =
                '<a href="https://safespeechcert.demoprojectonline.com/certification?token=' +
                $token_no + '=' + refurl +
                '" title="SafeSpeechCert Certification Badge" class="ssc-badge"><img src="https://safespeechcert.demoprojectonline.com/ice9/assets/badges/' +
                selectedBadge +
                '" alt="SafeSpeechCert Certification Badge" style="width: 142px;"></a><script src="https://safespeechcert.demoprojectonline.com/static-frs/js/SSCBadgeHelper.min.js"></scr' +
                'ipt>';
            $('#badgeEmbedCode').val(embedCode);
        } else {
            $('#badgeEmbedCode').val('');
        }
    });
    $('#badgeEmbedCode').on('focus click', function() {
        $(this).select();
    });
});
</script>
<script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.min.js"></script>
<!-- Use the latest stable version of html2canvas from cdnjs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script>
$(document).ready(function() {
    $token_no = $('#token_no').val();

    $("#qr-code").html("");

    var qrcode = new QRCode("qr-code", {
        text: "https://safespeechcert.demoprojectonline.com/certification?token=" +
            $token_no,
        width: 70,
        height: 70
    });

    $("#download-btn").click(function() {

        html2canvas(document.getElementById("canvas-container"), {
            useCORS: true,
            backgroundColor: null
        }).then(function(canvas) {

            var link = document.createElement('a');
            link.download = 'image_with_qr.png';
            link.href = canvas.toDataURL("image/png");
            link.click();
        }).catch(function(error) {
            console.error("Error generating canvas:", error);
        });
    });
});
</script>
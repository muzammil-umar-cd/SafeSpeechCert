<?php include('includes/header.php'); ?>
<link rel="stylesheet" href="certificate.css">
<?php
require 'db.php';

if (isset($_GET['token'])) {
    $trackingNo = $conn->real_escape_string($_GET['token']);
    $query = "SELECT * FROM certifications WHERE token_id = '$trackingNo'";
    $result = $conn->query($query);

    $query_s = "SELECT * FROM submissions WHERE tracking_no = '$trackingNo'";
    $results = $conn->query($query_s);

    $cert = $result->fetch_assoc();
    $results = $results->fetch_assoc();
    // var_dump($cert);
    // var_dump($results);
?>
<input type="hidden" id="token_no" value="<?php echo $results['tracking_no']; ?>">
<div class="container-fluid mt-5 p-5" id="trackingDiv">
    <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-12">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="section" id="certificate-container">
                        <div class="middle-certificate-container">
                            <div class="inner-certificate-container">
                                <div class="left-container on-large red-bg">
                                    <div id="canvas-container" style="position: relative; display: inline-block;">
                                        <img src="Stamp.png" id="image" alt="Image" width="300px" />
                                        <div id="qr-code"
                                            style="position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%);">
                                        </div>
                                    </div>
                                    <div class="page-status">
                                        <div>
                                            <h5>Protection Status</h5>
                                            <?php if(isset($cert['protection_status']) == '0'){ ?>
                                            <p class="tooltip">
                                                <span class="asset-status red-text">Unavailable</span>
                                                <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g></svg>
                                                <span class="tooltiptext tooltiptext-asset-status">SafeSpeechCert.com
                                                    has not yet scanned or approved this page for protection. For more
                                                    info visit the <a target="_blank" href="javascript:;">FAQ</a></span>
                                            </p>
                                            <?php }else{ ?>
                                                <p class="tooltip">
                                                <span class="asset-status green-text">PROTECTED</span>
                                                <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g></svg>
                                                <span class="tooltiptext tooltiptext-asset-status">SafeSpeechCert.com
                                                    has scanned and approved this Author for protection.</span>
                                            </p>
                                            <?php } ?>
                                        </div>
                                        <div class="protection-duration">
                                            <h5>Protection Duration</h5>
                                            <?php if(isset($cert['protection_duration']) == '0') { ?>
                                                <p class="duration red-text">0 days</p>
                                            <?php }else{ ?>
                                                <p class="duration green-text"><?php echo $cert['protection_duration']; ?> days</p>
                                            <?php } ?>
                                        </div>
                                    </div>
                                </div>

                                <div class="right-container">
                                    <div class="asset-info">
                                        <div>
                                            <div>
                                                <h5>Author Name</h5>
                                                <?php if(!isset($cert['author_name'])){ ?>
                                                <p class="tooltip">
                                                    <span id="account-status" class="red-text">Non-verified</span>
                                                    <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                                    <span class="tooltiptext tooltiptext-account-status">The badge
                                                        holder has not yet been verified.</span>
                                                </p>
                                                <?php }else{ ?>
                                                    <p class="tooltip">
                                                    <span id="account-status" class="green-text"><?php echo $cert['author_name']; ?></span>
                                                    <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                                    <span class="tooltiptext tooltiptext-account-status">The badge
                                                        holder has been verified.</span>
                                                </p>
                                                <?php } ?>
                                            </div>
                                            <div class="">
                                                <h5>Protection Status</h5>
                                                <?php if(isset($cert['protection_status']) == '0'){ ?>
                                                <p class="tooltip">
                                                    <span class="asset-status red-text">Unavailable</span>
                                                    <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                                    <span class="tooltiptext">SafeSpeechCert.com is not currently
                                                        protecting this
                                                        page due to unauthorized use.</span>
                                                </p>
                                                <?php }else{ ?>
                                                <p class="tooltip">
                                                <span class="asset-status green-text">PROTECTED</span>
                                                <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g></svg>
                                                <span class="tooltiptext tooltiptext-asset-status">SafeSpeechCert.com
                                                    has scanned and approved this Author for protection.</span>
                                            </p>
                                            <?php } ?>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <h5>Permanent URL</h5>
                                                <a id="permanent-url"
                                                    href="javascript:;"
                                                    class="tooltip"><span
                                                        class="show-url">safespeechcert.com/certification...</span>
                                                    &nbsp; <span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve"> <g> <g><g><path d="M330.667,0h-256C51.093,0,32,19.093,32,42.667v298.667h42.667V42.667h256V0z"></path><path d="M394.667,85.333H160c-23.573,0-42.667,19.093-42.667,42.667v298.667c0,23.573,19.093,42.667,42.667,42.667h234.667 c23.573,0,42.667-19.093,42.667-42.667V128C437.333,104.427,418.24,85.333,394.667,85.333z M394.667,426.667H160V128h234.667 V426.667z"></path></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span><span class="tooltiptext">Permanent, static
                                                        hyperlink to this certificate</span><span
                                                        class="tooltiptext-copy hide-tooltip">Permanent URL
                                                        copied!</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="statement">
                                        <p class="statement-protection">
                                        <?php if(isset(($cert['book_titles']))) { ?>
                                        <p class="statement-protection">
                                            <p style="color: #CE1312;"><span>Books:</span> <?php echo $cert['book_titles']; ?>
                                            </p>
                                        </p>
                                        <?php }else{ ?>
                                        <p class="statement-protection">
                                            <p class="tooltip">
                                            <span>Books:</span>
                                                <span id="account-status" class="red-text">Non-verified</span>
                                                <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                                <span class="tooltiptext tooltiptext-account-status">The badge
                                                    holder has not yet been verified.</span>
                                            </p>
                                        </p>
                                            
                                        <?php } ?>

                                        <p class="statement-protection">
                                        <?php if(isset($cert['content_type']) && $cert['content_type'] != '') { ?>
                                        <p class="statement-protection">
                                            <p style="color: #fff;"><span>Type Of Content:</span>&nbsp;
                                            <?php
                                                $contentTypes = explode(',', $cert['content_type']);
                                                foreach ($contentTypes as $contentType) {
                                                    echo '<span style="cursor: pointer;background: #8c8484; padding: 2px 4px; border-radius: 2px; margin-right: 5px;">' . trim($contentType) . '</span>';
                                                }
                                            ?>
                                            </p>
                                        </p>
                                        <?php }else{ ?>
                                        <p class="statement-protection">
                                            <p class="tooltip">
                                            <span>Type Of Content:</span>
                                                <span id="account-status" class="red-text">Non-verified</span>
                                                <svg version="1.1" class="help-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"><g><path style="fill:#1f1f1f;" d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                                <span class="tooltiptext tooltiptext-account-status">The badge
                                                    holder has not yet been verified.</span>
                                            </p>
                                        </p>
                                            
                                        <?php } ?>

                                            <?php if(!isset(($cert['protection_description']))) { ?>
                                        <p style="color: #CE1312;"><span>Protection:</span> Protection Unavailable:
                                            SafeSpeechCert.com has not yet scanned or approved this page for protection.
                                        </p>
                                        </p>
                                        <?php }else{ ?>
                                            <p style="color: #444;"><span>Protection:</span> <?php echo $cert['protection_description']; ?>
                                            </p>
                                            </p>

                                        <?php } ?>
                                        <?php if(!isset($cert['description'])){ ?>
                                        <p><span>Digital Millennium Copyright Act:</span> Is part of US Copyright Law.
                                            It addresses penalties for copyright infringement found on the Internet.
                                            This act protects content creators by "establishing procedures for proper
                                            notification" to OSPs when copyright infringement is identified online.
                                            Online Copyright Infringement Liability Limitation Act (OCILLA), Title II is
                                            part of the SafeSpeechCert as Section 512 to the Copyright Act and creates a
                                            conditional safe harbour to liability for copyright infringement by online
                                            service providers. These procedures allow proper SafeSpeechCert Takedown
                                            Notices to be
                                            filed by the write of the book/s or SafeSpeechCert.com, as their
                                            designated agent,
                                            to an OSP in case infringed material has been detected in their books.</p>
                                        <?php }else{ ?>
                                            <p><span>Digital Millennium Copyright Act:</span> <?php echo $cert['description']; ?></p>
                                            
                                        <?php } ?>
                                    </div>
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

}
?>


<?php include('includes/footer.php'); ?>

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
        width: 60,
        height: 60
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
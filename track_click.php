<?php
require 'db.php';

if (isset($_GET['refurl'])) {
    $refurl = $conn->real_escape_string($_GET['refurl']);
    $query = "INSERT INTO click_tracking (refurl, clicked_at) VALUES ('$refurl', NOW())";
}

?>
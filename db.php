<?php

// $conn = new mysqli("localhost", "root", "", "safe_speech_cert");

$conn = new mysqli("localhost", "demoprojectonlin_scc_user", "v5soa@POji4m", "demoprojectonlin_scc");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
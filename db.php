<?php

$conn = new mysqli("localhost", "root", "", "safe_speech_cert");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
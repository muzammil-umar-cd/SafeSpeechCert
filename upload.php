<?php

function extractTextFromDocx($filePath) {
    $zip = new ZipArchive();
    if ($zip->open($filePath) === TRUE) {
        $xmlData = $zip->getFromName("word/document.xml");
        $zip->close();

        $text = strip_tags($xmlData);
        return $text;
    }
    return "";
}

function countWordsAccurately($text) {
    preg_match_all('/\b[\p{L}\p{N}\']+\b/u', $text, $matches);
    return count($matches[0]);
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["file"])) {
    $files = $_FILES["file"];
    $totalWordCount = 0;
    $totalPrice = 0;
    $fileDetails = [];

    for ($i = 0; $i < count($files["name"]); $i++) {
        $fileTmp = $files["tmp_name"][$i];
        $fileType = $files["type"][$i];

        if ($fileType != "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            echo json_encode(["error" => "Invalid file type."]);
            exit;
        }

        $text = extractTextFromDocx($fileTmp);
        $wordCount = countWordsAccurately($text);

        // Pricing logic
        $basePrice = 200;
        $extraWordPrice = 0.00667;
        $threshold = 30000;

        if ($wordCount < $threshold) {
            // Apply 10% discount if words are less than 30,000
            $price = $basePrice - ($basePrice * 0.10); // 10% discount
        } else {
            $extraWords = $wordCount - $threshold;
            $price = $basePrice + ($extraWords * $extraWordPrice);
        }

        // Round pricing in a user-friendly way
        if ($price % 10 > 5) {
            $price = floor($price / 10) * 10 + 9.99;
        } else {
            $price = floor($price / 10) * 10 + 5.99;
        }

        $totalWordCount += $wordCount;
        $totalPrice += $price;

        $fileDetails[] = [
            "fileName" => $files["name"][$i],
            "wordCount" => $wordCount,
            "price" => number_format($price, 2)
        ];
    }

    echo json_encode([
        "totalWordCount" => $totalWordCount,
        "totalPrice" => number_format($totalPrice, 2),
        "files" => $fileDetails
    ]);
}
?>
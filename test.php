<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code on Image</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <!-- Use the latest stable version of html2canvas from cdnjs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
</head>
<body>
    <!-- Container for displaying the image and QR code -->
    <div id="canvas-container" style="position: relative; display: inline-block;">
        <!-- Your image here (make sure to replace this with your own image) -->
        <img src="Stamp SVG.png" id="image" alt="Image" width="500px" />
        <div id="qr-code" style="position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%);"></div>
    </div>

    <!-- Button to download the image with QR code -->
    <button id="download-btn">Download Image with QR</button>

    <script>
        $(document).ready(function() {
            // Generate QR code and place it in the center of the image
            var qrcode = new QRCode(document.getElementById("qr-code"), {
                text: "https://example.com", // Text or URL for QR code
                width: 128, // QR code size
                height: 128,
                colorDark : "#EAD388", // Foreground color (dark color)
                colorLight : "#231F20", // Background color (custom background, you can change the hex color)
            });

            // Handle download of the combined image
            $("#download-btn").click(function() {
                // Convert the container (image + QR code) into a canvas
                html2canvas(document.getElementById("canvas-container"), {
                    useCORS: true,           // Ensure CORS is used for external images
                    backgroundColor: null    // Set the background color to null for transparency
                }).then(function(canvas) {
                    // Create a link to download the canvas as a PNG image
                    var link = document.createElement('a');
                    link.download = 'image_with_qr.png'; // Set the download file name
                    link.href = canvas.toDataURL("image/png"); // Convert canvas to data URL with transparency
                    link.click(); // Trigger the download
                }).catch(function(error) {
                    console.error("Error generating canvas:", error);
                });
            });
        });
    </script>
</body>
</html>

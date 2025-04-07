<?php include('includes/header.php') ?>
<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/about/Cover About Us.jpg');
      background-position: center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header">API Documentation</h1>
            <p>Welcome to the SafeSpeechCert API documentation! Use this API to integrate content review and
                    certification seamlessly.</p>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row p-4">
        <div class="col-md-12 pt-4"></div>
        <div class="api-doc-container">

            <section class="api-doc-section" id="overview">
                <h2>Overview</h2>
                <p>SafeSpeechCert offers an API that allows you to submit website content for review and receive
                    certification for ethical language use. This API helps automate content submissions and
                    certification badges for ethical responsibility.</p>
            </section>

            <section class="api-doc-section" id="getting-started">
                <h2>Getting Started</h2>
                <ol>
                    <li>Create an Account and get your API Key.</li>
                    <li>Obtain Your API Key from the account settings.</li>
                    <li>API Endpoint: <code>/api/v1/review</code></li>
                    <li>Base URL: <code>https://api.safespeechcert.com</code></li>
                </ol>
            </section>

            <section class="api-doc-section" id="authentication">
                <h2>API Authentication</h2>
                <p>Include your API key in the header for authentication.</p>
                <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
            </section>

            <section class="api-doc-section" id="making-request">
                <h2>Making a Request</h2>
                <p>To submit content for review, make a <strong>POST</strong> request to <code>/api/v1/review</code>.
                </p>
                <h3>Request Example:</h3>
                <pre><code>
POST https://api.safespeechcert.com/api/v1/review

Headers:
  Authorization: Bearer YOUR_API_KEY
  Content-Type: application/json

Body:
{
  "content": "Content to review here"
}
            </code></pre>
                <h3>Response Example:</h3>
                <pre><code>
{
  "status": "success",
  "certification_status": "certified",
  "badge_url": "https://api.safespeechcert.com/badges/12345",
  "qr_code_url": "https://api.safespeechcert.com/qrcodes/12345"
}
            </code></pre>
            </section>

            <section class="api-doc-section" id="review-process">
                <h2>Review Process</h2>
                <p>Your content goes through two stages of review: AI analysis and human review. The final result
                    determines if your content is certified and if you receive a badge and QR code for verification.</p>
            </section>

            <section class="api-doc-section" id="rate-limits">
                <h2>Rate Limits</h2>
                <p>The SafeSpeechCert API has rate limits based on your account plan. Check your plan for specific
                    limits, or contact support for custom requests.</p>
            </section>

            <section class="api-doc-section" id="error-handling">
                <h2>Error Handling</h2>
                <p>In case of errors, the API will return an error message with details.</p>
                <pre><code>
400 Bad Request: Invalid content format
401 Unauthorized: Invalid API key
500 Internal Server Error: Unexpected error
            </code></pre>
            </section>

            <section class="api-doc-section" id="best-practices">
                <h2>Best Practices</h2>
                <ul>
                    <li>Ensure content is properly formatted for better review accuracy.</li>
                    <li>Submit content in reasonable lengths for quicker review.</li>
                    <li>Regularly review and update content for ongoing certification.</li>
                </ul>
            </section>

            <section class="api-doc-section" id="support">
                <h2>Support & Contact</h2>
                <p>If you need assistance, reach out to us:</p>
                <ul>
                    <li>Email: <a href="mailto:support@safespeechcert.com">support@safespeechcert.com</a></li>
                    <li>Help Center: <a href="help">Visit our Help Center</a></li>
                </ul>
            </section>

        </div>
    </div>
</div>
</div>

<?php include('includes/footer.php') ?>
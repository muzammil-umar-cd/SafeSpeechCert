<?php include('includes/header.php') ?>
<link rel="stylesheet" href="static-frs/css/help-center.css">
<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/about/Cover About Us.jpg');
      background-position: center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header">Welcome to Our Help Center</h1>
            <p>Your one-stop resource for answers, troubleshooting, and support.</p>
        </div>
    </div>
</div>

<div class="help-center-container container">

        <section class="faq-section">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div class="faq">
                <h3>1. How do I get started with SafeSpeechCert?</h3>
                <p>To get started, simply create an account on our platform. Once your account is created, you can access your API key and start submitting content for review. Visit our <a href="documentation">API Documentation</a> for further details on using the API.</p>
            </div>
            <div class="faq">
                <h3>2. How long does the content review process take?</h3>
                <p>The review process typically takes a few minutes for the AI-powered review, but the human review stage may take longer depending on content length and complexity. You’ll be notified once your content is ready and certified.</p>
            </div>
            <div class="faq">
                <h3>3. What kind of content can I submit for review?</h3>
                <p>You can submit blog posts, articles, books, social media posts, and more. Ensure the content is in a readable format, either plain text or a URL.</p>
            </div>
            <div class="faq">
                <h3>4. How can I check if my content was certified?</h3>
                <p>Once reviewed and certified, you’ll receive a digital badge and a unique QR code. Display the badge on your content, and scan the QR code to verify certification.</p>
            </div>
        </section>

        <section class="support-ticket card" style="box-shadow: 3px 4px 18px 10px rgba(0, 0, 0, 0.08), 0px 10px 24px 10px rgba(0, 0, 0, 0.08);padding:17px;">
            <h2>Submit a Support Ticket</h2>
            <p>If you can't find an answer to your question or need assistance, fill out the form below and we will get back to you as soon as possible.</p>

            <form action="javascript:;" method="post" id="supportTicketForm" class="pt-4">
                <label for="name">Name:</label>
                <input class="form-control" type="text" id="name" name="name" required>

                <label for="email">Email Address:</label>
                <input class="form-control" type="email" id="email" name="email" required>

                <label for="subject">Subject:</label>
                <input class="form-control" type="text" id="subject" name="subject" required>

                <label for="description">Description of Issue:</label>
                <textarea id="description" name="description" rows="4" required></textarea>

                <button class="btn btn-primary mt-4" type="submit">Submit Ticket</button>
            </form>
        </section>

        <section class="contact-support text-center">
            <h2>Contact Support</h2>
            <p>If you need immediate assistance or have a complex issue, please contact us directly:</p>
            <ul>
                <li>Email: <a href="mailto:support@safespeechcert.com">support@safespeechcert.com</a></li>
                <li>Phone: 123-456-7890</li>
            </ul>
        </section>
    </div>
    
<?php include('includes/footer.php') ?>
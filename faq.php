<?php include('includes/header.php'); ?>

<style>
.faq-page {
    font-family: Arial, sans-serif;
    background-color: #f4f7fc;
    color: #333;
    line-height: 1.6;
}

/* Header styling */
.faq-header {
    background-color: #44aed7;
    color: white;
    padding: 40px 0;
}

.faq-title {
    font-size: 2.5em;
    text-align: center;
}

.faq-subtitle {
    font-size: 1.2em;
    text-align: center;
}

/* FAQ Section Styling */
.faq-section {
    background-color: #ffffff;
    padding: 50px 0;
}

.faq-item {
    margin-bottom: 30px;
}

.faq-question {
    background-color: #44aed7;
    color: white;
    border: none;
    padding: 15px;
    width: 100%;
    text-align: left;
    font-size: 1.4em;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.faq-question:hover {
    background-color: #2d99e1;
}

.faq-answer {
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 5px;
    display: none;
    font-size: 1.1em;
    color: #555;
}

/* Footer Styling */
.faq-footer {
    background-color: #f4f7fc;
    padding: 20px 0;
    text-align: center;
}

.faq-footer p {
    font-size: 1em;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .faq-title {
        font-size: 2em;
    }

    .faq-subtitle {
        font-size: 1em;
    }

    .faq-question {
        font-size: 1.2em;
    }

    .faq-answer {
        font-size: 1em;
    }
}
</style>

<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/assets/freemium/freemium-banner.jpg');
      background-position: top center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header pb-3">Frequently Asked Questions</h1>
            <p>Find answers to the most common questions about SafeSpeechCert.</p>
        </div>
    </div>
</div>
<div class="faq-page">

    <section class="faq-section">
        <div class="container">
            <div class="faq-item">
                <button class="faq-question">What is SafeSpeechCert? </button>
                <div class="faq-answer">
                    <p>SafeSpeechCert is a content review platform designed to help creators ensure their work adheres
                        to ethical standards...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Who can use SafeSpeechCert? </button>
                <div class="faq-answer">
                    <p>SafeSpeechCert is ideal for a wide range of content creators, including authors, bloggers,
                        journalists, businesses...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">What is included in the Free Plan? </button>
                <div class="faq-answer">
                    <p>The Free Plan allows you to submit up to 1 document per month for review. You'll receive
                        AI-powered analysis...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">How does SafeSpeechCert review my content? </button>
                <div class="faq-answer">
                    <p>Once you submit your content, our AI-powered tool scans it for harmful language, hate speech, and
                        bias...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Can I upgrade or downgrade my plan? </button>
                <div class="faq-answer">
                    <p>Yes! You can easily upgrade or downgrade your plan at any time. If you require more documents to
                        be reviewed...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">What happens if my content doesn't pass the review? </button>
                <div class="faq-answer">
                    <p>If your content doesn't pass the review, our system will provide feedback detailing areas that
                        need improvement...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">How long does it take to review my content? </button>
                <div class="faq-answer">
                    <p>The review process typically takes a few hours to a couple of days, depending on the length and
                        complexity...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">How do I get started with SafeSpeechCert? </button>
                <div class="faq-answer">
                    <p>Getting started is easy! Simply create an account, select the plan that fits your needs, and
                        start submitting your content...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Do you offer a money-back guarantee? </button>
                <div class="faq-answer">
                    <p>Yes, all paid plans come with a 14-day money-back guarantee. If you're not satisfied with our
                        service...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">How do I contact customer support? </button>
                <div class="faq-answer">
                    <p>If you have any questions or need assistance, our customer support team is available via email...
                    </p>
                </div>
            </div>
        </div>
    </section>

</div>
<?php include('includes/footer.php'); ?>

<script>
// Get all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener for each question
faqQuestions.forEach((question) => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the associated answer

        // Toggle visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Hide the answer if it's open
        } else {
            answer.style.display = 'block'; // Show the answer if it's closed
        }
    });
});
</script>
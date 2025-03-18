<?php include('includes/header.php'); ?>

<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/assets/freemium/freemium-banner.jpg');
      background-position: top center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header">Contact SafeSpeechCert</h1>
            <p class="lead p-4">
                SafeSpeechCert is a leading online certification provider, specializing in content review certification for hate speech and offensive language proof. We utilize both human expertise and AI technology to ensure a comprehensive review process. We work closely with organizations and professionals to address their unique needs, helping them achieve their goals through our extensive certification programs.
            </p>
        </div>
    </div>
</div>


<div id="leadForm" class="form-container">
    <div class="form-inner">
        <div class="sh-box query-frm sticky-form-top" id="QueryBoxB2B">
            <div class="container p-4">
                <div class="card"
                    style="box-shadow: 3px 4px 18px 10px rgba(0, 0, 0, 0.08), 0px 10px 24px 10px rgba(0, 0, 0, 0.08);">
                    <div class="card-body">
                        <div class="form-head text-center">
                            <h3 class="p-3">Contact Support</h3>
                            <p class="">Please complete the form below, and a representative from SafeSpeechCert will
                                get in touch with you shortly.</p>
                        </div>
                        <div style="display: flex;justify-content: center;">
                            <div class="callback-forms resource-pop-up">
                                <form novalidate="" name="" method="POST">
                                    <div class="form-firstname">
                                        <div class="form-group">
                                            <input name="firstname" type="text" aria-label="text"
                                                class="form-control p-3" placeholder="Name*" value="">
                                        </div>
                                    </div>
                                    <div class="form-email">
                                        <div class="form-group">
                                            <input name="email" type="email" aria-label="email" class="form-control p-3"
                                                placeholder="Email*" value="">
                                        </div>
                                    </div>
                                    <div class="form-phone">
                                        <div class="form-group">
                                            <input name="phone" type="text" aria-label="text" class="form-control p-3"
                                                placeholder="Phone*" value="">
                                        </div>
                                    </div>
                                    <div class="form-query">
                                        <div class="form-group">
                                            <textarea name="query" id="query"
                                                placeholder="Write your query here.."></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn" id="b2b-form-submit">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<?php include('includes/footer.php'); ?>
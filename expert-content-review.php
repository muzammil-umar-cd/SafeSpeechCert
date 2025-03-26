<?php
include("includes/header.php");
require('db.php');

$get_merchants = $conn->query("SELECT * FROM merchants where status = 'Active'");
$merchants = $get_merchants->fetch_assoc();

?>


<div id="skillupBanner" class="skillup-home-static-banner">
    <div class="banner" data-test="Banner" style="
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('ice9/assets/freemium/process-banner.jpg');
      background-position: top center;
      background-size: cover;
    ">
        <div class="container heading text-center">
            <h1 class="ban-header">Content Review Submission</h1>
            <p class="lead p-4">
                Submit your books, articles, blogs, or other written materials for a
                comprehensive review. Our advanced AI and expert reviewers will assess
                your content for accuracy, neutrality, and sensitivity. Ensure your work
                is free from biased, offensive, or insensitive language while
                maintaining its original intent. Get certified with a digital badge and
                QR verification upon approval.
            </p>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h3 id="heading">Get Your Content Certified!</h3>
                <p>Submit Your Content for Review</p>
                <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
                        <li class="active" id="account"><strong>Document</strong></li>
                        <li id="personal"><strong>Personal</strong></li>
                        <li id="details"><strong>Details</strong></li>
                        <li id="payment"><strong>Payment</strong></li>
                        <li id="confirm"><strong>Finish</strong></li>
                    </ul>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br />
                    <!-- fieldsets -->
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Upload Document:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 1 - 5</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="dropzone" class="dropzone"></div>
                                    <input type="hidden" name="docFiles" id="docFiles" required>
                                </div>
                            </div>
                        </div>
                        <input type="button" class="action-button step-1" value="Next" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Personal Information:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 2 - 5</h2>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="name"> Full Name: *</label>
                                <input type="text" class="form-control" id="name" required placeholder="Full Name">
                            </div>

                            <div class="col-md-12">
                                <label for="email"> E-mail: *</label>
                                <input type="email" class="form-control" id="email" required placeholder="Email">
                            </div>

                            <div class="col-md-12">
                                <label for="phone"> Phone: *</label>
                                <input type="tel" class="form-control" id="phone" required placeholder="Phone">
                            </div>

                            <div class="col-md-12">
                                <label for="brief"> Brief <small>(Optional)</small>: </label>
                                <textarea class="form-control" rows="5" id="brief"
                                    placeholder="Write any brief related to your attachment"></textarea>
                            </div>
                        </div>
                        <input type="button" name="next" class="action-button step-2" value="Next" />
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 style="font-weight: bold;padding: 10px 10px;text-decoration: underline;" class="fs-title">Document Instructions</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 3 - 5</h2>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <ul id="ins">
                                    <li>
                                        <span class="text-success">✔</span> Accurately counts words based on spaces, tabs, and newlines.
                                    </li>
                                    <li>
                                        <span class="text-success">✔</span> Automatically ignores punctuation such as commas, periods, and special characters.
                                    </li>
                                    <li>
                                        <span class="text-success">✔</span> Recognizes numbers as words (e.g., "123" is counted as one word).
                                    </li>
                                    <li>
                                        <span class="text-success">✔</span> Pricing: Up to 30,000 words for $200.
                                    </li>
                                    <li>
                                        <span class="text-success">✔</span> Any additional words beyond the limit are charged at $0.0067 per word.
                                    </li>
                                </ul>
                            </div>
                            <div class="count" style="display: flex; flex-direction: column; align-items: end;">
                                <div id="fileDetails" style="width: 100%; margin-top: 10px;">
                                    <!-- File details will be appended here -->
                                </div>
                                <h5 style="text-align: center; font-weight: bold;">
                                    <i>Word Count: <span id="wordCount">0</span></i>
                                </h5>
                                <h5 style="text-align: center; font-weight: bold;">
                                    <i>Total Price: <span class="price">0</span></i>
                                </h5>
                            </div>
                        </div>
                        <input type="button" name="next" class="next action-button" value="Next" />
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 style="font-weight: bold;padding: 10px 10px;text-decoration: underline;" class="fs-title">Payment Information</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 4 - 5</h2>
                                </div>
                            </div>
                            <input type="hidden" id="price" value="">
                            <input type="hidden" id="wordCountTotal" value="">
                            <div class="row">
                                <div class="col-md-12 d-flex justify-content-center" style="padding: 0 15px 15px;">
                                    <div class="form-check" style="background: rgb(68, 174, 215);">
                                        <input style="display: none;height: auto;width: auto;" class="form-check-input" type="checkbox" value="" id="usePersonalInfo">
                                        <label class="form-check-label" for="usePersonalInfo" style="font-size: 14px;">
                                            Use Personal Information for Payment
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="padding: 10px;">
                                <div class="col-md-6 col-6">
                                    <label for="text"> First Name: </label>
                                    <input type="text" class="form-control" id="m_fname" required
                                        placeholder="First Name">
                                </div>
                                <div class="col-md-6 col-6">
                                    <label for="text"> Last Name: </label>
                                    <input type="text" class="form-control" id="m_lname" required
                                        placeholder="Last Name">
                                </div>
                                <div class="col-md-6 col-6">
                                    <label for="text"> Email: </label>
                                    <input type="text" class="form-control" id="m_email" required placeholder="Email">
                                </div>
                                <div class="col-md-6 col-6">
                                    <label for="text"> Phone: </label>
                                    <input type="text" class="form-control" id="m_phone" required placeholder="Phone">
                                </div>
                                <div class="col-md-8">
                                    <label for="text"> Street Address: </label>
                                    <input type="text" class="form-control" id="m_street" required
                                        placeholder="Street Address">
                                </div>
                                <div class="col-md-4 col-6">
                                    <label for="text"> ZipCode: </label>
                                    <input type="text" class="form-control" id="m_zipcode" required
                                        placeholder="ZipCode">
                                </div>
                                <div class="col-md-4 col-6">
                                    <label for="text"> City: </label>
                                    <input type="text" class="form-control" id="m_city" required placeholder="City">
                                </div>
                                <div class="col-md-4 col-6">
                                    <label for="text"> Country: </label>
                                    <input type="text" class="form-control" id="m_country" required
                                        placeholder="Country">
                                </div>
                                <div class="col-md-4 col-6">
                                    <label for="text"> State: </label>
                                    <input type="text" class="form-control" id="m_state" required placeholder="State">
                                </div>
                            </div>
                            <h3 style="font-weight: bold;padding: 10px 10px;">Card Information</h3>
                            <?php if ($merchants["merchant_name"] == "Stripe") { ?>
                                <input type="hidden" id="merchant_name" value="stripe">
                                <input type="hidden" id="stripe_key" value="<?php echo $merchants['public_key']; ?>">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="card-element">Credit or debit card:</label>
                                        <div id="card-element" style="padding: 20px;">
                                            <!-- Stripe Element will be inserted here. -->
                                        </div>
                                    </div>
                                </div>
                            <?php } else if ($merchants["merchant_name"] == "Authorize") { ?>
                                <div class="row">
                                    <input type="hidden" id="merchant_name" value="authorize">
                                    <div class="col-md-12">
                                        <label for="text"> Card Number: </label>
                                        <input type="text" class="form-control" id="m_card" required
                                            placeholder="Card Number">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="text"> Expiration (mm/yy): </label>
                                        <input type="text" class="form-control" id="m_exp" required
                                            placeholder="Expiration (mm/yy)">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="text"> Security Code (CVC): </label>
                                        <input type="text" class="form-control" id="m_cvc" required
                                            placeholder="Security Code (CVC)">
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <button type="button" name="next" class="action-button paynow" style="width: 165px;">PayNow
                            (<span class="price"></span>)</button>
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Finish:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 5 - 5</h2>
                                </div>
                            </div>
                            <br />
                            <h2 class="purple-text text-center">
                                <strong>Order Placed Successfully!</strong>
                            </h2>
                            <div class="invoice-box">
                                <tr class="top">
                                    <td colspan="2">
                                        <table>
                                            <tr>
                                                <td class="title">
                                                    <h5 class="purple-text" style="margin: 0 0 .5rem 0;">Tracking Number:</h5>
                                                    <span id="trackingNo" onclick="copyToClipboard('trackingNo')" style="cursor: pointer;"></span>
                                                </td>
                                                <td>
                                                    Date: <span class=" text-center" id="orderDate"></span><br>
                                                    Status: <span class=" text-center" id="orderStatus">Paid</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <table cellpadding="0" cellspacing="0">
                                    <tr class="heading">
                                        <td>File Name</td>
                                        <td>Word Count</td>
                                        <td>Price</td>
                                    </tr>
                                    <tbody id="orderDetails">
                                        <!-- Order details will be appended here -->
                                    </tbody>
                                    <tr class="total pt-3">
                                        <td></td>
                                        <td class="text-right">Total Word Count:</td>
                                        <td><span class="text-center" id="totalWordCount">0</span></td>
                                    </tr>
                                    <tr class="total">
                                        <td></td>
                                        <td class="text-right">Total Price:</td>
                                        <td><span class="text-center" id="totalPrice">0</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>

<?php include("includes/footer.php"); ?>
<script>
    $(document).ready(function() {
        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);



        function setProgressBar(curStep) {
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar").css("width", percent + "%");
        }

        $(".submit").click(function() {
            return false;
        });
    });
</script>

<script src="https://js.stripe.com/v3/"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/mouse0270-bootstrap-notify/3.1.5/bootstrap-notify.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.6.0/cleave.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Format card number
        new Cleave('#m_card', {
            creditCard: true,
            onCreditCardTypeChanged: function(type) {
                // Update UI based on card type if needed
            }
        });

        // Format expiration date
        new Cleave('#m_exp', {
            date: true,
            datePattern: ['m', 'y']
        });

        // Format CVC
        new Cleave('#m_cvc', {
            blocks: [3],
            numericOnly: true
        });
    });
</script>
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
        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h3 id="heading">Get Your Content Certified!</h3>
                <p>Submit Your Content for Review</p>
                <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
                        <li class="active" id="account"><strong>Document</strong></li>
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
                                    <h2 class="steps">Step 1 - 3</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="dropzone" class="dropzone"></div>
                                    <input type="hidden" name="docFiles" id="docFiles" required>
                                </div>
                            </div>
                        </div>
                        <input type="button" class="action-button step-1" value="Upload" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-7">
                                            <h2 style="font-weight: bold;padding: 10px 10px;text-decoration: underline;" class="fs-title">Document Instructions</h2>
                                        </div>
                                        <div class="col-5">
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
                                <div class="col-md-6">
                                    <!-- PAYMENT -->
                                    <div class="row">
                                        <div class="col-7">
                                            <h2 style="font-weight: bold;padding: 10px 10px;text-decoration: underline;" class="fs-title">Payment Information</h2>
                                        </div>
                                        <div class="col-5">
                                            <h2 class="steps">Step 2 - 3</h2>
                                        </div>
                                    </div>
                                    <input type="hidden" id="price" value="">
                                    <input type="hidden" id="wordCountTotal" value="">
                                    <input type="hidden" id="coupon" value="">
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
                                            <label for="text">Country: </label>
                                            <select class="form-control" id="m_country" required>
                                                <option value="">Select Country</option>
                                            </select>
                                        </div>

                                        <div class="col-md-4 col-6">
                                            <label for="text">State: </label>
                                            <select class="form-control" id="m_state" required>
                                                <option value="">Select State</option>
                                            </select>
                                        </div>
                                        
                                        <div class="col-md-4 col-6">
                                            <label for="text">City: </label>
                                            <select class="form-control" id="m_city" required>
                                                <option value="">Select City</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="brief"> Brief <small>(Optional)</small>: </label>
                                            <textarea class="form-control" rows="5" id="brief"
                                                placeholder="Write any brief related to your attachment"></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 d-flex justify-content-center" style="padding: 0 15px 15px;">
                                            <div class="form-check form-check-voucher">
                                                <input style="display: none;height: auto;width: auto;" class="form-check-input" type="checkbox" id="useVoucher" style="margin-right: 10px;">
                                                <label class="form-check-label" for="useVoucher" style="font-size: 14px;">
                                                    Have a voucher? Click Me!
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12" id="voucherInputContainer" style="display: none; margin-top: 15px;">
                                            <label for="voucherCode">Voucher Code: <span id="voucherMessage" style="color: red;display: none;"></span></label>
                                            <input type="text" class="form-control" id="voucherCode" placeholder="Enter your voucher code">
                                            <input type="button" class="btn btn-primary" id="voucherSubmit" value="Apply Voucher" style="width: 30%; padding: 0px; float: right;">
                                        </div>
                                    </div>
                                    <h3 style="font-weight: bold;padding: 10px 10px;">Card Information</h3>
                                    <?php if ($merchants["merchant_name"] == "Stripe") { ?>
                                        <input type="hidden" id="merchant_name" value="stripe">
                                        <input type="hidden" id="stripe_key" value="<?php echo $merchants['public_key']; ?>">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label for="card-element">Credit or debit card:</label>
                                                <div id="card-element" style="padding: 20px;border: 1px solid #cacaca;border-radius: 11px;background: #cacaca82;">
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
                            </div>
                        </div>
                        <button type="button" name="next" class="action-button paynow" style="width: 165px;">PayNow
                            (<span class="price" id="totalPriceBtn"></span>)</button>
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Finish:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 3 - 3</h2>
                                </div>
                            </div>
                            <h2 class="purple-text text-center">
                                <strong>Order Placed Successfully!</strong>
                            </h2>
                            <div class="invoice-box">
                                <tr class="top">
                                    <td colspan="2">
                                        <table>
                                            <tr>
                                                <td class="title">
                                                    <h5 class="purple-text" style="margin: 0 0 .5rem 0;">Tracking Number: <span id="trackingNo" onclick="copyToClipboard('trackingNo')" style="cursor: pointer;"></span></h5>
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
                                    <tr class="total pt-3">
                                        <td><b><span id="coupon_title"></span></b></td>
                                        <td class="text-right">Discount:</td>
                                        <td><span class="text-center" id="discountPercent">0</span>%</td>
                                    </tr>
                                    <tr class="total">
                                        <td></td>
                                        <td class="text-right">Total Price:</td>
                                        <td><span class="text-center" id="totalPrice">0</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <a href="" id="details-tag" class="action-button" target="_blank" style="width: 165px;">View Detials</a>
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
<script>
    // Function to load the countries data from the JSON file
    function loadCountries() {
        $.getJSON('countries+states+cities.json', function(countriesData) {
            const countrySelect = $('#m_country');
            // Populate the country dropdown
            countriesData.forEach(country => {
                countrySelect.append(new Option(country.name, country.name));
            });

            // Event listener for country change
            countrySelect.on('change', function() {
                const selectedCountry = $(this).val();
                loadStates(countriesData, selectedCountry); // Load states for selected country
            });
        });
    }

    // Function to load states based on selected country
    function loadStates(countriesData, selectedCountry) {
        const stateSelect = $('#m_state');
        const citySelect = $('#m_city');
        stateSelect.empty().append('<option value="">Select State</option>'); // Clear states
        citySelect.empty().append('<option value="">Select City</option>'); // Clear cities

        const country = countriesData.find(c => c.name === selectedCountry);
        if (country) {
            // Populate the states dropdown based on selected country
            country.states.forEach(state => {
                stateSelect.append(new Option(state.name, state.name));
            });

            // Event listener for state change
            stateSelect.on('change', function() {
                const selectedState = $(this).val();
                loadCities(country, selectedState); // Load cities for selected state
            });
        }
    }

    // Function to load cities based on selected state
    function loadCities(country, selectedState) {
        const citySelect = $('#m_city');
        citySelect.empty().append('<option value="">Select City</option>'); // Clear cities

        const state = country.states.find(s => s.name === selectedState);
        if (state) {
            // Populate the cities dropdown based on selected state
            state.cities.forEach(city => {
                citySelect.append(new Option(city.name, city.name));
            });
        }
    }

    // On document ready, load countries
    $(document).ready(function() {
        loadCountries(); // Load countries on page load
    });
</script>
<script src="static-frs/js/voucher.js"></script>
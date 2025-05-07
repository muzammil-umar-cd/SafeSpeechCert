var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

// Initialize Dropzone
Dropzone.autoDiscover = false;
var uploadedFiles = [];

var myDropzone = new Dropzone("#dropzone", {
  url: "upload",
  autoProcessQueue: false,
  uploadMultiple: true,
  parallelUploads: 10,
  maxFiles: 10,
  acceptedFiles: ".docx",
  addRemoveLinks: true,
  init: function () {
    this.on("addedfile", function (file) {
      uploadedFiles.push(file);
    });
    this.on("removedfile", function (file) {
      var index = uploadedFiles.indexOf(file);
      if (index > -1) {
        uploadedFiles.splice(index, 1);
      }
    });
  },
});

$(".step-1").on("click", function (e) {
  e.preventDefault();

  if (uploadedFiles.length === 0) {
    $.notify(`<strong>Please select at least one .docx file.</strong>`, {
      type: "danger",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "center",
      },
    });
    return;
  }

  myDropzone.processQueue();
});

myDropzone.on("successmultiple", function (files, response) {
  var data = JSON.parse(response);
  if (data.error) {
    $("#message").text(data.error);
  } else {
    $("#message").text("Files uploaded successfully!");
    $("#wordCount").text(data.totalWordCount);
    $(".price").text("$" + data.totalPrice);
    $("#price").val(data.totalPrice);
    $("#wordCountTotal").val(data.totalWordCount);
    $("#docFiles").val(JSON.stringify(data.files));

    // Display file details
    var fileDetailsContainer = $("#fileDetails");
    fileDetailsContainer.empty();
    data.files.forEach(function (file) {
      var fileDetail = `
              <div style="margin-bottom: 10px;border-bottom: 1px solid coral;">
                  <strong>File Name:</strong> ${file.fileName} <br>
                  <strong>Word Count:</strong> ${file.wordCount} <br>
                  <strong>Price:</strong> $${file.price}
              </div>
          `;
      fileDetailsContainer.append(fileDetail);
    });

    // Move to the next step
    var current_fs = $(".step-1").parent();
    var next_fs = $(".step-1").parent().next();

    // Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    // Show the next fieldset
    next_fs.show();
    // Hide the current fieldset with style
    current_fs.animate(
      {
        opacity: 0,
      },
      {
        step: function (now) {
          // For making fieldset appear animation
          var opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({
            opacity: opacity,
          });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  }
});

myDropzone.on("errormultiple", function (files, response) {
  $("#message").text("Error uploading files.");
});

$(".step-2").on("click", function () {
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    $.notify(`<strong>Please Enter Your Full Name</strong>`, {
      type: "danger",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "center",
      },
    });
    return;
  } else if (!email) {
    $.notify(`<strong>Please Enter Your Email</strong>`, {
      type: "danger",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "center",
      },
    });
    return;
  } else if (!emailPattern.test(email)) {
    $.notify(`<strong>Please Enter a Valid Email Address</strong>`, {
      type: "danger",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "center",
      },
    });
    return;
  } else if (!phone) {
    $.notify(`<strong>Please Enter Your Phone Number</strong>`, {
      type: "danger",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "center",
      },
    });
    return;
  } else if (phone.length < 10) {
    $.notify(`<strong>Phone Number Must Be At Least 10 Digits</strong>`, {
      type: "danger",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "center",
      },
    });
    return;
  }

  // Move to the next step
  var current_fs = $(".step-2").parent();
  var next_fs = $(".step-2").parent().next();

  // Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  // Show the next fieldset
  next_fs.show();
  // Hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0,
    },
    {
      step: function (now) {
        // For making fieldset appear animation
        var opacity = 1 - now;

        current_fs.css({
          display: "none",
          position: "relative",
        });
        next_fs.css({
          opacity: opacity,
        });
      },
      duration: 500,
    }
  );
  setProgressBar(++current);
});

// $(".step-2-btn").on("click", function (e) {
//   var button = $(this);
//   var form = button.closest("form")[0];

//   if (form.checkValidity()) {
//     e.preventDefault();

//     $("#step-3").show();
//     $("#step-2").hide();
//   } else {
//     form.classList.add("was-validated");
//   }
// });
// $(".back-step2").on("click", function () {
//   $("#step-3").hide();
//   $("#step-2").show();
// });

$(".back-step3").on("click", function () {
  $("#step-3").show();
  $("#step-4").hide();
});

$(".checkout").on("click", function () {
  $("#step-3").hide();
  $("#step-4").show();
});

// PROCESS TRANSACTION

$(document).ready(function () {
  if ($("#merchant_name").val() == "stripe") {
    var stripe_key = $("#stripe_key").val();
    var stripe = Stripe(stripe_key);
    var elements = stripe.elements();
    // var cardElement = elements.create('card', {
    //   style: {
    //     base: {
    //       iconColor: '#44aed7', // Custom icon color
    //       color: '#272c37', // Text color
    //       fontWeight: '500',
    //       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    //       fontSize: '16px',
    //       fontSmoothing: 'antialiased',
    //       backgroundColor: '#f9f9f9', // Background color for the input
    //       border: '1px solid #ddd', // Border for the input
    //       borderRadius: '5px', // Rounded corners
    //       padding: '10px', // Padding inside the input
    //       ':-webkit-autofill': {
    //         color: '#fce883',
    //       },
    //       '::placeholder': {
    //         color: '#aab7c4', // Placeholder text color
    //       },
    //     },
    //     invalid: {
    //       iconColor: '#FFC7EE', // Icon color for invalid input
    //       color: '#FFC7EE', // Text color for invalid input
    //       borderColor: '#ff4d4f', // Border color for invalid input
    //     },
    //   },
    // });
    var cardElement = elements.create("card");

    cardElement.mount("#card-element");

    $(".paynow").on("click", function (e) {
      e.preventDefault();

      let fields = [
        { id: "#m_fname", message: "Please enter First Name" },
        { id: "#m_lname", message: "Please enter Last Name" },
        { id: "#m_email", message: "Please enter Email", validate: "email" },
        {
          id: "#m_phone",
          message: "Please enter Phone Number",
          validate: "phone",
        },
        { id: "#m_street", message: "Please enter Street Address" },
        { id: "#m_city", message: "Please enter City" },
        { id: "#m_country", message: "Please enter Country" },
        { id: "#m_state", message: "Please enter State" },
        { id: "#m_zipcode", message: "Please enter Zip Code" }
      ];

      for (let field of fields) {
        let value = $(field.id).val().trim();

        if (!value) {
          $.notify(`<strong>${field.message}</strong>`, {
            type: "danger",
            allow_dismiss: true,
            placement: { from: "bottom", align: "center" },
          });
          return; // Stop validation and prevent form submission
        }

        // Email validation
        if (field.validate === "email") {
          let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            $.notify("<strong>Please enter a valid Email Address</strong>", {
              type: "danger",
              allow_dismiss: true,
              placement: { from: "bottom", align: "center" },
            });
            return;
          }
        }

        // Phone number validation (10 digits or more)
        if (field.validate === "phone") {
          if (value.length < 10 || isNaN(value)) {
            $.notify(
              "<strong>Phone number must be at least 10 digits</strong>",
              {
                type: "danger",
                allow_dismiss: true,
                placement: { from: "bottom", align: "center" },
              }
            );
            return;
          }
        }
      }

      $(".paynow").text("Processing...");
      $(".paynow").css("background", "#46b446d1");
      $(".paynow").attr("disabled", true);

      stripe.createToken(cardElement).then(function (result) {
        if (result.error) {
          // Show error message if card details are invalid
          $("#card-errors").text(result.error.message);
        } else {
          let formData = new FormData();

          // File Upload
          if (uploadedFiles.length > 0) {
            for (let i = 0; i < uploadedFiles.length; i++) {
              formData.append("file[]", uploadedFiles[i]);
            }
          }

          var token_id = result.token.id;

          // Step 2 - Personal Info
          formData.append("brief", $("#brief").val());
          formData.append("price", $("#price").val().replace(/,/g, ""));
          formData.append("word_count", $("#wordCountTotal").val());

          // Step 4 - Payment Info
          formData.append("m_fname", $("#m_fname").val());
          formData.append("m_lname", $("#m_lname").val());
          formData.append("m_email", $("#m_email").val());
          formData.append("m_phone", $("#m_phone").val());
          
          formData.append("m_street", $("#m_street").val());
          formData.append("m_city", $("#m_city").val());
          formData.append("m_country", $("#m_country").val());
          formData.append("m_state", $("#m_state").val());
          formData.append("m_zipcode", $("#m_zipcode").val());

          // Stripe Token
          formData.append("stripeToken", token_id);

          // Coupon Code
          formData.append("coupon", $("#coupon").val());

          // Add docFiles key
          formData.append("docFiles", $("#docFiles").val());

          console.log(formData);
          
          $.ajax({
            url: "process_transaction",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
              var jsonResponse = JSON.parse(response);
              if (jsonResponse.success) {
                $.notify(`<strong>${jsonResponse.message}</strong>`, {
                  type: "success",
                  allow_dismiss: true,
                  placement: {
                    from: "bottom",
                    align: "center",
                  },
                });
                // Clear all specified input fields
                $("#docFile").val("");
                $("#brief").val("");
                $("#price").val("");
                $("#wordCountTotal").val("");
                $("#m_fname").val("");
                $("#m_lname").val("");
                $("#m_email").val("");
                $("#m_phone").val("");
                $("#m_street").val("");
                $("#m_city").val("");
                $("#m_country").val("");
                $("#m_state").val("");
                $("#m_zipcode").val("");
                $("#m_card").val("");
                $("#m_exp").val("");
                $("#m_cvc").val("");
                cardElement.clear();

                var copy_SVG = `
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" x="0" y="0" viewBox="0 0 699.428 699.428" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M502.714 0H240.428C194.178 0 153 42.425 153 87.429l-25.267.59c-46.228 0-84.019 41.834-84.019 86.838V612c0 45.004 41.179 87.428 87.429 87.428H459c46.249 0 87.428-42.424 87.428-87.428h21.857c46.25 0 87.429-42.424 87.429-87.428v-349.19L502.714 0zM459 655.715H131.143c-22.95 0-43.714-21.441-43.714-43.715V174.857c0-22.272 18.688-42.993 41.638-42.993l23.933-.721v393.429C153 569.576 194.178 612 240.428 612h262.286c0 22.273-20.765 43.715-43.714 43.715zm153-131.143c0 22.271-20.765 43.713-43.715 43.713H240.428c-22.95 0-43.714-21.441-43.714-43.713V87.429c0-22.272 20.764-43.714 43.714-43.714H459c-.351 50.337 0 87.975 0 87.975 0 45.419 40.872 86.882 87.428 86.882H612v306zm-65.572-349.715c-23.277 0-43.714-42.293-43.714-64.981V44.348L612 174.857h-65.572zm-43.714 131.537H306c-12.065 0-21.857 9.77-21.857 21.835 0 12.065 9.792 21.835 21.857 21.835h196.714c12.065 0 21.857-9.771 21.857-21.835 0-12.065-9.792-21.835-21.857-21.835zm0 109.176H306c-12.065 0-21.857 9.77-21.857 21.834 0 12.066 9.792 21.836 21.857 21.836h196.714c12.065 0 21.857-9.77 21.857-21.836 0-12.064-9.792-21.834-21.857-21.834z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path></g></svg>
                `;
                // Display order details
                $("#trackingNo").html(jsonResponse.trackingNo + " " + copy_SVG);
                $('#details-tag').attr('href', 'certificaiton-search?tag=' + jsonResponse.trackingNo);
                $("#totalWordCount").text(jsonResponse.totalWordCount);
                $("#totalPrice").text("$" + jsonResponse.totalPrice);
                $("#orderStatus").text(jsonResponse.orderStatus);
                $("#orderDate").text(new Date().toLocaleDateString());
                $('#discountPercent').text(jsonResponse.discount);
                $('#coupon_title').text(jsonResponse.coupon_title);

                var orderDetailsContainer = $("#orderDetails");
                orderDetailsContainer.empty();
                jsonResponse.files.forEach(function (file) {
                  var fileDetail = `
                    <tr class="item">
                        <td>${file.fileName}</td>
                        <td>${file.wordCount}</td>
                        <td>$${file.price}</td>
                    </tr>
                `;
                  orderDetailsContainer.append(fileDetail);
                });

                // Move to the next step
                var current_fs = $(".paynow").parent();
                var next_fs = $(".paynow").parent().next();

                // Add Class Active
                $("#progressbar li")
                  .eq($("fieldset").index(next_fs))
                  .addClass("active");

                // Show the next fieldset
                next_fs.show();
                // Hide the current fieldset with style
                current_fs.animate(
                  {
                    opacity: 0,
                  },
                  {
                    step: function (now) {
                      // For making fieldset appear animation
                      var opacity = 1 - now;

                      current_fs.css({
                        display: "none",
                        position: "relative",
                      });
                      next_fs.css({
                        opacity: opacity,
                      });
                    },
                    duration: 500,
                  }
                );
                setProgressBar(++current);
              } else {
                $.notify(`<strong>${jsonResponse.errorMessages}</strong>`, {
                  type: "danger",
                  allow_dismiss: true,
                  placement: {
                    from: "bottom",
                    align: "center",
                  },
                });
              }

              $("#progressbar li.active").each(function () {
                $(this).css("color", "#46b446d1");
              });
              $("<style>")
                .prop("type", "text/css")
                .html(
                  "#progressbar li.active:before, #progressbar li.active:after { background: #46b446d1 !important; }"
                )
                .appendTo("head");

              $(".progress-bar").css("background-color", "#46b446d1");
            },
            error: function (e) {
              var notify = $.notify(`<strong>${e.errorMessages}</strong>`, {
                type: "danger",
                allow_dismiss: true,
                placement: {
                  from: "bottom",
                  align: "center",
                },
              });
            },
          });
        }
      });
    });
  } else if ($("#merchant_name").val() == "authorize") {
    $(".paynow").on("click", function (e) {
      e.preventDefault();

      let fields = [
        { id: "#m_fname", message: "Please enter First Name" },
        { id: "#m_lname", message: "Please enter Last Name" },
        { id: "#m_email", message: "Please enter Email", validate: "email" },
        {
          id: "#m_phone",
          message: "Please enter Phone Number",
          validate: "phone",
        },
        { id: "#m_street", message: "Please enter Street Address" },
        { id: "#m_city", message: "Please enter City" },
        { id: "#m_country", message: "Please enter Country" },
        { id: "#m_state", message: "Please enter State" },
        { id: "#m_zipcode", message: "Please enter Zip Code" },
      ];

      for (let field of fields) {
        let value = $(field.id).val().trim();

        if (!value) {
          $.notify(`<strong>${field.message}</strong>`, {
            type: "danger",
            allow_dismiss: true,
            placement: { from: "bottom", align: "center" },
          });
          return; // Stop validation and prevent form submission
        }

        // Email validation
        if (field.validate === "email") {
          let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            $.notify("<strong>Please enter a valid Email Address</strong>", {
              type: "danger",
              allow_dismiss: true,
              placement: { from: "bottom", align: "center" },
            });
            return;
          }
        }

        // Phone number validation (10 digits or more)
        if (field.validate === "phone") {
          if (value.length < 10 || isNaN(value)) {
            $.notify(
              "<strong>Phone number must be at least 10 digits</strong>",
              {
                type: "danger",
                allow_dismiss: true,
                placement: { from: "bottom", align: "center" },
              }
            );
            return;
          }
        }
      }

      $(".paynow").text("Processing...");
      $(".paynow").css("background", "#46b446d1");
      $(".paynow").attr("disabled", true);

      let formData = new FormData();

      // File Upload
      let files = $("#docFile")[0].files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          formData.append("file[]", files[i]);
        }
      }

      // Step 2 - Personal Info
      formData.append("brief", $("#brief").val());
      formData.append("price", $("#price").val().replace(/,/g, ""));
      formData.append("word_count", $("#wordCountTotal").val());

      // Step 4 - Payment Info
      formData.append("m_fname", $("#m_fname").val());
      formData.append("m_lname", $("#m_lname").val());
      formData.append("m_email", $("#m_email").val());
      formData.append("m_phone", $("#m_phone").val());
      formData.append("m_street", $("#m_street").val());
      formData.append("m_city", $("#m_city").val());
      formData.append("m_country", $("#m_country").val());
      formData.append("m_state", $("#m_state").val());
      formData.append("m_zipcode", $("#m_zipcode").val());

      // Step 5 - Payment Method
      formData.append("m_card", $("#m_card").val());
      formData.append("m_exp", $("#m_exp").val());
      formData.append("m_cvc", $("#m_cvc").val());

      // Coupon Code
      formData.append("coupon", $("#coupon").val());

      // Add docFiles key
      formData.append("docFiles", $("#docFiles").val());

      $.ajax({
        url: "process_transaction",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          var jsonResponse = JSON.parse(response);
          if (jsonResponse.success) {
            $.notify(`<strong>${jsonResponse.message}</strong>`, {
              type: "success",
              allow_dismiss: true,
              placement: {
                from: "bottom",
                align: "center",
              },
            });
            // Clear all specified input fields
            $("#docFile").val("");
            $("#brief").val("");
            $("#price").val("");
            $("#wordCountTotal").val("");
            $("#m_fname").val("");
            $("#m_lname").val("");
            $("#m_email").val("");
            $("#m_phone").val("");
            $("#m_street").val("");
            $("#m_city").val("");
            $("#m_country").val("");
            $("#m_state").val("");
            $("#m_zipcode").val("");
            $("#m_card").val("");
            $("#m_exp").val("");
            $("#m_cvc").val("");
            cardElement.clear();

            var copy_SVG = `
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" x="0" y="0" viewBox="0 0 699.428 699.428" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M502.714 0H240.428C194.178 0 153 42.425 153 87.429l-25.267.59c-46.228 0-84.019 41.834-84.019 86.838V612c0 45.004 41.179 87.428 87.429 87.428H459c46.249 0 87.428-42.424 87.428-87.428h21.857c46.25 0 87.429-42.424 87.429-87.428v-349.19L502.714 0zM459 655.715H131.143c-22.95 0-43.714-21.441-43.714-43.715V174.857c0-22.272 18.688-42.993 41.638-42.993l23.933-.721v393.429C153 569.576 194.178 612 240.428 612h262.286c0 22.273-20.765 43.715-43.714 43.715zm153-131.143c0 22.271-20.765 43.713-43.715 43.713H240.428c-22.95 0-43.714-21.441-43.714-43.713V87.429c0-22.272 20.764-43.714 43.714-43.714H459c-.351 50.337 0 87.975 0 87.975 0 45.419 40.872 86.882 87.428 86.882H612v306zm-65.572-349.715c-23.277 0-43.714-42.293-43.714-64.981V44.348L612 174.857h-65.572zm-43.714 131.537H306c-12.065 0-21.857 9.77-21.857 21.835 0 12.065 9.792 21.835 21.857 21.835h196.714c12.065 0 21.857-9.771 21.857-21.835 0-12.065-9.792-21.835-21.857-21.835zm0 109.176H306c-12.065 0-21.857 9.77-21.857 21.834 0 12.066 9.792 21.836 21.857 21.836h196.714c12.065 0 21.857-9.77 21.857-21.836 0-12.064-9.792-21.834-21.857-21.834z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path></g></svg>
            `;
            // Display order details
            $("#trackingNo").html(jsonResponse.trackingNo + " " + copy_SVG);
            $('#details-tag').attr('href', 'certificaiton-search?tag=' + jsonResponse.trackingNo);
            $("#totalWordCount").text(jsonResponse.totalWordCount);
            $("#totalPrice").text("$" + jsonResponse.totalPrice);
            $("#orderStatus").text(jsonResponse.orderStatus);
            $("#orderDate").text(new Date().toLocaleDateString());
            $('#discountPercent').text(jsonResponse.discount);
            $('#coupon_title').text(jsonResponse.coupon_title);

            var orderDetailsContainer = $("#orderDetails");
            orderDetailsContainer.empty();
            jsonResponse.files.forEach(function (file) {
              var fileDetail = `
                <tr class="item">
                    <td>${file.fileName}</td>
                    <td>${file.wordCount}</td>
                    <td>$${file.price}</td>
                </tr>
            `;
              orderDetailsContainer.append(fileDetail);
            });

            // Move to the next step
            var current_fs = $(".paynow").parent();
            var next_fs = $(".paynow").parent().next();

            // Add Class Active
            $("#progressbar li")
              .eq($("fieldset").index(next_fs))
              .addClass("active");

            // Show the next fieldset
            next_fs.show();
            // Hide the current fieldset with style
            current_fs.animate(
              {
                opacity: 0,
              },
              {
                step: function (now) {
                  // For making fieldset appear animation
                  var opacity = 1 - now;

                  current_fs.css({
                    display: "none",
                    position: "relative",
                  });
                  next_fs.css({
                    opacity: opacity,
                  });
                },
                duration: 500,
              }
            );
            setProgressBar(++current);
          } else {
            $.notify(`<strong>${jsonResponse.errorMessages}</strong>`, {
              type: "danger",
              allow_dismiss: true,
              placement: {
                from: "bottom",
                align: "center",
              },
            });
          }

          $("#progressbar li.active").each(function () {
            $(this).css("color", "#46b446d1");
          });
          $("<style>")
            .prop("type", "text/css")
            .html(
              "#progressbar li.active:before, #progressbar li.active:after { background: #46b446d1 !important; }"
            )
            .appendTo("head");

          $(".progress-bar").css("background-color", "#46b446d1");
        },
        error: function () {
          alert("Error submitting form.");
        },
      });
    });
  }
});

$(".next").click(function () {
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0,
    },
    {
      step: function (now) {
        // for making fielset appear animation
        opacity = 1 - now;

        current_fs.css({
          display: "none",
          position: "relative",
        });
        next_fs.css({
          opacity: opacity,
        });
      },
      duration: 500,
    }
  );
  setProgressBar(++current);
});

$(".previous").click(function () {
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //Remove class active
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();

  //hide the current fieldset with style
  current_fs.animate(
    {
      opacity: 0,
    },
    {
      step: function (now) {
        // for making fielset appear animation
        opacity = 1 - now;

        current_fs.css({
          display: "none",
          position: "relative",
        });
        previous_fs.css({
          opacity: opacity,
        });
      },
      duration: 500,
    }
  );
  setProgressBar(--current);
});

function setProgressBar(curStep) {
  var steps = $("fieldset").length;
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar").css("width", percent + "%");
}

function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = copyText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  $.notify(`<strong>Tracking Number copied to clipboard!</strong>`, {
    type: "success",
    allow_dismiss: true,
    placement: {
      from: "bottom",
      align: "center",
    },
  });
}


var processGraphs = document.querySelectorAll('.process polygon');
var processDetails = document.querySelectorAll('.process-details > div');
var processGraphMouseover = function (event) {
	for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
		if (processGraphs[pg] === event.target && event.type === 'mouseover') {
			processGraphs[pg].style.opacity = 1;
		} else {
			processGraphs[pg].style.opacity = 0.5;
		}
	}
	for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
		if (processDetails[pd].classList.contains(event.target.getAttribute('class')) && event.type === 'mouseover') {
			processDetails[pd].style.opacity = 1;
		} else {
			processDetails[pd].style.opacity = 0.5;
		}
	}
};
var processGraphMouseout = function (event) {
	for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
		processGraphs[pg].removeAttribute('style');
	}
	for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
		processDetails[pd].removeAttribute('style');
	}
};
for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
	processGraphs[pg].addEventListener('mouseover', processGraphMouseover);
	processGraphs[pg].addEventListener('mouseout', processGraphMouseout);
}
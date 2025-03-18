var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

// Initialize Dropzone
Dropzone.autoDiscover = false;
var uploadedFiles = [];

var myDropzone = new Dropzone("#dropzone", {
  url: "upload.php",
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

$(".step-2-btn").on("click", function (e) {
  var button = $(this);
  var form = button.closest("form")[0];

  if (form.checkValidity()) {
    e.preventDefault();

    $("#step-3").show();
    $("#step-2").hide();
  } else {
    form.classList.add("was-validated");
  }
});
$(".back-step2").on("click", function () {
  $("#step-3").hide();
  $("#step-2").show();
});

$(".back-step3").on("click", function () {
  $("#step-3").show();
  $("#step-4").hide();
});

$(".checkout").on("click", function () {
  $("#step-3").hide();
  $("#step-4").show();
});

$("#name").on("input", function () {
  $("#name_h1").val($("#name").val());
});
$("#email").on("input", function () {
  $("#email_h1").val($("#email").val());
});
$("#phone").on("input", function () {
  $("#phone_h1").val($("#phone").val());
});
$("#brief").on("input", function () {
  $("#brief_h1").text($("#brief").val());
});

// PROCESS TRANSACTION

$(document).ready(function () {
  if ($("#merchant_name").val() == "stripe") {
    var stripe_key = $("#stripe_key").val();
    var stripe = Stripe(stripe_key);
    var elements = stripe.elements();
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

      console.log(uploadedFiles);

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
          formData.append("name", $("#name").val());
          formData.append("email", $("#email").val());
          formData.append("phone", $("#phone").val());
          formData.append("brief", $("#brief").val());
          formData.append("price", $("#price").val().replace(/,/g, ""));
          formData.append("word_count", $("#wordCountTotal").val());

          // Step 4 - Payment Info
          formData.append("m_fname", $("#m_fname").val());
          formData.append("m_lname", $("#m_lname").val());
          formData.append("m_email", $("#m_email").val());
          formData.append("m_street", $("#m_street").val());
          formData.append("m_city", $("#m_city").val());
          formData.append("m_country", $("#m_country").val());
          formData.append("m_state", $("#m_state").val());
          formData.append("m_zipcode", $("#m_zipcode").val());

          // Stripe Token
          formData.append("stripeToken", token_id);

          // Add docFiles key
          formData.append("docFiles", $("#docFiles").val());

          $.ajax({
            url: "process_transaction.php",
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
                $("#name").val("");
                $("#email").val("");
                $("#phone").val("");
                $("#brief").val("");
                $("#price").val("");
                $("#wordCountTotal").val("");
                $("#m_fname").val("");
                $("#m_lname").val("");
                $("#m_email").val("");
                $("#m_street").val("");
                $("#m_city").val("");
                $("#m_country").val("");
                $("#m_state").val("");
                $("#m_zipcode").val("");
                $("#m_card").val("");
                $("#m_exp").val("");
                $("#m_cvc").val("");
                cardElement.clear();

                // Display order details
                $("#trackingNo").text(jsonResponse.trackingNo);
                $("#totalWordCount").text(jsonResponse.totalWordCount);
                $("#totalPrice").text("$" + jsonResponse.totalPrice);
                $("#orderStatus").text(jsonResponse.orderStatus);
                $("#orderDate").text(new Date().toLocaleDateString());

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
      formData.append("name", $("#name").val());
      formData.append("email", $("#email").val());
      formData.append("phone", $("#phone").val());
      formData.append("brief", $("#brief").val());
      formData.append("price", $("#price").val().replace(/,/g, ""));
      formData.append("word_count", $("#wordCountTotal").val());

      // Step 4 - Payment Info
      formData.append("m_fname", $("#m_fname").val());
      formData.append("m_lname", $("#m_lname").val());
      formData.append("m_email", $("#m_email").val());
      formData.append("m_street", $("#m_street").val());
      formData.append("m_city", $("#m_city").val());
      formData.append("m_country", $("#m_country").val());
      formData.append("m_state", $("#m_state").val());
      formData.append("m_zipcode", $("#m_zipcode").val());

      // Step 5 - Payment Method
      formData.append("m_card", $("#m_card").val());
      formData.append("m_exp", $("#m_exp").val());
      formData.append("m_cvc", $("#m_cvc").val());

      $.ajax({
        url: "process_transaction.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          alert(response);
        },
        error: function () {
          alert("Error submitting form.");
        },
      });
    });
  }
});

$("#usePersonalInfo").on("change", function () {
  if (this.checked) {
    $(".form-check").css("background", "#01950194");
    var fullName = $("#name").val();
    var nameParts = fullName.split(" ");
    var firstName = nameParts[0];
    var lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
    var email = $("#email").val();
    var phone = $("#phone").val();

    $("#m_fname").val(firstName);
    $("#m_lname").val(lastName);
    $("#m_email").val(email);
    $("#m_phone").val(phone);
  } else {
    $(".form-check").css("background", "#44aed7");
    $("#m_fname").val("");
    $("#m_lname").val("");
    $("#m_email").val("");
    $("#m_phone").val("");
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

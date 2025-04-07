
// Voucher Script


document.addEventListener('DOMContentLoaded', function () {
    const useVoucherCheckbox = document.getElementById('useVoucher');
    const voucherInputContainer = document.getElementById('voucherInputContainer');
    const formCheckVoucher = document.getElementsByClassName('form-check-voucher');
  
    useVoucherCheckbox.addEventListener('change', function () {
        if (this.checked) {
            voucherInputContainer.style.display = 'block';
            // Loop through the collection and apply the background style
            Array.from(formCheckVoucher).forEach(function (element) {
                element.style.background = 'green';
            });
        } else {
            voucherInputContainer.style.display = 'none';
            // Reset the background style when unchecked
            Array.from(formCheckVoucher).forEach(function (element) {
                element.style.background = '';
            });
        }
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const voucherSubmitButton = document.getElementById('voucherSubmit');
    const voucherCodeInput = document.getElementById('voucherCode');
    const voucherMessage = document.getElementById('voucherMessage');
    const priceInput = document.getElementById('price'); // Hidden input for price
    const totalPriceElement = document.getElementById('totalPriceBtn'); // Element showing the total 
    const coupon = document.getElementById('coupon');price
    const priceButton = document.querySelector('.price'); // Button with the class "price"

    voucherSubmitButton.addEventListener('click', function () {
        const voucherCode = voucherCodeInput.value.trim();

        if (!voucherCode) {
            voucherMessage.textContent = 'Please enter a voucher code.';
            voucherMessage.style.display = 'block';
            return;
        }

        // Send AJAX request to verify the voucher code
        fetch('coupon-verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ voucherCode: voucherCode }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const discountPercent = parseFloat(data.discount); // Get the discount percentage from the response
                    const originalPrice = parseFloat(priceInput.value); // Get the original price from the hidden input

                    if (isNaN(originalPrice) || originalPrice <= 0) {
                        voucherMessage.textContent = 'Invalid price value.';
                        voucherMessage.style.color = 'red';
                        voucherMessage.style.display = 'block';
                        return;
                    }

                    // Calculate the discounted price
                    const discountAmount = (originalPrice * discountPercent) / 100;
                    const discountedPrice = originalPrice - discountAmount;

                    // Update the hidden price input and total price display
                    priceInput.value = discountedPrice.toFixed(2);
                    totalPriceElement.textContent = `$${discountedPrice.toFixed(2)}`;

                    // Update the button with the class "price"
                    if (priceButton) {
                        priceButton.textContent = `$${discountedPrice.toFixed(2)}`;
                    }

                    // Show success message
                    voucherMessage.textContent = `(Voucher applied successfully! Discount: ${discountPercent}%)`;
                    voucherMessage.style.color = 'green';
                    voucherMessage.style.display = 'block';
                    coupon.value = voucherCode;
                    voucherSubmitButton.remove();

                    voucherCodeInput.readOnly = true;
                } else {
                    // Show error message
                    voucherMessage.textContent = data.message || '(Invalid voucher code.)';
                    voucherMessage.style.color = 'red';
                    voucherMessage.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error verifying voucher:', error);
                voucherMessage.textContent = '(An error occurred while verifying the voucher.)';
                voucherMessage.style.color = 'red';
                voucherMessage.style.display = 'block';
            });
    });
});
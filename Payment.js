function processPayment(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Gather shipping and payment information
    const paymentData = {
                fullName: document.getElementById("fullName").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                state: document.getElementById("state").value,
                zip: document.getElementById("zip").value,
                country: document.getElementById("country").value,
                cardNumber: document.getElementById("cardNumber").value,
                expirationDate: document.getElementById("expirationDate").value,
                cvv: document.getElementById("cvv").value
            };

            // Store payment and order data in local storage to transfer to the Invoice page
            localStorage.setItem("paymentData", JSON.stringify(paymentData));
            
            // Redirect to Invoice page
            window.location.href = "Invoice.html";
        }
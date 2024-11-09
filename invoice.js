// Generate a random invoice number
function generateInvoiceNumber() {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
}

// Set current date
function setCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("currentDate").textContent = currentDate.toLocaleDateString(undefined, options);
}

// Load order and shipping data from local storage
function loadInvoiceData() {
    // Retrieve shipping information
    const paymentData = JSON.parse(localStorage.getItem("paymentData"));
    if (paymentData) {
        document.getElementById("customerName").textContent = paymentData.fullName;
        document.getElementById("customerAddress").textContent = `${paymentData.address}, ${paymentData.city}, ${paymentData.state}, ${paymentData.zip}, ${paymentData.country}`;
    }

    // Retrieve cart items
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Retrieve and display grand total
    const grandTotal = localStorage.getItem("grandTotal") || "0.00";

    // Display order items
    const orderTable = document.getElementById("orderTable").getElementsByTagName('tbody')[0];
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        orderTable.appendChild(row);
    });

    // Display grand total amount
    document.getElementById("totalAmount").textContent = grandTotal;
}

// Initialize invoice page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("invoiceNumber").textContent = generateInvoiceNumber();
    setCurrentDate();
    loadInvoiceData();
});

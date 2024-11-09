// Retrieve cart items from localStorage and display them
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.getElementById("cartContainer");

    cartContainer.innerHTML = ""; // Clear existing items
    let grandTotal = 0; // Initialize grand total

    cartItems.forEach((item, index) => {
        // Calculate total for each item and add to grand total
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        // Create a container for each cart item
        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        
        // Insert content for each product item
        cartItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">Price: $${item.price.toFixed(2)}</p>
                <p class="quantity">Quantity: ${item.quantity}</p>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        
        // Append each item to the cart container
        cartContainer.appendChild(cartItemDiv);
    });

     // Save grand total to localStorage
     localStorage.setItem("grandTotal", grandTotal.toFixed(2)); 
     
     // Create and display grand total element
     const grandTotalDiv = document.createElement("div");
     grandTotalDiv.className = "grand-total";
     grandTotalDiv.innerHTML = `<h3>Grand Total: $${grandTotal.toFixed(2)}</h3>`;
     cartContainer.appendChild(grandTotalDiv);
}

// Remove item from cart
function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(index, 1); // Remove item at the specified index
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage
    loadCart(); // Reload cart
}

// Checkout button functionality (redirects to payment page)
document.getElementById("checkoutButton").addEventListener("click", function() {
    if (JSON.parse(localStorage.getItem("cartItems")).length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "payment.html"; // Redirect to payment page
    }
});

// Load cart items when the page is loaded
document.addEventListener("DOMContentLoaded", loadCart);

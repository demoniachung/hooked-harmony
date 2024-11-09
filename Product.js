// Sample product data by category
const productData = {
    "hats": [
        { name: "Bubble Gum", price: 30, description: "Pink gradient Ruffle hat", img: "assets/bubble gum.jpg"},
        { name: "Lady Bug", price: 30, description: "Black and Red Ruffle hat", img: "assets/lady bug.jpg" },
        { name: "Red Velvet", price: 30, description: "Red and White Ruffle Hat", img: "assets/red velvet.jpg"},
        { name: "Lady in Red", price: 30, description: "Red Ruffle Hat", img: "assets/lady in red.jpg" },
        { name: "Snow White", price: 40, description: "White Double Ruffle Hat", img: "assets/snow white.jpg" },
        { name: "Midnight", price: 35, description: "Black Ruffle hat", img: "assets/midnight.jpg" },
        { name: "Strawberry Shortcake", price: 35, description: "Pink and red bucket hat", img: "assets/strawberry shortcake.jpg" },
        { name: "Reggae Vybes", price: 40, description: "Rasta colored Double Ruffle hat", img: "assets/reggae vybes.jpg" },
        { name: "Mermaid Tail", price: 35, description: "Colorful Bucket hat", img: "assets/mermaid tail.jpg" },
    ],
    "bathing-suits": [
        { name: "Rosa", price: 45, description: "Red star shaped 3-piece bikini", img: "assets/rosa.jpg" },
        { name: "Under da Sea", price: 45, description: "Multi-colored 3-piece bikini", img: "assets/under da sea.jpg" },
        { name: "Sexy Red", price: 40, description: "Red Monokini", img: "assets/sexy red.jpg" },
        { name: "Bumble B", price: 45, description: "Black, yellow, and white 3-piece", img: "assets/bumble bee.jpg" },
        { name: "Naja", price: 45, description: "Orange star shaped 3-piece bikini", img: "assets/naja.jpg"},
        { name: "Pinky", price: 30, description: "Pink 2-piece bikini", img: "assets/pinky.jpg" },
        { name: "Peek-A-Boo", price: 40, description: "Patchwork Monokini", img: "assets/peekaboo.jpg" },
        { name: "Pookie Pink", price: 45, description: "Pink 3-piece ruffle bikini", img: "assets/pookie pink.jpg" },
        { name: "Summer Szn", price: 45, description: "Orange 3-piece ruffle bikini", img: "assets/summer szn.jpg" },
        { name: "Peach Pie", price: 45, description: "Peach one strap 3-piece bikini", img: "assets/peach pie.jpg" }
    ],
    "bags": [
        { name: "Puffy", price: 40, description: "White Puff Bag", img: "assets/puffy.jpg" },
        { name: "Strawberry Mint", price: 45, description: "Pink and white checkered bag", img: "assets/strawberry mint.jpg"},
        { name: "Mint Chocolate", price: 45, description: "Teal and white checkered bag", img: "assets/mint chocolate.jpg" },
        { name: "Honey", price: 45, description: "Yellow Checkered bag", img: "assets/honey.jpg" },
        { name: "Blue Moon", price: 50, description: "Blue mini tote bag", img: "assets/blue moon.jpg" },
        { name: "Camo On", price: 50, description: "Camo green mini tote bag", img: "assets/camo on.jpg" },
        { name: "Pink Heart", price: 40, description: "Clear mini heart bag", img: "assets/pink heart.jpg" },
        { name: "Red Heart", price: 40, description: "Clear mini heart bag", img: "assets/red heart.jpg" },
        { name: "Teal Circle", price: 40, description: "Clear mini circle bag", img: "assets/teal circle.jpg" }
    ],
    "amigurumis": [
        { name: "Timmy Turtle", price: 45, description: "Sunflower Turtle", img: "assets/turtle.jpg" },
        { name: "Tri-cierra-tops", price: 55, description: "3 mini triceratops", img: "assets/triceratops.jpg" },
        { name: "Boots the Monkey", price: 45, description: "Dora's best buddy", img: "assets/monkey.jpg" },
        { name: "Paddington the Bear", price: 45, description: "Paddington in favorite rain coat", img: "assets/bear.jpg" },
        { name: "Princess the Bunny", price: 45, description: "Pretty Bunny", img: "assets/bunny.jpg" },
        { name: "Steven the Snowman", price: 45, description: "Snuggly Steven", img: "assets/snow man.jpg" },
        { name: "Pascal the Chameleon", price: 45, description: "Everyone's favorite sassy chameleon", img: "assets/cameleon.jpg" },
        { name: "Hello Kitty", price: 45, description: "Kat the Kitty", img: "assets/hello kitty.jpg" },
        { name: "Mello Moo", price: 55, description: "Cutesy lil cow", img: "assets/cow.jpg" }
    ],
    "keychains": [
        { name: "Ava+cado", price: 35, description: "His and hers keychains", img: "assets/avacado.jpg" },
        { name: "Cooly Cloud", price: 15, description: "Blue cloud keychain", img: "assets/cloud.jpg" },
        { name: "Miss Piggy", price: 25, description: "Pink pig keychain", img: "assets/piggy.jpg"},
        { name: "Butterfly", price: 25, description: "Pink Butterfly keychain", img: "assets/butterfly.jpg" },
        { name: "Beauty Bows", price: 45, description: "4-pack butterfly keychains", img: "assets/bows.jpg" },
        { name: "Pink Lily", price: 25, description: "Pink and white lily keychains", img: "assets/lilies.jpg" },
        { name: "I Whaley Love You", price: 35, description: "His and hers keychains", img: "assets/whale.jpg" },
        { name: "Da Daiseys", price: 45, description: "3-piece daisy keychains", img: "assets/daisies.jpg" }
    ]
};


// Load products based on selected category
function loadCategory(category) {
    console.log(`Loading category: ${category}`);
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = ""; // Clear existing products

    const products = productData[category] || [];
    console.log(products); // Log loaded products for debugging
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

window.addEventListener("load", () => {
    localStorage.clear();
});


// Load products by default category on page load
document.addEventListener("DOMContentLoaded", function() {
    loadCategory('hats'); // Load a default category on page load
});

// Add product to cart
function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProduct = cartItems.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if product already in cart
    } else {
        cartItems.push({ name, price, quantity: 1 }); // Add new product
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Store updated cart
    alert(`${name} added to cart!`);
}

const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Check if local storage is supported
if (typeof(Storage) === "undefined") {
    alert("Sorry, your browser does not support Web storage. Try again with a better one.");
} else {
    // Local storage is available, initialize the app
    createStore();
    displayCart();
}

function addItemToCart(item) {
    // Set item in local storage
    localStorage.setItem(item, "true");
}

function createStore() {
    const storeContainer = document.getElementById("store-container");
    const ul = document.createElement("ul");

    availableItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.style.cursor = "pointer";
        li.addEventListener('click', () => {
            addItemToCart(item);
            displayCart(); // Update the cart display immediately after adding an item
        });
        ul.appendChild(li);
    });

    storeContainer.appendChild(ul);
}

function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Clear previous content

    const cartItems = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (availableItems.includes(key)) {
            cartItems.push(key);
        }
    }

    if (cartItems.length > 0) {
        const p = document.createElement("p");
        p.textContent = `You previously had ${cartItems.length} items in your cart: ${cartItems.join(", ")}`;
        cartContainer.appendChild(p);
    }
}

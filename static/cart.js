document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const cartSubtotal = document.getElementById("cartSubtotal");
    const deliveryFee = document.getElementById("deliveryFee");
    const cartTotal = document.getElementById("cartTotal");
    const orderItemsPanel = document.querySelector(".order-items-panel");
    const deliveryPanel = document.querySelector(".delivery-panel");

    function formatPrice(price) {
        return "₦" + Number(price).toLocaleString();
    }

    function displayCart() {

        cartItems.innerHTML = "";

        if (cart.length === 0) {
            orderItemsPanel.style.display = "none";
            deliveryPanel.style.display = "none";
            emptyCart.style.display = "block";
            return;
        }

        orderItemsPanel.style.display = "block";
        deliveryPanel.style.display = "block";
        emptyCart.style.display = "none";

        let subtotal = 0;

        cart.forEach(function (product, index) {

            const quantity = product.quantity || 1;
            const lineTotal = Number(product.price) * quantity;
            subtotal += lineTotal;

            const item = document.createElement("div");
            item.className = "cart-item";

            item.innerHTML = `
                <div class="cart-item-product">
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                </div>

                <div class="cart-item-price">${formatPrice(product.price)}</div>

                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>

                <div class="cart-item-total">${formatPrice(lineTotal)}</div>

                <button class="remove-btn" onclick="removeItem(${index})">Delete</button>
            `;

            cartItems.appendChild(item);

        });

        const delivery = subtotal > 0 ? 1000 : 0;
        const total = subtotal + delivery;

        cartSubtotal.textContent = formatPrice(subtotal);
        deliveryFee.textContent = formatPrice(delivery);
        cartTotal.textContent = formatPrice(total);

    }

    window.increaseQuantity = function (index) {
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        saveCart();
    };

    window.decreaseQuantity = function (index) {
        if ((cart[index].quantity || 1) > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        saveCart();
    };

    window.removeItem = function (index) {
        cart.splice(index, 1);
        saveCart();
    };

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    displayCart();

});
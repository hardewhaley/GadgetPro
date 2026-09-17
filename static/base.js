const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        this.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert(product.name + " added to cart!");
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const cartCountEl = document.querySelector(".cart-count");
    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
    }
}

document.addEventListener("DOMContentLoaded", updateCartCount);

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".add-to-cart-btn");
    if (!btn) return;

    addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: Number(btn.dataset.price),
        image: btn.dataset.image
    });
});
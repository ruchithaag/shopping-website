let cartCount = 0;

function addToCart(button) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    button.innerText = "Added 💖";
    button.classList.add("added");

    setTimeout(() => {
        button.innerText = "Add to Bag 💕";
        button.classList.remove("added");
    }, 1200);
}

function filterProducts(category) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(category) ? "block" : "none";
        }
    });
}
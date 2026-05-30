// SEARCH FUNCTION
const searchInput = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
    let searchValue = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        let title = card.textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// ENTER KEY SEARCH
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

// BUTTON ANIMATION
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// CARD HOVER EFFECT
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// SIGN IN BUTTON ALERT
const signBtn = document.querySelector(".headerLinks .btn");

signBtn.addEventListener("click", () => {
    alert("Welcome To AURA STORE!");
});

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
    const header = document.querySelector(".headerContainer");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 0 20px rgba(255,0,55,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// RANDOM BACKGROUND GLOW EFFECT
setInterval(() => {
    const slogan = document.querySelector(".slogan");

    slogan.style.textShadow = `0 0 20px #ff0037`;

    setTimeout(() => {
        slogan.style.textShadow = "none";
    }, 1000);

}, 3000);

document.querySelector(".sparkle-text").addEventListener("click", function (event) {
    for (let i = 0; i < 10; i++) {
        let sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        document.body.appendChild(sparkle);

        let x = event.clientX + (Math.random() * 30 - 15);
        let y = event.clientY + (Math.random() * 30 - 15);

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        setTimeout(() => sparkle.remove(), 500);
    }
});

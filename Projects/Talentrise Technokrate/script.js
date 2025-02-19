document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.2s ease";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });

        item.addEventListener("click", () => {
            item.style.transform = "scale(0.9)";
            setTimeout(() => {
                item.style.transform = "scale(1)";
            }, 150);
        });
    });
});

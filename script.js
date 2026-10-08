
const boutonTheme = document.getElementById("theme-toggle");

if (boutonTheme) {
    boutonTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            boutonTheme.textContent = "Mode clair";
        } else {
            boutonTheme.textContent = "Mode sombre";
        }
    });
}
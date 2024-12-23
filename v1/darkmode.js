let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector(".theme-switch");
console.log(themeSwitch);

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.removeItem("darkmode", null);
};

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode === "active" ? disableDarkMode() : enableDarkMode();
});

let openmenuIcon = document.getElementById("menu-icon");
let closeMenuIcon = document.getElementById("close-menu");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".menu");

let toggleMenu = () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("hidden");
};

openmenuIcon.addEventListener("click", toggleMenu);
closeMenuIcon.addEventListener("click", toggleMenu);

let featuresDropdown = document.querySelector(".features-dropdown");
let companyDropdown = document.querySelector(".company-dropdown");
let dropdownLinks = document.querySelectorAll(".menu__item__dropdown-link");
let featuresDropdownLink = dropdownLinks[0];
let companyDropdownLink = dropdownLinks[1];

let toggleDropdown = () => (e) => {
    e.currentTarget.nextElementSibling.classList.toggle("hidden");
    e.currentTarget.children[0].classList.toggle("hidden")
    e.currentTarget.children[1].classList.toggle("hidden")
};
let hideDropdowns = () => {
    featuresDropdown.classList.add("hidden");
    companyDropdown.classList.add("hidden");
}
let hideOverlay = () => e => {
    e.currentTarget.classList.add("hidden");
    menu.classList.remove("active");
    hideDropdowns();
}

featuresDropdownLink.addEventListener("click", toggleDropdown());
companyDropdownLink.addEventListener("click", toggleDropdown());
overlay.addEventListener("click", hideOverlay());

document.addEventListener("click", e => {
    let currentElement = e.target;
    while (currentElement !== document.body) {
        if (currentElement.classList.contains("company-dropdown") || currentElement.classList.contains("features-dropdown") || currentElement.classList.contains("menu__item__dropdown-link")) {
            return;
        }
        currentElement = currentElement.parentElement;
    }
    hideDropdowns();
})
let tabs = document.querySelectorAll(".tab");
let tabs_array = Array.prototype.slice.call(tabs)
tabs_array.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains("active-tab") == false) {
            tabs_array.forEach(item => {
                item.classList.remove("active-tab")
            });
            item.classList.add("active-tab")
        }
    });
});
let burger = document.querySelector(".header_burger");
let menu = document.querySelector(".header_menu");
let body = document.querySelector("body")
burger.addEventListener('click', () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("lock");
})
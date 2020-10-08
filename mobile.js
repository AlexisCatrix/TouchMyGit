const burgerMenu = document.querySelector('#burgerMenu');
const asideH = document.querySelector('#asideHidden');

burgerMenu.addEventListener("click", () => {
    asideH.classList.toggle('aside');
});

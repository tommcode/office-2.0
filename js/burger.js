
document.addEventListener('DOMContentLoaded', (event) => {
const burgerMenu = () => {
    const menu = document.querySelector('.hamburger');
    const list = document.querySelector('.menu__list');

    menu.addEventListener('click', () => {

        menu.classList.toggle('hamburger--active');
        list.classList.toggle('show')
    });

}
 burgerMenu()

})
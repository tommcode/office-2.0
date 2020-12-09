document.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.querySelector('.hamburger');
    const list = document.querySelector('.menu__list')
    const navigation = document.querySelector('.page__nav')
    const home = document.querySelectorAll('.menu__item')
    const offer = document.querySelector('#offer')
    const projects = document.querySelector('#projects')
    const contact = document.querySelector('#contact')


    const removeAttribute = () => {
        const intViewportWidth = window.innerWidth
        const text = document.querySelector('.home__text')
        const graph = document.querySelectorAll('.home__graph')
        if(intViewportWidth < 1280) {
           graph.forEach(function(element){
            element.removeAttribute('data-aos')
           })
           text.removeAttribute('data-aos')
        } else {}
    }
    removeAttribute()


    menu.addEventListener('click', () => {

    menu.classList.toggle('hamburger--active');
    list.classList.toggle('show')
});
for (let i = 0; i < home.length; i++) {
    home[i].addEventListener("click", function() {
        menu.classList.toggle('hamburger--active')
        list.classList.toggle('show')
    });
}
let x = screen.width
console.log(x)
AOS.init({
    duration: 3000,
});
// lightGallery(document.getElementById('relative-caption'), {
//     subHtmlSelectorRelative: true
// });
const photoButton = document.querySelector('.photo__button')
const photoModal = document.querySelector('.photo__modal')
const closeModal = document.querySelector('.close__modal')
if(photoButton){
    photoButton.addEventListener('click', () =>{
        photoModal.style.display = "inline-block"
    })
}
if(closeModal) {
    closeModal.addEventListener('click', () => {
        photoModal.style.display = "none"
    })
}


});



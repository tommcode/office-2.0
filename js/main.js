document.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.querySelector('.hamburger'); 

    menu.addEventListener('click', () => { 
    menu.classList.toggle('hamburger--active'); 
});

// ScrollReveal().reveal('.home__text', { delay: 300 });
// ScrollReveal().reveal('.home__image')
AOS.init({
    duration: 3000,
}); 


});



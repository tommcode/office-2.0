document.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.querySelector('.hamburger'); 
    const list = document.querySelector('.menu__list')
    const navigation = document.querySelector('.page__nav')
    menu.addEventListener('click', () => { 
        if (list.style.display === "block") {
            list.style.display = "none";
            navigation.style.transition = 'all 2s'
            navigation.style.justifyContent = "space-between"
          } else {
            list.style.display = "block";
            navigation.style.justifyContent = "start"
          }
    // navigation.style.display = 'block'  
    navigation.classList.toggle('burger--menu')
    menu.classList.toggle('hamburger--active');
    
    
    
});

// ScrollReveal().reveal('.home__text', { delay: 300 });
// ScrollReveal().reveal('.home__image')
AOS.init({
    duration: 3000,
}); 


});



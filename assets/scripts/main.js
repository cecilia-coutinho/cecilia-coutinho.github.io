//--------> MOBILE NAVBAR <--------
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

//mobile navbar: Display Mobile Menu
const mobileMenuDisplay = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', mobileMenuDisplay);


//--------> CAROUSEL SLIDE <--------
const slideContainer = [...document.querySelectorAll('.portfolio-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


slideContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});




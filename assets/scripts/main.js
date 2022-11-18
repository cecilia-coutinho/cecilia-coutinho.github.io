//--------> MOBILE NAVBAR <--------
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

//mobile navbar: Display Mobile Menu
const mobileMenuDisplay = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', mobileMenuDisplay);

//------>  ACTIVE DESKTOP MENU   <------
const highlightMenu = () => {
    const elemMenu = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const careerMenu = document.querySelector('#career-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    let scrollPosition = window.scrollY;
    //console.log(scrollPosition);

    //add highlight class
    if (window.innerWidth > 960 && scrollPosition < 355) {
        homeMenu.classList.add('highlight');

        aboutMenu.classList.remove('highlight');
        return;
    }

    else if (window.innerWidth > 960 && scrollPosition < 1330) {
        aboutMenu.classList.add('highlight');

        homeMenu.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        return;
    }

    else if (window.innerWidth > 960 && scrollPosition < 2000) {
        portfolioMenu.classList.add('highlight');

        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elemMenu && window.innerWidth < 960 && scrollPosition > 355) || elemMenu) {
        elemMenu.classList.remove('highlight');
        window.addEventListener('resize', highlightMenu);
    };
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


//-------->  LOADING EVENT <--------
window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', () => {
        //document.body.parentNode.removeChild('loader');
        loader.remove();
    });
});


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

//--------> PORTFOLIO SECTION <--------
let url = "https://api.github.com/users/Cecilia-Coutinho/repos";

async function getRepoData() {

    let response = await fetch(url);
    //console.log(`response: ${response}`);

    if (response.ok) {
        let data = await response.json();
        console.log(data)
        console.log(data[3].name)
        console.log(data[3].description)

        titlePortfolio(data);
        descriptionPortfolio(data);

    } else {
        console.log("HTTP:Error: " + response.status);
    }
}

getRepoData();

function titlePortfolio(data) {

    let portTitle1 = data[3].name;
    let newPortTitle1 = portTitle1.replace(/-/g, " ");
    document.querySelector('.port-card-1-title').innerHTML = newPortTitle1;

    let portTitle2 = data[4].name;
    let newPortTitle2 = portTitle2.replace(/-/g, " ");
    document.querySelector('.port-card-2-title').innerHTML = newPortTitle2;

    let portTitle3 = data[5].name;
    let newPortTitle3 = portTitle3.replace(/-/g, " ");
    document.querySelector('.port-card-3-title').innerHTML = newPortTitle3;

    let portTitle4 = data[6].name;
    let newPortTitle4 = portTitle4.replace(/-/g, " ");
    document.querySelector('.port-card-4-title').innerHTML = newPortTitle4;
}

function descriptionPortfolio(data) {
    let portDescrip1 = data[3].description;
    document.querySelector('.port-card-1-description').innerHTML = portDescrip1;

    let portDescrip2 = data[4].description;
    document.querySelector('.port-card-2-description').innerHTML = portDescrip2;

    let portDescrip3 = data[5].description;
    document.querySelector('.port-card-3-description').innerHTML = portDescrip3;

    let portDescrip4 = data[6].description;
    document.querySelector('.port-card-4-description').innerHTML = portDescrip4;
}
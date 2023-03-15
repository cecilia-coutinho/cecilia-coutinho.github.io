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

/* //------>  CLOSE MOBILE MENU   <------
//close mobile menu when click
//TO REVIEW, NOT working

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is.active');

    if (window.innerWidth <= 768 && menuBars) {
        mobileMenu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    };
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu); */

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
        //console.log(data)
        //console.log(data[1].name)
        //console.log(data[1].description)

        let project1 = data.find(project => project.id === 560960247); //js,html,css: my-personal-profile
        let project2 = data.find(project => project.id === 607602580); //c#: time-tracker-console-app-c#
        let project3 = data.find(project => project.id === 564735682); //js, html, css:js-rock-paper-scissors
        let project4 = data.find(project => project.id === 564862518); //js,html,css: js-guessingg-game
        let project5 = data.find(project => project.id === 564949231); //js,html,css: js-split-the-bill
        let project6 = data.find(project => project.id === 567434230); //c#:csharp-workshops

        titlePortfolio(project1, project2, project3, project4, project5, project6);
        descriptionPortfolio(project1, project2, project3, project4, project5, project6);
        //console.log(titlePortfolio)

    } else {
        console.log("HTTP:Error: " + response.status);
    }
}

getRepoData();

function titlePortfolio(project1, project2, project3, project4, project5, project6) {
    let portTitle1 = project1.name;
    let newPortTitle1 = portTitle1.replace(/-/g, " ");
    document.querySelector('.port-card-1-title').innerHTML = newPortTitle1;

    let portTitle2 = project2.name;
    let newPortTitle2 = portTitle2.replace(/-/g, " ");
    document.querySelector('.port-card-2-title').innerHTML = newPortTitle2;

    let portTitle3 = project3.name;
    let newPortTitle3 = portTitle3.replace(/-/g, " ");
    document.querySelector('.port-card-3-title').innerHTML = newPortTitle3;

    let portTitle4 = project4.name;
    let newPortTitle4 = portTitle4.replace(/-/g, " ");
    document.querySelector('.port-card-4-title').innerHTML = newPortTitle4;

    let portTitle5 = project5.name;
    let newPortTitle5 = portTitle5.replace(/-/g, " ");
    document.querySelector('.port-card-5-title').innerHTML = newPortTitle5;

    let portTitle6 = project6.name;
    let newPortTitle6 = portTitle6.replace(/-/g, " ");
    document.querySelector('.port-card-6-title').innerHTML = newPortTitle6;
}

function descriptionPortfolio(project1, project2, project3, project4, project5, project6) {
    document.querySelector('.port-card-1-description').innerHTML = project1.description;
    document.querySelector('.port-card-2-description').innerHTML = project2.description;
    document.querySelector('.port-card-3-description').innerHTML = project3.description;
    document.querySelector('.port-card-4-description').innerHTML = project4.description;
    document.querySelector('.port-card-5-description').innerHTML = project5.description;
    document.querySelector('.port-card-6-description').innerHTML = project6.description;

}

function linkPortfolio(project1, project2, project3, project4, project5, project6) {
    document.querySelector('.port-card-1-link').href = project1.html_url;
    document.querySelector('.port-card-2-link').href = project2.html_url;
    document.querySelector('.port-card-3-link').href = project3.html_url;
    document.querySelector('.port-card-4-link').href = project4.html_url;
    document.querySelector('.port-card-5-link').href = project5.html_url;
    document.querySelector('.port-card-6-link').href = project6.html_url;

}
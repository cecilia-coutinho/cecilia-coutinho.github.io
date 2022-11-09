//mobile navbar
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

//mobile navbar: Display Mobile Menu
const mobileMenuDisplay = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', mobileMenuDisplay);


//carousel slide
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


//CV - Json

let url = "https://raw.githubusercontent.com/Cecilia-Coutinho/my-cv-json-api/main/cv.json";
console.log(`url: ${url}`);


let personalData = document.querySelector('.personal-data-container');
const userProfile = document.querySelector('.user-profile');
const profileDescription = document.querySelector('.profile-description');
//const workData = document.querySelectorAll('.career-exper');

let work = [
    {
        company: document.querySelector('.work-title-1'),
        role:  document.querySelector('.role-1'),
        jobDescription: document.querySelector('.descrip-1')
    },
    {
        company: document.querySelector('.work-title-2'),
        role:  document.querySelector('.role-2'),
        jobDescription: document.querySelector('.descrip-2')
    },
    {
        company: document.querySelector('.work-title-3'),
        role:  document.querySelector('.role-3'),
        jobDescription: document.querySelector('.descrip-3')
    }
];

const degree = [
    {
        institution: document.querySelector('.degree-institution-1'),
        area: document.querySelector('.degree-area-1')
    },
    {
        institution: document.querySelector('.degree-institution-2'),
        area: document.querySelector('.degree-area-2')
    }
];

const courses = [
    {
        course: document.querySelector('.course-1')
    },
    {
        course: document.querySelector('.course-2')
    },
    {
        course: document.querySelector('.course-3')
    },
    {
        course: document.querySelector('.course-4')
    },
    {
        course: document.querySelector('.course-5')
    }
];

const coreSkills = [
    {
        coreName: document.querySelector('.core-skill-1')
    },
    {
        coreName: document.querySelector('.core-skill-2')
    },
    {
        coreName: document.querySelector('.core-skill-3')
    },
    {
        coreName: document.querySelector('.core-skill-4')
    },
    {
        coreName: document.querySelector('.core-skill-5')
    },
    {
        coreName: document.querySelector('.core-skill-6')
    },
    {
        coreName: document.querySelector('.core-skill-7')
    },
    {
        coreName: document.querySelector('.core-skill-8')
    },
    {
        coreName: document.querySelector('.core-skill-9')
    }
]
const tecSkills = [
    {
        tecName: document.querySelector('.tec-skill-1')
    },
    {
        tecName: document.querySelector('.tec-skill-2')
    },
    {
        tecName: document.querySelector('.tec-skill-3')
    },
    {
        tecName: document.querySelector('.tec-skill-4')
    },
    {
        tecName: document.querySelector('.tec-skill-5')
    },
    {
        tecName: document.querySelector('.tec-skill-6')
    },
    {
        tecName: document.querySelector('.tec-skill-7')
    },
    {
        tecName: document.querySelector('.tec-skill-8')
    },
    {
        tecName: document.querySelector('.tec-skill-9')
    },
    {
        tecName: document.querySelector('.tec-skill-10')
    },
    {
        tecName: document.querySelector('.tec-skill-11')
    },
    {
        tecName: document.querySelector('.tec-skill-12')
    },
    {
        tecName: document.querySelector('.tec-skill-13')
    }
];

/* const loading = document.querySelectorAll('.loading');
loading.innerHTML = 'Loading...'; */

async function getMyCv() {

    let response = await fetch(url);
    console.log(`response: ${response}`);

    if(response.ok) {
        let data = await response.json();
        /* loading.innerHTML = ''; */

        addPersonalContent(data);
        addBasicContent(data);
        addWorkData(data);
        addDegreeData(data);
        addCoursesData(data);
        addCoreSkills(data);
        addTecSkills(data);

        profileDescription.innerText = data.basics.about;


    } else {
        console.log("HTTP:Error: " + response.status);
    }
}

getMyCv();

//get and show name and role
function addPersonalContent(data) {
    let myName= document.querySelector('h1');
    myName.innerText = data.basics.name;
    //personalData.innerHTML = data.basics.name;
    //personalData.classList.add('my-name');
    

    let about = document.querySelector('h3');
    about.classList.add('role-description');
    about.innerHTML = `${data.basics.label2 } <br> ${data.basics.label1}`;

    personalData.appendChild(myName);
    personalData.appendChild(about);

}

//get and show personal basic data
function addBasicContent(data) {
    let userProfileData = document.createElement('li');
    
    userProfileData.classList.add('basic-data');

    userProfileData.innerHTML = `Email: ${data.basics.email}<br> City: ${data.basics.location.city},  ${data.basics.location.country} <br> ${data.basics.profiles[0].linkedin} <br> ${data.basics.profiles[1].url}`;

    userProfile.appendChild(userProfileData);
}

//get and show work data
function addWorkData(data) {
    for(let i = 0; i < work.length; i++) {
        work[i].company.innerHTML = data.work[i].company;
        work[i].role.innerHTML = `${data.work[i].role} | ${data.work[i].date}`;
        work[i].jobDescription.innerHTML = data.work[i].jobDescription;
    }
}


//get and show degree data
function addDegreeData(data) {

    for(let i = 0; i < degree.length; i++) {
        degree[i].institution.innerHTML = data.education[i].institution;
        degree[i].area.innerHTML = data.education[i].area;
    }

}


//get and show courses data
function addCoursesData(data) {

    for(let i = 0; i < courses.length; i++) {
        courses[i].course.innerHTML = `${data.courses[i].name},  ${data.courses[i].institution}`;
    }

}


//get and show core skills data
function addCoreSkills(data) {

    for(let i = 0; i < coreSkills.length; i++) {
        coreSkills[i].coreName.innerHTML = data.coreSkills[i].name;
    }

}
//get and show tec skills data
function addTecSkills(data) {

    for(let i = 0; i < tecSkills.length; i++) {
        tecSkills[i].tecName.innerHTML = data.technicalSkills[i].name;
    }

/*     const data1 = tecSkills.tecName;
    const object = data.technicalSkills.name;
    function search(data1, object);
 */
}

/* function search(data, object) {
    for(let i = 0; i < tecSkills.length; i++) {
        data[i].innerHTML = object[i];
    }
} */


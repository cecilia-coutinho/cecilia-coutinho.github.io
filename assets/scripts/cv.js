//--------> CV - JSON <--------

let url = "https://raw.githubusercontent.com/Cecilia-Coutinho/my-cv-json-api/main/cv.json";
//console.log(`url: ${url}`);



const userProfile = document.querySelector('.user-profile');
const profileDescription = document.querySelector('.profile-description');

let work = [
    {
        company: document.querySelector('.work-title-1'),
        role: document.querySelector('.role-1'),
        jobDescription: document.querySelector('.descrip-1')
    },
    {
        company: document.querySelector('.work-title-2'),
        role: document.querySelector('.role-2'),
        jobDescription: document.querySelector('.descrip-2')
    },
    {
        company: document.querySelector('.work-title-3'),
        role: document.querySelector('.role-3'),
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
    }
];

//--------> loading event <--------
window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', () => {
        //document.body.parentNode.removeChild('loader');
        loader.remove();
    });
});

//--------> to show CV data <--------
async function getMyCv() {

    let response = await fetch(url);
    console.log(`response: ${response}`);

    if (response.ok) {
        let data = await response.json();

        addPersonalContent(data);
        addBasicContent(data);
        addWorkData(data);
        addDegreeData(data);
        addCoursesData(data);
        addCoreSkills(data);
        addTecSkills(data);
    } else {
        console.log("HTTP:Error: " + response.status);
    };
};

getMyCv();

//get and show name and role
const personalData = document.getElementById('main'); //parent element

function addPersonalContent(data) {
    let myName = document.createElement('h1');
    myName.classList.add('my-name');
    myName.innerHTML = data.basics.name;

    let about = document.createElement('h3');
    about.classList.add('role-description');
    about.innerHTML = `${data.basics.label2} <br> ${data.basics.label1}`;

    personalData.appendChild(myName);
    personalData.appendChild(about);
    console.log(myName);
}

//get and show personal basic data
function addBasicContent(data) {
    const userProfileUl = document.createElement('ul');

    const userProfileData1 = document.createElement('li');
    userProfileData1.innerText = `Email: ${data.basics.email}`;

    const userProfileData2 = document.createElement('li');
    userProfileData2.innerText = `City: ${data.basics.location.city}, ${data.basics.location.country}`;

    const userProfileData3 = document.createElement('li');
    userProfileData3.innerText = `Linkedin: ${data.basics.profiles[0].linkedin}`;

    const userProfileData4 = document.createElement('li');
    userProfileData4.innerText = `Github: ${data.basics.profiles[1].url}`;
    userProfileData4.style.marginBottom = "30px";

    let printButton = document.createElement('a');
    printButton.classList.add('button');
    printButton.classList.add('print-button');
    printButton.innerHTML = 'Download cv';
    printButton.onclick = function () {
        //window.print();
        printButton.href = "./assets/files-download/CV-Cecília-Coutinho.pdf"
    };

    profileDescription.innerText = `${data.basics.about}`;

    userProfileData1.classList.add('basic-data');
    userProfileData2.classList.add('basic-data');
    userProfileData3.classList.add('basic-data');
    userProfileData4.classList.add('basic-data');


    userProfile.appendChild(userProfileUl);
    userProfileUl.appendChild(userProfileData1);
    userProfileUl.appendChild(userProfileData2);
    userProfileUl.appendChild(userProfileData3);
    userProfileUl.appendChild(userProfileData4);
    userProfile.appendChild(printButton);

}

//get and show work data
function addWorkData(data) {
    for (let i = 0; i < work.length; i++) {
        work[i].company.innerHTML = data.work[i].company;
        work[i].role.innerHTML = `${data.work[i].role} | ${data.work[i].date}`;
        work[i].jobDescription.innerHTML = data.work[i].jobDescription;
    }
}


//get and show degree data
function addDegreeData(data) {

    for (let i = 0; i < degree.length; i++) {
        degree[i].institution.innerHTML = data.education[i].institution;
        degree[i].area.innerHTML = data.education[i].area;
    }

}


//get and show courses data
function addCoursesData(data) {
        for (let i = 0; i < courses.length; i++) {
            courses[i].course.innerText = `${data.courses[i].name},  ${data.courses[i].institution}`;
        }
}


//get and show core skills data
function addCoreSkills(data) {
    const coreList = document.getElementsByClassName('core')[0];
    const coreSkills = data.coreSkills;

    for (let i = 0; i < coreSkills.length && i < 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = coreSkills[i].name;
        coreList.appendChild(listItem);
    }
    console.log(coreList);
}

//get and show tec skills data
function addTecSkills(data) {
    const techskillsList = document.getElementsByClassName('tech')[0];
    const techSkills = data.technicalSkills;

    for (let i = 0; i < techSkills.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = techSkills[i].name;
        techskillsList.appendChild(listItem);
    }
    console.log(techskillsList);
}
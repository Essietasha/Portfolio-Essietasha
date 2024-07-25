//OnLoad Event
window.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projectsGrid');
    const intro = document.querySelector('.intro');

    projectsGrid.classList.add('slideup');
    intro.classList.add('textslide');
})


//Slide Animation
const navcircle = document.querySelector('.navCircle');
const projectsEl = document.querySelector('.projects');
function slideUpProjects(){
    projectsEl.classList.add('slideup');
}
navcircle.addEventListener('click', slideUpProjects);


//Display and Hide Projects Content
let javascriptBtn;
let reactBtn;
let javascriptPage;
let reactPage;
let projectsPage;
javascriptBtn = document.getElementById('javascript');
reactBtn = document.getElementById('react');
javascriptPage = document.querySelector('.javascriptProjects');
reactPage = document.querySelector('.reactProjects');
projectsPage = document.querySelector('.projects');

javascriptBtn.addEventListener('click', () => {
    javascriptPage.style.display = 'block';
    javascriptPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    reactPage.style.display = 'none';
});

reactBtn.addEventListener('click', () => {
    reactPage.style.display = 'block';
    reactPage.classList.add('slideup');
    projectsPage.classList.add('slideabove');
    javascriptPage.style.display = 'none';
});


//Active Class
let parentDiv;
let childDivs;
parentDiv = document.getElementById('parentDiv');
childDivs = parentDiv.querySelectorAll('div');

function handleButtonClick(event){
    childDivs.forEach(childDiv => {
        childDiv.classList.remove('active');
    });

    //The element/div that triggered the click event.
    event.target.classList.add('active');
}

childDivs.forEach(childDiv => {
    childDiv.addEventListener('click', handleButtonClick);
});




//Keep Animation Active each time section is viewed
window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.slideleft');

    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slidein');
                // Reset animation
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('slidein');
                }, { once: true });
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

//Repeat Slide
window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.repeatSlides');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('repeatslide');
                // Reset animation
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('repeatslide');
                }, { once: true });
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});



//PROJECTS 
//Project One Slider
let slideIndex = 1;
showSlides(slideIndex);

function addSlides(index) {
    setTimeout(() =>{
        showSlides(slideIndex += index);
    }, 1000)
  };

function showSlides(index) {
    let i;
    let slide = document.getElementsByClassName("slide");

    if (index > slide.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slide.length }

    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    
    slide[slideIndex-1].style.display = "block";
};


//Project Two Slider
let slideIndexII = 1;
showSlidesII(slideIndexII);

function addSlidesII(indexII) {
    setTimeout(() =>{
        showSlidesII(slideIndexII += indexII);
    }, 1000)
  };

function showSlidesII(indexII) {
    let i;
    let slideII = document.getElementsByClassName("slideII");

    if (indexII > slideII.length) { slideIndexII = 1 }
    if (indexII < 1) { slideIndexII = slideII.length }

    for (i = 0; i < slideII.length; i++){
        slideII[i].style.display = "none";
    }
    
    slideII[slideIndexII-1].style.display = "block";
};


//Project Three Slider
let slideIndexIII = 1;
showSlidesIII(slideIndexIII);

function addSlidesIII(indexIII) {
    setTimeout(() =>{
        showSlidesIII(slideIndexIII += indexIII);
    }, 1000)
  };

function showSlidesIII(indexIII) {
    let i;
    let slideIII = document.getElementsByClassName("slideIII");

    if (indexIII > slideIII.length) { slideIndexIII = 1 }
    if (indexIII < 1) { slideIndexIII = slideIII.length }

    for (i = 0; i < slideIII.length; i++){
        slideIII[i].style.display = "none";
    }
    
    slideIII[slideIndexIII-1].style.display = "block";
};



//Project Four Slider
let slideIndexIIII = 1;
showSlidesIIII(slideIndexIIII);

function addSlidesIIII(indexIIII) {
    setTimeout(() =>{
        showSlidesIIII(slideIndexIIII += indexIIII);
    }, 1000)
  };

function showSlidesIIII(indexIIII) {
    let i;
    let slideIIII = document.getElementsByClassName("slideIIII");

    if (indexIIII > slideIIII.length) { slideIndexIIII = 1 }
    if (indexIIII < 1) { slideIndexIIII = slideIIII.length }

    for (i = 0; i < slideIIII.length; i++){
        slideIIII[i].style.display = "none";
    }
    
    slideIIII[slideIndexIIII-1].style.display = "block";
};

//Nav Element Scroll Event
// window.addEventListener('scroll', () => {
//     const navDivElement = document.getElementById('navDivEl');
//     const navLinks = navDivElement.querySelectorAll('a');

//     navLinks.forEach(link => {
//         link.style.color = 'black';
//         if (window.scrollY > 400 ){
//             link.style.color = "black";

//             if(window.scrollY > 2000){
//                 link.style.color = "white";
//             }
//             else{
//                 link.style.color = "black";
//             }
//         }
//         else{
//             link.style.color = "white";
//         }
//     });
// });

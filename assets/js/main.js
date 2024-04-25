//init
const main=document.querySelector('main');
const home=document.querySelector('#home');

const sectionArray=Array.from(document.querySelector('main').children);
sectionArray.forEach(section => {
    section.style.display='none';
});

async function intro() {
    document.body.classList.add('fadeInIntro');
    home.style.display='block';
    await sleep(1000);
    document.body.classList.remove('fadeInIntro');
}
intro();

//NAV
const navArray=Array.from(document.querySelector('ul').children);
navArray[0].style.display='none';
for(let i=0; i<navArray.length; i++) {
    navArray[i].addEventListener('click', function() {
        navArray.forEach(element => {
            element.style.display='block';
        });
        this.style.display='none';
        switchAnimation(sectionArray[i]);
    })
}

async function switchAnimation(section) {
    main.classList.add('fadeOut');
    await sleep(300);
    sectionArray.forEach(section => {
        section.style.display='none';
    });
    section.style.display='block';
    main.classList.remove('fadeOut');
    main.classList.add('fadeIn');
    await sleep(300);
    main.classList.remove('fadeIn');
}

//DARK MODE
const body=document.querySelector('body');
const header=document.querySelector('header');
const footer=document.querySelector('footer');
const doc=[body,header,main,footer];
const pageArray=[...doc,...Array.from(document.querySelectorAll('.toDark')),...Array.from(document.querySelectorAll('article')),document.querySelector('.category-menu')];
const svgs=Array.from(document.querySelectorAll('.svgToDark'));
const images=document.querySelectorAll('.imgBackground');

const inputDarkMode=document.querySelector('#theme');

inputDarkMode.addEventListener('click', function(){
    if(inputDarkMode.checked) {
        pageArray.forEach(element => {
            element.classList.add('darkMode');
            element.classList.remove('lightMode'); 
        });

        header.classList.add('headerAfterDark');
        header.classList.remove('headerAfterLight');

        images.forEach(element => {
            element.classList.add('imgDarkMode');
            element.classList.remove('imgLightMode'); 
        });

        svgs.forEach(element => {
            element.classList.add('svgToWhite');
            element.classList.remove('svgToDark'); 
        })
        
    } else {

        pageArray.forEach(element => {
            element.classList.remove('darkMode');
            element.classList.add('lightMode'); 
        });

        header.classList.remove('headerAfterDark');
        header.classList.add('headerAfterLight');

        images.forEach(element => {
            element.classList.remove('imgDarkMode');
            element.classList.add('imgLightMode'); 
        });

        svgs.forEach(element => {
            element.classList.remove('svgToWhite');
            element.classList.add('svgToDark'); 
        })
    }
})
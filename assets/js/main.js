//init
const main=document.querySelector('main');
const home=document.querySelector('#home');

const navArray=Array.from(document.querySelector('ul').children);
const sectionArray=Array.from(document.querySelector('main').children);
sectionArray.forEach(section => {
    section.style.display='none';
});

async function intro() {
    document.body.classList.add('fadeIn');
    home.style.display='block';
    await sleep(400);
    document.body.classList.remove('fadeIn');
}
intro();

//NAV
for(let i=0; i<navArray.length; i++) {
    navArray[i].addEventListener('click', function() {
        switchAnimation(sectionArray[i]);
    })
}

async function switchAnimation(section) {
    main.classList.add('fadeOut');
    await sleep(400);
    sectionArray.forEach(section => {
        section.style.display='none';
    });
    section.style.display='block';
    main.classList.remove('fadeOut');
    main.classList.add('fadeIn');
    await sleep(400);
    main.classList.remove('fadeIn');
}

//DARK MODE
const body=document.querySelector('body');
const header=document.querySelector('header');
const footer=document.querySelector('footer');
const pageArray=[body,header,main,footer];

const inputDarkMode=document.querySelector('#theme');

inputDarkMode.addEventListener('click', function(){
    if(inputDarkMode.checked) {
        pageArray.forEach(element => {
            element.classList.add('darkMode');
            element.classList.remove('lightMode'); 
        });
        
    } else {
        pageArray.forEach(element => {
            element.classList.remove('darkMode');
            element.classList.add('lightMode'); 
        });
    }
})
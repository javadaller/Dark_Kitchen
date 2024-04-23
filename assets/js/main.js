//init
const main=document.querySelector('main');
const home=document.querySelector('#home');
const menu=document.querySelector('#menu');
const cart=document.querySelector('#cart');
const about=document.querySelector('#about');

const navArray=Array.from(document.querySelector('nav').children);
const sectionArray=Array.from(document.querySelector('main').children);
sectionArray.forEach(section => {
    section.style.display='none';
});
home.style.display='block';

//NAV
for(let i=0; i<navArray.length; i++) {
    navArray[i].addEventListener('click', function() {
        switchAnimation(sectionArray[i]);
    })
}

async function switchAnimation(section) {
    main.classList.add('fadeOut');
    await sleep(500);
    sectionArray.forEach(section => {
        section.style.display='none';
    });
    section.style.display='block';
    main.classList.remove('fadeOut');
    main.classList.add('fadeIn');
}
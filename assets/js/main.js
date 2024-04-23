//init
const home=document.querySelector('#home');
const menu=document.querySelector('#menu');
const cart=document.querySelector('#cart');
const about=document.querySelector('#about');



//NAV
const navArray=Array.from(document.querySelector('nav').children);
const sectionArray=Array.from(document.querySelector('main').children);

for(let i=0; i<navArray.length; i++) {
    navArray[i].addEventListener('click', function() {
        sectionArray.forEach(section => {
            section.style.display='none';
        });
        sectionArray[i].style.display='block';
    })
}
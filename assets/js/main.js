//init
const main=document.querySelector('main');
const home=document.querySelector('#home');

const navArray=Array.from(document.querySelector('nav').children);
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
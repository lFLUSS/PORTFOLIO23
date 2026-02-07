const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

const typedHome = new Typed('#home-typed', {
    strings: ['web developer', 'designer', 'front and back end developer'],
    typeSpeed : 50,
    backspeed : 40,
    loop : true,
    backdelay: 2000,
    cursorChar: '_', 
})

// menu SP
let menuIcon = document.querySelector('.hambugur');
let menuSP = document.querySelector('.header__nav');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuSP.classList.toggle('active');
});

document.querySelector('.menu-link__has-sub').addEventListener('click', function (){
    document.querySelector('.menu__sub').classList.toggle('active');
});
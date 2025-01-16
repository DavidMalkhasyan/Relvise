const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav-elements ul');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('open');
});

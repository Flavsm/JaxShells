//SELECTORS

const dropBtn = document.querySelector('.menuButton');
const dropContent = document.querySelector('.dropDown');
const dropOptions = document.querySelector('.option');
const cartBtn = document.querySelector('.cartButton');
const navBar = document.querySelector('.navBar');
const navName = document.querySelector('.navName');

//EVENT LISTENERS

dropBtn.addEventListener('click', openMenu);
dropContent.addEventListener('mouseleave', closeMenu);

//FUNCTIONS

function openMenu() {
    dropContent.classList.toggle('show');
};

function closeMenu () {
    dropContent.classList.remove('show');
}




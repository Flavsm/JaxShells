//SELECTORS

const dropBtn = document.querySelector('.menuButton');
const dropContent = document.querySelector('.dropDown');
const navJax = document.getElementById("navjax");
const cartBtn = document.querySelector('.cartButton');
const cartBox = document.querySelector('.cartBox');
const mostElemBox = document.querySelector('.mostElemBox');

const checkOutBtn = document.querySelector('.checkOutBtn');

//EVENT LISTENERS

//event to toggle menu
dropBtn.addEventListener('click', openMenu);
dropContent.addEventListener('mouseleave', closeMenu);

//event to toggle cart
cartBtn.addEventListener('click', showCart);

//add event listener to check-out button 
checkOutBtn.addEventListener('click', checkOutPage);

//FUNCTIONS

//show dropdown menu
function openMenu() {
    dropContent.classList.toggle('show');
};

//hide dropdown menu
function closeMenu () {
    dropContent.classList.remove('show');
}

window.onscroll = function() {displayNavText()};

//after scrolling, show or hide name top left
function displayNavText() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  navJax.className = "showNavName animate__animated animate__fadeIn";
  navJax.innerText = ('Jax Shells');
} else {
  navJax.className = "animate__animated animate__fadeOut";
  navJax.innerText = "";
  }
}

//check media width
const mediaSize = window.matchMedia("(min-width: 600px)");

//toggle cart, adapt main element
function showCart() {

  if (cartBox.style.display !== "flex") {
      cartBox.style.display = "flex";
      mostElemBox.style.opacity = 0.8;
      if(mediaSize.matches) {
        mostElemBox.style.width = "80vw";
          mostElemBox.animate( {
          width: ['100vw', '80vw'],
          easing: 'ease-in',
          }, 350);
      } else {
        mostElemBox.style.width = "70vw";
          mostElemBox.animate( {
          width: ['100vw', '70vw'],
          easing: 'ease-in',
      }, 350);
    }
  } else {
      cartBox.style.display = "none";
      mostElemBox.style.opacity = 1;
      if(mediaSize.matches) {
        mostElemBox.style.width = "100vw";
          mostElemBox.animate( {
          width: ['80vw', '100vw'],
          easing: 'ease-in',
          }, 350);
      } else {
        mostElemBox.style.width = "100vw";
          mostElemBox.animate( {
          width: ['70vw', '100vw'],
          easing: 'ease-in',
          }, 350);
      }
  } 
}

function checkOutPage() {
  window.location.href='./checkOut.html';
}
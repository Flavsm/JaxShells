//SELECTORS

const dropBtn = document.querySelector('.menuButton');
const dropContent = document.querySelector('.dropDown');
const dropOptions = document.querySelector('.option');
const cartBtn = document.querySelector('.cartButton');
const cartBox = document.querySelector('.cartBox');
const mostElemBox = document.querySelector('.mostElemBox');

//EVENT LISTENERS

dropBtn.addEventListener('click', openMenu);
dropContent.addEventListener('mouseleave', closeMenu);
cartBtn.addEventListener('click', showCart);

//FUNCTIONS

//show dropdown menu
function openMenu() {
    dropContent.classList.toggle('show');
};

//hide dropdown menu
function closeMenu () {
    dropContent.classList.remove('show');
}

window.onscroll = function() {myFunction()};

//after scrolling, show or hide name top left
function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navjax").className = "showNavName animate__animated animate__fadeIn";
    document.getElementById("navjax").innerText = ('Jax Shells');
  } else {
    document.getElementById("navjax").className = "animate__animated animate__fadeOut";
    document.getElementById("navjax").innerText = "";
  }
}

//toggle cart, adapt main element
function showCart() {
  const mediaSize = window.matchMedia("(min-width: 600px)");

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
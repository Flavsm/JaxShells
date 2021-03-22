//SELECTORS

const dropBtn = document.querySelector('.menuButton');
const dropContent = document.querySelector('.dropDown');
const cartBtn = document.querySelector('.cartButton');
const cartBox = document.querySelector('.cartBox');
const packsBox = document.querySelector('.packsBox');

const firstSelect = document.querySelector('.selectOne');
const secondSelect = document.querySelector('.selectTwo');
const thirdSelect = document.querySelector('.selectThree');
const fourthSelect = document.querySelector('.selectFour');

const pack1 = document.getElementById('price-tag-1');
const pack2 = document.getElementById('price-tag-2');
const pack3 = document.getElementById('price-tag-3');
const pack4 = document.getElementById('price-tag-4');

const addBtn = document.querySelectorAll('.addBtn');
const removeBtn = document.querySelectorAll('.removeBtn');
const itemsBox = document.querySelector('.itemsBox');
const listBox = document.querySelector('.listBox');

//EVENT LISTENERS

dropBtn.addEventListener('click', openMenu);
dropContent.addEventListener('mouseleave', closeMenu);

cartBtn.addEventListener('click', showCart);

firstSelect.addEventListener('change',  () => {priceChange(firstSelect, pack1)});
secondSelect.addEventListener('change', () => {priceChange(secondSelect, pack2)});
thirdSelect.addEventListener('change', () => {priceChange(thirdSelect, pack3)});
fourthSelect.addEventListener('change', () => {priceChange(fourthSelect, pack4)});

addBtn.forEach(x => {
    if (x.id === 'add5') {
        x.addEventListener('click', () => addToCart('5'));
    } else if (x.id === 'add10') {
        x.addEventListener('click', () => addToCart('10'));
    } else if (x.id === 'add20') {
        x.addEventListener('click', () => addToCart('20'));
    } else {
        x.addEventListener('click', () => addToCart('50'));
    }
});

/* removeBtn.forEach(x => {
    if (x.id === 'remove5') {
        x.addEventListener('click', () => removeFromCart('5'));
    } else if (x.id === 'remove10') {
        x.addEventListener('click', () => removeFromCart('10'));
    } else if (x.id === 'remove20') {
        x.addEventListener('click', () => removeFromCart('20'));
    } else {
        x.addEventListener('click', () => removeFromCart('50'));
    }
}); */


//FUNCTIONS

//if add button clicked, add item to cart

function addToCart(x) {
    /* const arr = [];
    arr.push(x); */
    const newItem = document.createElement('li');
    const valueItem = document.createTextNode(`pic - 1 pack of ${x} small size: price button`);
    newItem.appendChild(valueItem);
    listBox.appendChild(newItem);
    
}

/* function removeFromCart(x) {
    if (listBox.hasChildNodes()) {
        listBox.removeChild(listBox.childNodes[x.indexOf]);
      } 
   
} */

//show dropdown menu
function openMenu() {
    dropContent.classList.toggle('show');
};

//hide dropdown menu
function closeMenu () {
    dropContent.classList.remove('show');
}

//toggle cart, adapt main element
function showCart() {
    const mediaSize = window.matchMedia("(min-width: 600px)");

    if (cartBox.style.display !== "flex") {
        cartBox.style.display = "flex";
        packsBox.style.opacity = 0.8;
        if(mediaSize.matches) {
            packsBox.style.width = "80vw";
            packsBox.animate( {
            width: ['100vw', '80vw'],
            easing: 'ease-in',
            }, 350);
        } else {
            packsBox.style.width = "70vw";
            packsBox.animate( {
            width: ['100vw', '70vw'],
            easing: 'ease-in',
        }, 350);
        }
    } else {
        cartBox.style.display = "none";
        packsBox.style.opacity = 1;
        if(mediaSize.matches) {
            packsBox.style.width = "100vw";
            packsBox.animate( {
            width: ['80vw', '100vw'],
            easing: 'ease-in',
            }, 350);
        } else {
            packsBox.style.width = "100vw";
            packsBox.animate( {
            width: ['70vw', '100vw'],
            easing: 'ease-in',
            }, 350);
        }
    } 
}

//for each select set up a different price according to pack size
function priceChange (elem, pack) {
    let x = elem.value;
    let price;

    if (elem === firstSelect) {
        price = 1;
    } else if (elem === secondSelect) {
        price = 2;
    } else if (elem === thirdSelect) {
        price = 3;
    } else {
        price = 4;
    };

    switch (x) {
        case "0":
            pack.innerHTML = `$ ${price} per pack`;
            break;
        case "1":
            pack.innerHTML = `$ ${price+1} per pack`;
            break;
        case "2":
            pack.innerHTML = `$ ${price+2} per pack`;
            break;
        case "3":
            pack.innerHTML = `$ ${price+3} per pack`;
            break;
        case "4":
            pack.innerHTML = `$ ${price+4} per pack`;
            break;
        case "5":
            pack.innerHTML = `$ ${price+5} per pack`;
            break;
        case "6":
            pack.innerHTML = `$ ${price+6} per pack`;
            break;
        case "7":
            pack.innerHTML = `$ ${price+7} per pack`;
            break; 
        default: "Contact for price";         
    };
}


/* const itemsArr = [];
selectAll.forEach((e) => {
    itemsArr.push(e);
}); */
 
/* function eachChild() {
    for (let i = 0; i < selectAll.length; i++) {
       console.log(selectAll[i].firstElementChild.id)
    }   
}; */

/* function eachElement() {
    let eachChild;
    for (let i = 0; i < selectAll.length; i++) {
        eachChild = selectAll[i].firstElementChild.id;
     }; 

     switch (eachChild) {
         case "select-one":
            () => {priceChange(firstSelect, pack1)};
            break;
         case "select-two":
            () => {priceChange(secondSelect, pack2)};
            break;
         case "select-three":
            () => {priceChange(thirdSelect, pack3)};
            break;
         case "select-four":
            () => {priceChange(fourthSelect, pack4)};
            break;
     }

} */


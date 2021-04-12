//SELECTORS

const dropBtn = document.querySelector('.menuButton');
const dropContent = document.querySelector('.dropDown');
const cartButton = document.querySelector('.cartButton');
const cartBox = document.querySelector('.cartBox');
const mainPage = document.querySelector('.mainPage');

const firstSelect = document.querySelector('.selectOne');
const secondSelect = document.querySelector('.selectTwo');
const thirdSelect = document.querySelector('.selectThree');
const fourthSelect = document.querySelector('.selectFour');

const pack1 = document.getElementById('price-tag-1');
const pack2 = document.getElementById('price-tag-2');
const pack3 = document.getElementById('price-tag-3');
const pack4 = document.getElementById('price-tag-4');

const addBtn = document.querySelectorAll('.addBtn');
const itemsBox = document.querySelector('.itemsBox');
const listBox = document.querySelector('.listBox');

const cartTotal = document.getElementById('cart-total');

const checkOutBtn = document.querySelector('.checkOutBtn');

const cartCount = document.querySelector('.cartCount');

//EVENT LISTENERS

//event to toggle menu
dropBtn.addEventListener('click', openMenu);
dropContent.addEventListener('mouseleave', closeMenu);

//event to toggle cart
cartButton.addEventListener('click', showCart);

//add event listener to each select
firstSelect.addEventListener('change', () => { priceChange(firstSelect, pack1) });
secondSelect.addEventListener('change', () => { priceChange(secondSelect, pack2) });
thirdSelect.addEventListener('change', () => { priceChange(thirdSelect, pack3) });
fourthSelect.addEventListener('change', () => { priceChange(fourthSelect, pack4) });

//add event listener to each pack's button
addBtn.forEach(x => {
    if (x.id === 'add5') {
        x.addEventListener('click', () => priceToCart('5', firstSelect));
    } else if (x.id === 'add10') {
        x.addEventListener('click', () => priceToCart('10', secondSelect));
    } else if (x.id === 'add20') {
        x.addEventListener('click', () => priceToCart('20', thirdSelect));
    } else {
        x.addEventListener('click', () => priceToCart('50', fourthSelect));
    }
});

//add event listener to check-out button 
checkOutBtn.addEventListener('click', checkOutPage);

//FUNCTIONS

//show dropdown menu
function openMenu() {
    dropContent.classList.toggle('show');
};

//hide dropdown menu
function closeMenu() {
    dropContent.classList.remove('show');
}

//change the width of main element when cart open
function showCart() {
    const mediaSize = window.matchMedia("(min-width: 600px)");
    if (cartBox.style.display !== "flex") {
        cartBox.style.display = "flex";
        mainPage.style.opacity = 0.8;
        if (mediaSize.matches) {
            mainPage.style.width = "80vw";
            mainPage.animate({
                width: ['100vw', '80vw'],
                easing: 'ease-in',
            }, 350);
        } else {
            mainPage.style.width = "65vw";
            mainPage.animate({
                width: ['100vw', '65vw'],
                easing: 'ease-in',
            }, 350);
        }
    } else {
        cartBox.style.display = "none";
        mainPage.style.opacity = 1;
        if (mediaSize.matches) {
            mainPage.style.width = "100vw";
            mainPage.animate({
                width: ['80vw', '100vw'],
                easing: 'ease-in',
            }, 350);
        } else {
            mainPage.style.width = "100vw";
            mainPage.animate({
                width: ['65vw', '100vw'],
                easing: 'ease-in',
            }, 350);
        }
    }
}

//for each select set up a different price according to pack size
function priceChange(elem, pack) {

    let price;
    let itemValue = elem.value;

    if (elem === firstSelect) {
        price = 1;
    } else if (elem === secondSelect) {
        price = 2;
    } else if (elem === thirdSelect) {
        price = 3;
    } else {
        price = 4;
    };

    switch (itemValue) {
        case "0":
            pack.innerHTML = `$ ${price} per pack`;
            break;
        case "1":
            pack.innerHTML = `$ ${price + 1} per pack`;
            break;
        case "2":
            pack.innerHTML = `$ ${price + 2} per pack`;
            break;
        case "3":
            pack.innerHTML = `$ ${price + 3} per pack`;
            break;
        case "4":
            pack.innerHTML = `$ ${price + 4} per pack`;
            break;
        case "5":
            pack.innerHTML = `$ ${price + 5} per pack`;
            break;
        case "6":
            pack.innerHTML = `$ ${price + 6} per pack`;
            break;
        case "7":
            pack.innerHTML = `$ ${price + 7} per pack`;
            break;
        default: "Contact for price";
    };
}


//if add button clicked, add item to cart with corret price
function priceToCart(number, elem) {

    let itemValue = elem.value;
    let itemPrice;
    let itemSize = elem.options[elem.selectedIndex].text;

    if (elem === firstSelect) {
        price = 1;
    } else if (elem === secondSelect) {
        price = 2;
    } else if (elem === thirdSelect) {
        price = 3;
    } else {
        price = 4;
    };

    switch (itemValue) {
        case "0":
            itemPrice = `${price}`;
            break;
        case "1":
            itemPrice = `${price + 1}`;
            break;
        case "2":
            itemPrice = `${price + 2}`;
            break;
        case "3":
            itemPrice = `${price + 3}`;
            break;
        case "4":
            itemPrice = `${price + 4}`;
            break;
        case "5":
            itemPrice = `${price + 5}`;
            break;
        case "6":
            itemPrice = `${price + 6}`;
            break;
        case "7":
            itemPrice = `${price + 7}`;
            break;
        default: "Contact for price";
    };

    addToCart(number, itemSize, itemPrice);

}

   //cart total variable
   let totalSumArr = 0;
   //cart count array
   let newArr = [];
   //cart count var
   let itemCount;
   

//to add item to cart
function addToCart(number, itemSize, itemPrice) {

    //check devices size
    const mediaSize = window.matchMedia("(min-width: 600px)");

    //if cart not full
    if (listBox.childElementCount <= 12) {

        //create list item
    const newItem = document.createElement('li');
    newItem.classList.add('cartItem');

    //create new paragraph for list 
    const newText = document.createElement('p');
    newText.classList.add('listItem')
    //create text of paragraph
    newText.innerHTML = `Pack of ${number} - ${itemSize} - $${itemPrice}`;

    //create div for delete button
    const newDiv = document.createElement('div');
    newDiv.classList.add('iconDiv');
    //create icon for delete button
    const newIcon = document.createElement('i');
    newIcon.classList.add('iconElement');
    //append icon to div
    newDiv.appendChild(newIcon);

    // check media size
    if (mediaSize.matches) {
        //put img for icon when width = 600+
        newIcon.innerHTML = '<img id="the-img" src="./delete.png" width="30" height="30">';
    } else {
        //put img for icon when width = 600-
        newIcon.innerHTML = '<img src="./delete.png" width="18" height="18">';
    }

    //append pack text to item
    newItem.appendChild(newText);
    
    //append delete icon to item
    newItem.appendChild(newDiv);

    //append item to cart list
    listBox.appendChild(newItem);

    //TOTAL PRICE, CART COUNT AND DELETE BUTTON

    //add item's price to total variable
    totalSumArr = totalSumArr + Number(itemPrice);
    //display variable on the cart
    cartTotal.innerHTML = `Total: $${totalSumArr}`;

    //add each child element count to array
    newArr.push(listBox.childElementCount);

    //set var equal to array length
    itemCount = newArr.length;

    //display new value for cart
    cartCount.innerText = `${itemCount}`;

    //on clicking icon, delete item and change total
    newIcon.addEventListener('click', () => {
        //remove item's price from total variable
        totalSumArr = totalSumArr - Number(itemPrice);
        //display updated variable on the cart
        cartTotal.innerHTML = `Total: $${totalSumArr}`;

        //remove an item from array
        newArr.pop();
        //set variable equal no new array
        itemCount = newArr.length;
        //display new value for cart

        cartCount.innerHTML = `${itemCount}`;

        //delete item from cart
        newItem.remove();

    });


    } else {
        alert('Cart is full, please remove an item.')
    }

}

//go to check-out page
function checkOutPage() {
    window.location.href = './checkOut.html';
}


//attempts at local storage (partially worked)
    
/* function setData() {
    localStorage.setItem('itemCount', `${itemCount}`);
    localStorage.setItem('totalSumArr', `${totalSumArr}`);
    localStorage.setItem('lastDiv', `${lastDiv}`);
}

function getData() {
    itemCount = localStorage.getItem('itemCount');
    totalSumArr = localStorage.getItem('totalSumArr'); 
    lastDiv = localStorage.getItem('lastDiv');
} */

 /* console.log(listBox.innerText); */

 /* localStorage.setItem('cartCount', `${itemCount}`);

cartCount.innerHTML = localStorage.getItem('cartCount'); */

/* localStorage.setItem('cartTotal', `${totalSumArr}`);
        cartTotal.innerHTML = `Total: $${localStorage.getItem('cartTotal')}`; */

/* localStorage.setItem('cartCount', `${itemCount}`)
    cartCount.innerText = localStorage.getItem('cartCount'); */
/* localStorage.setItem('cartTotal', `${totalSumArr}`);
    cartTotal.innerHTML = `Total: $${localStorage.getItem('cartTotal')}`; */
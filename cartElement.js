//SELECTORS

/* const dropBtn = document.querySelector('.menuButton');
const dropContent = document.querySelector('.dropDown');
const navJax = document.getElementById("navjax");
const cartBtn = document.querySelector('.cartButton');
const cartBox = document.querySelector('.cartBox');

const mainPage = document.querySelector('.mainPage');
const mostElemBox = document.querySelector('.mostElemBox'); */

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

//EVENT LISTENERS

/* //event to toggle menu
dropBtn.addEventListener('click', openMenu);
dropContent.addEventListener('mouseleave', closeMenu);

//event to toggle cart
cartBtn.addEventListener('click', showCart); */

//add event listener to each select
firstSelect.addEventListener('change',  () => {priceChange(firstSelect, pack1)});
secondSelect.addEventListener('change', () => {priceChange(secondSelect, pack2)});
thirdSelect.addEventListener('change', () => {priceChange(thirdSelect, pack3)});
fourthSelect.addEventListener('change', () => {priceChange(fourthSelect, pack4)});

//add event listener to each pack's button
addBtn.forEach(x => {
    if (x.id === 'add5') {
        x.addEventListener('click', () => addToCart('5', firstSelect));
    } else if (x.id === 'add10') {
        x.addEventListener('click', () => addToCart('10', secondSelect));
    } else if (x.id === 'add20') {
        x.addEventListener('click', () => addToCart('20', thirdSelect));
    } else {
        x.addEventListener('click', () => addToCart('50', fourthSelect));
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
function closeMenu () {
    dropContent.classList.remove('show');
}


//for each select set up a different price according to pack size
function priceChange (elem, pack) {
    
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

//cart total variable
let totalSumArr = 0;

//if add button clicked, add item to cart
function addToCart(number, elem) {

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
        itemPrice = `${price+1}`;
        break;
    case "2":
        itemPrice = `${price+2}`;
        break;
    case "3":
        itemPrice = `${price+3}`;
        break;
    case "4":
        itemPrice = `${price+4}`;
        break;
    case "5":
        itemPrice = `${price+5}`;
        break;
    case "6":
        itemPrice = `${price+6}`;
        break;
    case "7":
        itemPrice = `${price+7}`;
        break; 
    default: "Contact for price";           
    };

    //create list
    const newList = document.createElement('ul');
    newList.style.display = 'flex';
    newList.style.flexDirection = 'column';
    newList.style.justifyContent = 'space-evenly';
    newList.style.alignItems = 'center';

    //create list item
    const newItem = document.createElement('li');
    //give style to list item
    newItem.style.display = 'flex';
    newItem.style.justifyContent = 'space-evenly';
    newItem.style.alignItems = 'center';

    //create new item for list - type of pack
    const newItem1 = document.createElement('p');
    //create text of list item
    const valueItem = document.createTextNode(`Pack of ${number}`);

    //create new item for list - size of pack
    const newItem2 = document.createElement('p');
    //create text of pack size
    const sizeItem = document.createTextNode(`${itemSize}`);


    //create new item for list - price of pack
    const newItem3 = document.createElement('p');
    //create text of price
    const newPrice = document.createTextNode(`$${itemPrice}`)
   
    //create div for delete button
    const newDiv = document.createElement('div');
    //create icon for delete button
    const newIcon = document.createElement('i');
    //append icon to div
    newDiv.appendChild(newIcon);

    // check media size
    if (mediaSize.matches) {
        newList.style.fontSize = '18px';

        newItem.style.width = '19vw';
        newItem.style.height = '4vh';

        newItem1.style.width = '7vw';
        newItem2.style.width = '6vw';
        newItem3.style.width = '2vw';

        newDiv.style.width = '2vw';
        newDiv.style.height = '2vh';
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';

        newIcon.style.paddingTop = '10px';
        newIcon.style.cursor = 'pointer';
        newIcon.style.color = 'black';

        //put img for icon
        newIcon.innerHTML = '<img id="the-img" src="./delete.png" width="30" height="30">';
    } else {
        newList.style.fontSize = '9px';

        newItem.style.width = '32w';
        newItem.style.height = '4vh';
        
        newItem1.style.width = '13vw';
        
        newItem2.style.width = '12vw';
       
        newItem3.style.width = '4.5vw';
        

        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.width = '3vw';
        newDiv.style.height = '3vh';

        newIcon.style.display = 'flex';
        
        newIcon.style.cursor = 'pointer';

        //put img for icon
        newIcon.innerHTML = '<img src="./delete.png" width="18" height="18">';
    }

    //add item's price to total variable
    totalSumArr = totalSumArr + Number(itemPrice);
    //display variable on the cart
    cartTotal.innerHTML = `Total: $${totalSumArr}`;
    
    //on clicking icon, delete item and change total
    newIcon.addEventListener('click', () => {
        //remove item's price from total variable
        totalSumArr = totalSumArr - Number(itemPrice);
        //display updated variable on the cart
        cartTotal.innerHTML = `Total: $${totalSumArr}`;
        //delete item from cart
        newItem.remove();
    }) ;

    //append pack text to text p
    newItem1.appendChild(valueItem);

    //append pack size to size p
    newItem2.appendChild(sizeItem);

    //append pack price to price p
    newItem3.appendChild(newPrice);
     
    //append pack p, size p, price p and button to list item
     newItem.appendChild(newItem1);
     newItem.appendChild(newItem2);
     newItem.appendChild(newItem3);
     newItem.appendChild(newDiv);

     //append list item to list
     newList.appendChild(newItem);

    //append list to cart
     listBox.appendChild(newList);
}




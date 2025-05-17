let Iconcart = document.querySelector('.cart-icon');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.list-product');

let listProduct = [];

Iconcart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})
CloseCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})
const initApp = () => {
    // get data from json file
    fetch(products.json)
    .then(response => response.json())
    .then(data => {
        listProduct = data;
        console.log(listProduct);
    })
}
initApp();  
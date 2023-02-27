let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    cart.classList.remove('active');
    logIn.classList.remove('active');
   
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    navBar.classList.remove('active');
    logIn.classList.remove('active');
    searchForm.classList.remove('active');
}

let logIn = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    logIn.classList.toggle('active');
    navBar.classList.remove('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');
}

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    cart.classList.remove('active');
    logIn.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navBar.classList.remove('active');
    cart.classList.remove('active');
    logIn.classList.remove('active');
    searchForm.classList.remove('active');
}
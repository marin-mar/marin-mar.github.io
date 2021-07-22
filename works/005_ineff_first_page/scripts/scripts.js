'use strict';

let menuBurger = document.getElementById('menu__burger');
let menuList = document.getElementById('menu__list');

menuBurger.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
});
console.log("Responsive");
let menu = document.querySelector(".menu-icon");
let menu_close = document.querySelector(".menu-close");
let nav_ul = document.querySelector('.nav-ul');
menu.addEventListener('click' , function(e){
    nav_ul.classList.toggle('navbar-slide-left');
    menu.setAttribute('style' , 'display: none !important ;');
    menu_close.setAttribute('style' , 'display: block !important ;')
})

menu_close.addEventListener('click' , function(e){
    nav_ul.classList.toggle('navbar-slide-left');
    menu.setAttribute('style' , 'display: block !important ;');
    menu_close.setAttribute('style' , 'display: none !important ;')
})

console.log(menu);
console.log(menu_close);
console.log(nav_ul);
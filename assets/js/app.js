console.log("Test");
let propDropLink = document.getElementById('prop-drop-link');
console.log(propDropLink);
let propDropMenu = document.querySelector('.nav-ul-dropdown');
console.log(propDropMenu);
propDropLink.addEventListener('click', function(e){
    propDropMenu.classList.toggle('d-none')
})
console.log("Test");
let propDropLink = document.getElementById('prop-drop-link');
console.log(propDropLink);
let propDropMenu = document.querySelector('.nav-ul-dropdown');
console.log(propDropMenu);
propDropLink.addEventListener('click', function (e) {
    propDropMenu.classList.toggle('d-none')
})

propDropMenu.addEventListener('click', function () {
    propDropMenu.classList.toggle('d-none')
})

let navLinks = document.getElementsByClassName('nav-links');
let nav_a = Array.from(navLinks);
console.log(nav_a)

for (let i = 0; i < nav_a.length; i++) {
    const element = nav_a[i];
    element.addEventListener('click', function (e) {
        document.title = `Homofy - ${element.innerHTML}`;
    })
}
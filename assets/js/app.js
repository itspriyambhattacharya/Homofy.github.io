console.log("Test");

// Dropdown Menu

let propDropLink = document.getElementById('prop-drop-link');
let propDropMenu = document.querySelector('.nav-ul-dropdown');
propDropLink.addEventListener('click', function (e) {
    propDropMenu.classList.toggle('d-none')
})

propDropMenu.addEventListener('click', function () {
    propDropMenu.classList.toggle('d-none')
})

// Making Title of the Page Dynamic

let navLinks = document.getElementsByClassName('nav-links');
let nav_a = Array.from(navLinks);

for (let i = 0; i < nav_a.length; i++) {
    const element = nav_a[i];
    element.addEventListener('click', function (e) {
        document.title = `Homofy - ${element.innerHTML}`;
    })
}

// Contact Form Textarea

let desc_ta = document.getElementById('desc')

let desc_label = document.getElementById("desc-label");

let desc_ta_value = "";

desc_ta.addEventListener('focus', function (e) {
    desc_ta_value = desc_ta.value;
})

desc_ta.addEventListener('blur', function (e) {
    desc_ta_value = desc_ta.value;
    desc_label.classList.remove("textarea-js-class")

    if(desc_ta_value != ""){
        desc_label.classList.toggle("textarea-js-class")
    }
})

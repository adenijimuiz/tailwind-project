// let html = document.getElementById('html');
// let change_bth = document.getElementById('change_btn');
// let change_image = document.getElementById('change_image');

// change_bth.addEventListener('click', () => {
//     html.classList.toggle('dark');

//     // Change image source based on preference
//     if (change_image.src.endsWith('moon.svg')) {
//         change_image.src = 'assets/sun.svg';
//     } else {
//         change_image.src = 'assets/moon.svg';
//     }
// });

// // Desktops
// let change_bth2 = document.getElementById('change_btn2');
// let change_image2 = document.getElementById('change_image2');

// change_bth2.addEventListener('click', () => {
//     html.classList.toggle('dark');

//     // Change image source based on preference
//     if (change_image2.src.endsWith('moon.svg')) {
//         change_image2.src = 'assets/sun.svg';
//     } else {
//         change_image2.src = 'assets/moon.svg';
//     }
// });

// // Mobile menu toggle
// let main_menu = document.getElementById('main_menu');
// let mobile_btn = document.getElementById('mobile_btn');

// mobile_btn.addEventListener('click', () => {
//     main_menu.classList.toggle('hidden');
// });

let c = document.getElementById("html");
let d = document.getElementById("change_btn");
let s = document.getElementById("change_image");

// First button toggle
d.addEventListener("click", () => {
    c.classList.toggle("dark");

    // Switch the icon
    const moonSrc = "assets/moon.svg";
    const sunSrc = "assets/sun.svg";
    s.src = s.src.endsWith(moonSrc) ? sunSrc : moonSrc;
});

// Second button toggle
let m = document.getElementById("change_btn2");
let i = document.getElementById("change_image2");

m.addEventListener("click", () => {
    c.classList.toggle("dark");

    // Switch the icon
    const moonSrc = "assets/moon.svg";
    const sunSrc = "assets/sun.svg";
    i.src = i.src.endsWith(moonSrc) ? sunSrc : moonSrc;
});
let html = document.getElementById('html');
let change_bth = document.getElementById('change_btn');
let change_image = document.getElementById('change_image');

change_bth.addEventListener('click', ()=> {
    html.classList.toggle('dark');

    // change image source base on preference

    if(change_image.src.includes('assets/moon.svg')){
        change_image.src = 'assets/sun.svg';
    }else{
        change_image.src='assets/moon.svg'
    }
})

//desktops

let change_bth2 = document.getElementById('change_btn2');
let change_image2 = document.getElementById('change_image2');

change_bth2.addEventListener('click', ()=> {
    html.classList.toggle('dark');

    // change image source base on preference

    if(change_image2.src.includes('assets/moon.svg')){
        change_image2.src = 'assets/sun.svg';
    }else{
        change_image2.src='assets/moon.svg'
    }
})

let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');

mobile_btn.addEventListener('click',()=>{
    main_menu.classList.toggle('hidden')
})
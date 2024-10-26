let menuIcon = document.querySelector('.toggle-menu');
console.log(menuIcon);
let closeMenu = document.querySelector('.fa-solid');
console.log(closeMenu);
let ul = document.querySelector('nav ul');
console.log(ul);



menuIcon.onclick = function(){
    menuIcon.style.display=`none`;
    closeMenu.style.display=`block`;
    ul.classList=`openMenu`;
}

closeMenu.onclick = function(){
    closeMenu.style.display=`none`;
    menuIcon.style.display=`block`;
    ul.classList.remove('openMenu');
}


let landing = document.querySelector('.landing');
console.log(landing);
let faangleleft = document.querySelector('.landing .fa-angle-left');
console.log(faangleleft);

let faangleright = document.querySelector('.landing .fa-angle-right');
console.log(faangleright);

faangleleft.onclick = function(){
    landing.style.backgroundImage = "url('./IMAGES/landing2.jpg')";
}


faangleright.onclick = function(){
    landing.style.backgroundImage = "url('./IMAGES/landing.jpg')";
}

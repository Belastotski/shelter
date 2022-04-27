{

console.log(document.head.nextSibling);
let logo  = document.querySelector('.logo');

logo.addEventListener('click', e => location.href = './index.html')

let burger = document.querySelector('.burger');

let menu = document.querySelector('.menu-burger');

let isShow = false;

let wrapper = document.querySelector('.wrapper');

let back = document.querySelector('.gray');

const media = window.matchMedia('(max-width: 767px)');

const body = document.querySelector('body');

let menuShow = _ => {
    if (!isShow) {
    burger.classList.add('active');
    menu.classList.add('show-burger-menu');
    menu.classList.remove('hide');
    back.classList.remove('hide');
    body.classList.add('overflow');
    menu.style.height = document.documentElement.clientHeight + 'px';
    isShow = true;
    }
    addClose();
}
let menuHide = _ => {
    if (isShow){
    burger.classList.remove('active');
    menu.classList.remove('show-burger-menu');
    menu.classList.add('hide-burger-menu');
    back.classList.add('hide');
    body.classList.remove('overflow');
    setTimeout(() =>{
    menu.classList.remove('hide-burger-menu');
    menu.classList.add('hide');
    }, 300)
    isShow = false;
    }
    removeClose();
}

let addClose = _ => {
    window.addEventListener('click', e => {
        if (e.target.parentElement != menu && e.target != burger && isShow){
            menuHide()
        }
    });
}
let removeClose = _ => {
    window.removeEventListener('click', e => {
        if (e.target.parentElement != menu && e.target != burger && isShow){
            menuHide()
        }
    });
}

burger.addEventListener('click', e =>{
    isShow? menuHide():menuShow();
})


media.addEventListener('change',(e) => {
    if (isShow && !e.matches) menuHide(); 
    }); 

}

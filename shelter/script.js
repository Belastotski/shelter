let logo  = document.querySelector('.logo');

logo.addEventListener('click', e => location.href = './index.html')

let burger = document.querySelector('.burger');

let menu = document.querySelector('.menu-burger');

let isShow = false;

let wrapper = document.querySelector('.wrapper');

let back = document.querySelector('.gray');

const media = window.matchMedia('(max-width: 767px)');

let menuShow = _ => {
    if (!isShow) {
    burger.classList.add('active');
    menu.classList.add('show-burger-menu');
    menu.classList.remove('hide');
    back.classList.remove('hide');
    isShow = true;
    }
}
let menuHide = _ => {
    if (isShow){
    burger.classList.remove('active');
    menu.classList.remove('show-burger-menu');
    menu.classList.add('hide-burger-menu');
    back.classList.add('hide');
    setTimeout(() =>{
    menu.classList.remove('hide-burger-menu');
    menu.classList.add('hide');
    }, 300)
    isShow = false;
    }
}

let addClose = _ => {
    window.addEventListener('click', e => {
        if (e.target.parentElement != menu && e.target != burger && isShow){
            console.log('i work')
            menuHide()
        }
    });
    console.log('addClose');
}
let removeClose = _ => {
    window.removeEventListener('click', e => {
        if (e.target.parentElement != menu && e.target != burger && isShow){
            console.log('i work')
            menuHide()
        }
    });
    console.log('removeClose')
}

burger.addEventListener('click', e =>{
    isShow? menuHide():menuShow();
})

if (media.matches) {
    addClose()
}

media.addEventListener('change',(e) => {
    if (isShow && !e.matches) menuHide(); 
    e.matches? addClose() : removeClose();
    }); 



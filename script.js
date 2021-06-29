// navbar script

const navButton = document.querySelector('.menu-button');
const navClose = document.querySelector('.close-button');
const sidenav = document.querySelector('.sidenav');
const navBtnActive = document.querySelector('.sidenav-items');


navButton.addEventListener('click', function(){
    sidenav.style.width = '300px';
})

navClose.addEventListener('click', function(){
    sidenav.style.transition = '0.3s'
    sidenav.style.width = '0px';
})

sidenav.addEventListener('blur', function(){
    sidenav.style.transition = '0.3s'
    sidenav.style.width = '0px';
})

navBtnActive.addEventListener('click', function(){
    sidenav.style.transition = '0.3s'
    sidenav.style.width = '0px';
})

// navbar script End

// Container script

// Container script End

// 수입, 지출 Dropdown script

const toggle1 = document.querySelector('.dropdown-toggle1');
const menu1 = document.querySelector('.dropdown-menu1');
const items1 = document.querySelectorAll('.dropdown-item1');


toggle1.addEventListener('click', function(){
    menu1.classList.toggle('show');
})

toggle1.addEventListener('blur', function(){
    menu1.classList.remove('show');
})

items1.forEach(function (item){
    item.addEventListener('click', setOption1);
})

function setOption1() {
    const value = this.textContent.trim();
    toggle1.textContent = value;
    toggle1.classList.add('selected');
}

// 수입, 지출 Dropdown script End

// 카테고리 Dropdown script

const toggle2 = document.querySelector('.dropdown-toggle2');
const menu2 = document.querySelector('.dropdown-menu2');
const items2 = document.querySelectorAll('.dropdown-item2');
const submitBtn = document.querySelector('.submit')

toggle2.addEventListener('click', function(){
    menu2.classList.toggle('show');
})

toggle2.addEventListener('blur', function(){
    menu2.classList.remove('show');
})

items2.forEach(function (item){
    item.addEventListener('click', setOption2);
})

function setOption2() {
    const value = this.textContent.trim();
    toggle2.textContent = value;
    toggle2.classList.add('selected');
    submitBtn.classList.remove('disabled');
}

// 카테고리 Dropdown script End


// Modal Script

const modalOn = document.querySelector('.modal1');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close-button');
const modalContent = document.querySelector('.modal-content')

modalOn.addEventListener('click', function(){
    modal.style.display = 'block';
})

modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
})

modalContent.addEventListener('blur', function(){
    modal.style.display = 'none';
})

// Modal Script End
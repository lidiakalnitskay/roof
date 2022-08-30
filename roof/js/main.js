const popup = document.getElementById('popup');
const closePopup = document.getElementById('close');
const openPopup = document.getElementById('openPopup')

closePopup.addEventListener('click', function () {
    popup.classList.add('popup-active');
    popup.classList.remove('popup');
});

openPopup.addEventListener('click', function () {
    popup.classList.add('popup');
    popup.classList.remove('popup-active');
})

const popupMenu = document.getElementById('popup-menu'); 
const openMenu = document.getElementById('burgerMenu'); 
const body = document.body;
const menu = document.getElementById('menu').cloneNode(1);

openMenu.addEventListener('click', function() {
    popupMenu.classList.toggle('open');
    openMenu.classList.toggle('active-burger');
    body.classList.toggle('noscroll');
    renderPopup();
})

function renderPopup() {
    popupMenu.appendChild(menu);
}



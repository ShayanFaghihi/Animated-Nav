const openMenuBtn = document.getElementById('openBtn');
const closeMenuBtn = document.getElementById('closeBtn');
const nav = document.getElementById('nav');
const navListItems = document.querySelectorAll('#nav .nav-list__item');
const navListLinks = document.querySelectorAll('#nav .nav-list__link');


openMenuBtn.addEventListener('click', () => {
    menuDisplay('hidden',0);
})

closeMenuBtn.addEventListener('click', () => {
    menuDisplay('visible',-100);
})

navListLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuDisplay('visible',-100);
    })
});

function menuDisplay(overflow,position) {
    document.body.style.overflow = overflow;
    nav.style.transform = `translateX(${position}%)`;
    for(let i = 0; i < navListItems.length; i++) {
        navListItems[i].style.transform = `translateX(${position}%)`;
    }
}
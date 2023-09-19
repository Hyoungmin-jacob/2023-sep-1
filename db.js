const togglebtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const search = document.querySelector('.navbar_search');

togglebtn.addEventListener('click', () => {
menu.classList.toggle('active');
icons.classList.toggle('active');
search.classList.toggle('active');
});




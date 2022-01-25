let button = document.getElementById('menu-btn');

let navigation = document.getElementById('menu');

button.addEventListener('click', function(){ 
    navigation.classList.toggle('display-block');
    button.classList.toggle('header__menu-btn_click');
});
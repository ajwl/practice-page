

var button = document.getElementById('menu-button');
var menu = document.getElementById('menu');
var body = document.querySelector('body');

button.addEventListener(
    "click",
    function(){
        menuAction();
    },
    false
);

var menuAction = function(){
    toggleMenu();
    scrollTop();
};

var toggleMenu = function(){
    if(menu.classList.contains('hide')){
        menu.classList.remove('hide');
    }
    else{
        menu.classList.add('hide');
    }
};

var scrollTop = function(){
    window.scrollTop = 0;
};


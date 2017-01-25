

var button = document.getElementById('menu-button');
var menu = document.getElementById('menu');

button.addEventListener(
    "click",
    function(){
        menuAction();
    },
    false
);

var menuAction = function(){
    toggleMenu();
};

var toggleMenu = function(){
    if(menu.classList.contains('hide')){
        menu.classList.remove('hide');
    }
    else{
        menu.classList.add('hide');
    }
};


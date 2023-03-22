var button = document.getElementById('nav-hamburgger');
var html = document.querySelector('html');

var ariaControl = button.getAttribute('aria-controls');
var nav = document.getElementById(ariaControl);




button.addEventListener('click', function(){
    html.classList.toggle('menu-opened');

    var ariaExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !ariaExpanded);
    nav.setAttribute('aria-expanded', !ariaExpanded);
})
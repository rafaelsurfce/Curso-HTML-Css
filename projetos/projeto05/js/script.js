var body = document.querySelector('body');
body.classList.remove('no-js');
body.classList.add('js')


var menu = new Menu({
    container: '.nav-menu',
    toggleBtn: '.nav-button',
    widthEnabled: 1024
});


var carouselImgs = new Carousel({
    container: '.slides',
    containerSliders: '.show-sliders',
    itens: 'figure',
    btnPrev: '.slides .prev',
    btnNext: '.slides .next',
});

var carouselDepositions = new Carousel({
    container: '.depositions',
    containerSliders: '.show-depositions',
    itens: 'figure',
    btnPrev: '.depositions .prev',
    btnNext: '.depositions .next',
});



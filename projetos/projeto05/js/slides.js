function Carousel(config){
    this.container = typeof config.container === 'string' ? document.querySelector(config.container) : config.container;
    this.containerSliders = typeof config.containerSliders === 'string' ? document.querySelector(config.containerSliders) : config.container;
    this.itens = typeof config.itens === 'string' ? this.containerSliders.querySelectorAll(config.itens) : config.itens;

    this.btnPrev = typeof config.btnPrev === 'string' ? this.container.querySelector(config.btnPrev) : config.btnPrev;
    this.btnNext = typeof config.btnNext === 'string' ? this.container.querySelector(config.btnNext) : config.btnNext;


    var thhis = this;
    var atualSlide = 0;

    init();

    function init(){
        var show = thhis.containerSliders.querySelectorAll('.show');    
        for(element = 0; element < show.length; element++) {
            show[element].classList.remove('show');
        }
        thhis.itens[0].classList.add('show');
        thhis.btnNext.style.display = 'inline-block';
        thhis.btnPrev.style.display = 'block';
        initListeners();
    }

    function initListeners(){
        thhis.btnNext.addEventListener('click', function(){
            atualSlide++;
            showSlide();
        })
        thhis.btnPrev.addEventListener('click', function(){
            atualSlide--;
            showSlide();
        })
    }

    function showSlide(){
        var qtd = thhis.itens.length;
        var slide = atualSlide % qtd;
        slide = Math.abs(slide);
        thhis.containerSliders.querySelector('.show').classList.remove('show');
        thhis.itens[slide].classList.add('show');
    }
}
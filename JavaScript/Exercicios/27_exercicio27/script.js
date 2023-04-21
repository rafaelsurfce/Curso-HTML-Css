
var menu = document.querySelector('.menu');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 50){
        this.document.body.classList.add('fx');
    }
    else{
        this.document.body.classList.remove('fx');
    }
});
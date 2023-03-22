var checkbox = document.getElementById('formulario-check');
var submit = document.getElementById("botton-submit")

submit.disabled = true;


checkbox.addEventListener('change', function(){
    if(this.checked){
        submit.disabled = false;
    }
    else{
        submit.disabled = true;
    }
})
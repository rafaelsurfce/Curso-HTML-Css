

var textArea = document.getElementById('text-mensagem');
var resultado = document.getElementById('resultado');

textArea.addEventListener('input', function(){
    if(this.value.length > (textArea.maxLength - 10)){
        resultado.innerHTML = "Numero de caracteres restantes: " + (textArea.maxLength - this.value.length);
    }
    else{
        resultado.innerHTML = '';
    }


});



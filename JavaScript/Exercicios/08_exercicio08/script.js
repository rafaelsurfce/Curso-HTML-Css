var resultado = document.querySelector('.resultado');

var n1 = parseFloat(prompt("Digite um numero: "));
resultado.innerHTML = n1;

function calcule(operacao){
    var n = parseFloat(prompt("Digite outro numero: "));
   switch(operacao){
    case 'soma':
        resultado.innerHTML = n1 + n;
        break;
    case 'subtracao':
        resultado.innerHTML = n1 - n;
        break;
    case 'multiplicacao':
        resultado.innerHTML = n1 - n;
        break;
    case 'divisao':
        resultado.innerHTML = n1 - n;
        break;
    default:
        resultado.innerHTML = null;
   }
}




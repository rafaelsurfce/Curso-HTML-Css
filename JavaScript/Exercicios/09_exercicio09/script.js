var resultado = document.querySelector('.resultado');

var n1 = parseFloat(prompt("Digite um numero: "));
imprime();

function soma(){
    var n = parseFloat(prompt("Digite outro numero: "));
    n1 += n;
    imprime();
}
function subtracao(){
    var n= parseFloat(prompt("Digite outro numero: "));
    n1 -= n;
    imprime();
}
function multiplicacao(){
    var n= parseFloat(prompt("Digite outro numero: "));
    n1 *= n;
    imprime();
}
function divisao(){
    var n= parseFloat(prompt("Digite outro numero: "));
    n1 /= n;
    imprime();
}


function imprime(){
    resultado.innerHTML = n1;
}






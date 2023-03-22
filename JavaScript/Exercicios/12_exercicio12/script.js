var resultado = document.querySelector('.resultado');

var numeros = new Array(25, 30, 45, 28, 0, 12, 78, 64);

var soma = 0;
for(i = 0; i < numeros.length; i++){
    if((numeros[i] % 2) == 0){
        soma += numeros[i];
    }

}
console.log(soma);
resultado.innerHTML= "Resultado: " + soma;

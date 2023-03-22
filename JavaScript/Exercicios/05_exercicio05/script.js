var numero = parseInt(prompt("Insira um numero: "));

for(var i = 0; i<=1000; i++){
    document.write(numero + " X "+ i + " = "+ (numero * i)+ "<br>");
    if(i % 10 == 0){
        document.write("<hr>");
    }
}

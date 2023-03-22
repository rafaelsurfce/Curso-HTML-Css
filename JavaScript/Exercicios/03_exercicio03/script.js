var n1= prompt("Jogador 1 Digite um numero: ");
var n2= prompt("Jogador 2 Digite um numero: ");


if(n1 == n2){
    alert("Empate!!! Fim de Jogo...");
}
else{
    var sort = parseInt(Math.random()*2);
    if(sort == 0){
        if(n1 < n2){
            alert("Jogador 1 Venceu!!! Fim de jogo...");
        }
        else{
            alert("Jogador 2 Venceu!!! Fim de jogo...");
        }
    }
    else{
        if(n1 > n2){
            alert("Jogador 1 Venceu!!! Fim de jogo...");
        }
        else{
            alert("Jogador 2 Venceu!!! Fim de jogo...");
        }
    }
}
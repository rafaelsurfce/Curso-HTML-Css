var resultado = document.querySelector('.resultado');


calcule();

function calcule(){


    try {
        var comprimento = parseFloat(prompt("Digite a Altura do Retângulo"));
        var largura = parseFloat(prompt("Digite a Largura do Retângulo"));
        resultado.innerHTML = comprimento * largura;
    } catch (error) {
        resultado.innerHTML = '';
        alert("Erro: " + error);
    }




}


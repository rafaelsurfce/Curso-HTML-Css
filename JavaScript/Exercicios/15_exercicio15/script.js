
(function(){
    function calc(altura, peso){
        
        return peso / altura**2;
    }

    function imc(imc){
        if(imc >= 16 && imc <= 16.9){
            return "Muito Baixo o Peso";
        }
        else if(imc >= 17 && imc <= 18.4){
            return "Abaixo do Peso";
        }
        else if(imc >= 18.5 && imc <= 24.9){
            return "Peso Normal";
        }
        else if(imc >= 25 && imc <= 29.9){
            return "Acima do Peso";
        }
        else if(imc >= 30 && imc <= 34.9){
            return "Obesidade Grau 1";
        }
        else if(imc >= 35 && imc <= 40){
            return "Obesidade Grau 2";
        }
        else if(imc > 40){
            return "Obesidade Grau 3";
        }     
    }
    console.log(imc(calc(1.63, 70)));
})();




var resultado = document.getElementById('resultado');



function mostrarHora(){
    var data = new Date();
    
    var hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
    var minutos = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
    var segundos =  data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds(); 
    
    resultado.textContent = hora + ":" + minutos + ":" + segundos;
}

setInterval(function(){
    mostrarHora();
}, 1000);

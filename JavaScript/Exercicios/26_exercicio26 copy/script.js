var display = document.getElementById('display');
var buttonPlay = document.getElementById('button-play');
var buttonPausar = document.getElementById('button-pausar');
var buttonReiniciar = document.getElementById('button-reiniciar');
var pause = document.querySelector('#pause');

display.value = "00:00:00:000";


var timeStampClick;
var timeStampPause;
var timeStampStart;
var intervalo;
var tempoPausado = 0;
var rodando = false;


buttonPlay.addEventListener('click', function iniciar(){
    if(rodando) return;
    timeStampClick = Date.now();
    start();
    rodando = true;
});

buttonPausar.addEventListener('click', function parar(){
    if(timeStampClick === undefined) return;
    if(rodando){
        rodando = false;
        clearInterval(intervalo);
        timeStampPause = Date.now();
        tempoPausado += (timeStampPause-timeStampClick);
        buttonPlay.disabled = true;
        pause.setAttribute('class', 'fas fa-play');
    }
    else{
        rodando = true;
        timeStampClick = Date.now();
        start(tempoPausado);
        pause.setAttribute('class', 'fas fa-pause');
    }
});

buttonReiniciar.addEventListener('click', function zerar(){
    timeStampClick = 0;
    timeStampPause = 0;
    clearInterval(intervalo);
    tempoPausado = 0;
    rodando = false;
    buttonPlay.disabled = false;
    pause.setAttribute('class', 'fas fa-pause');
    display.value = "00:00:00:000";
});




function start(tempoPausado){
    debugger;
    var miliRestante = tempoPausado || 0;
    intervalo = setInterval(function(){
        timeStampStart = Date.now();

        if(((timeStampStart - timeStampClick) + miliRestante) < 1000){
            var miliSegundo = timeStampStart - timeStampClick;
            display.value = '00:00:00:' + miliSegundo;
        }
        else if(((timeStampStart - timeStampClick) + miliRestante) < 60000){
            var segundo = parseInt((timeStampStart - timeStampClick)/1000) < 10 ? '0' + parseInt((timeStampStart - timeStampClick)/1000):parseInt((timeStampStart - timeStampClick)/1000);
            var miliSegundo = (timeStampStart - timeStampClick) - (segundo * 1000);
            display.value = '00:00:'+ segundo +':'+ miliSegundo;
        }
        else if(((timeStampStart - timeStampClick) + miliRestante) < 3600000){
            var minuto = parseInt((timeStampStart - timeStampClick)/60000) < 10 ? '0' + parseInt((timeStampStart - timeStampClick)/60000):parseInt((timeStampStart - timeStampClick)/60000);
            var segundo = parseInt(((timeStampStart - timeStampClick)/1000) - (minuto * 60)) < 10 ? '0' + parseInt(((timeStampStart - timeStampClick)/1000) - (minuto * 60)):parseInt(((timeStampStart - timeStampClick)/1000) - (minuto * 60));
            var miliSegundo = parseInt(timeStampStart - timeStampClick) - (segundo * 1000) - (minuto * 60 * 1000);
            display.value = '00:'+minuto+':'+ segundo +':'+ miliSegundo;
        }
        /*else{
            var hora = parseInt((timeStampStart - timeStampClick)/3600000) < 10 ? '0' + parseInt((timeStampStart - timeStampClick)/3600000):parseInt((timeStampStart - timeStampClick)/3600000);
            var minuto = parseInt((((timeStampStart - timeStampClick)/60000)) - (hora * 60000)) < 10 ? '0' +parseInt((timeStampStart - timeStampClick)/60000):parseInt((timeStampStart - timeStampClick)/60000);
            var segundo = parseInt(((timeStampStart - timeStampClick)/1000) - (minuto * 60 * 60000)) < 10 ? '0' + parseInt((timeStampStart - timeStampClick)/1000):parseInt((timeStampStart - timeStampClick)/1000);
            var miliSegundo = (timeStampStart - timeStampClick) - (segundo * 1000) - (minuto * 60 * 1000 * 60000);
            display.value = hora+':' + minuto+':'+segundo+':'+miliSegundo;
        }*/
    }, 100);
}


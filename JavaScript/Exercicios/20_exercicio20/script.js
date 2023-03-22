var tbody = document.getElementById('table-body');

var submit = document.getElementById('form-submit');

var nomeTarefa = document.getElementById('nomeTarefa');
var dataTarefa = document.getElementById('dataTarefa');
var horaTarefa = document.getElementById('horaTarefa');



submit.addEventListener('click', adicionarTarefa);

submit.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        adicionarTarefa();
    }
});



function adicionarTarefa(){
    
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var tarefa = document.createTextNode(nomeTarefa.value);
    var data = document.createTextNode(dataTarefa.value);
    var hora = document.createTextNode(horaTarefa.value);

    td1.appendChild(tarefa);
    td2.appendChild(data);
    td3.appendChild(hora);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);


    nomeTarefa.value = '';
    dataTarefa.value = '';
    horaTarefa.value = '';

    nomeTarefa.focus();
}
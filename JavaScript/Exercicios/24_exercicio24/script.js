var data = document.getElementById('data');
var botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    data = new Date(data.value);

    console.log(data.getDate()+ 1 + "/" + (data.getMonth()+ 1 + "/" + data.getFullYear());
})
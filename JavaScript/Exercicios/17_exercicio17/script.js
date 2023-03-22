var form = document.querySelector('form').addEventListener('submit', (evento) => {
    if(!document.getElementById('username').value || !document.getElementById('password').value){
        alert("Preencha todos os Campos");
        evento.preventDefault();
    }
});
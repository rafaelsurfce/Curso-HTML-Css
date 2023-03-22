var  usuarios = [
    {
        Nome: 'Rafael', 
        Email: 'rafaelsurfce@alu.ufc.br'
    }, 
    {
        Nome: 'Diego', 
        Email: 'dieggou2@hotmail.com'
    }, 
    {
    Nome: 'Mercia', 
    Email: 'mercialp13@gmail.com'
    }
];
    var msg = '';
    for(var i = 0; i < usuarios.length; i++){
        msg += "<h5> Nome: " + usuarios[i].Nome + "</h5>";
        msg += "<p> Email: " + usuarios[i].Email + "</p>";

    }
document.querySelector('.resultado').innerHTML = msg;




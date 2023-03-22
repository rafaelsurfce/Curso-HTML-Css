for(var i = 1004; i<=2017; i++){
    if((i % 4 === 0) && ((i % 100 !== 0) || (i % 400 === 0))){
        document.write(i+"<br>");
    }
}
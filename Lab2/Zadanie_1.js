/*
Za pomocą liczników wykonaj zdarzenie wyświetlania liczby sekund co 1 sekundę od uruchomienia
 */

var i = 1;

function my()
{
    console.log("Seconds counter" + i);
    i++;

}

var  interval = setInterval(my,1000);
setTimeout(function()
{
    clearInterval(1000);
},2);
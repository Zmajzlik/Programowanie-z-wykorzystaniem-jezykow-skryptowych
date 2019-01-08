/*
Co jedną sekundę pięć razy wyświetlana litera ‘a’ co 10 ms
*/

function show()
{
    for(var i =0; i<5; i++)
    {
        console.log("a");
    }

}

var interval = setInterval(show,1000)

setTimeout(function()
{
    clearInterval(5000);
},5)
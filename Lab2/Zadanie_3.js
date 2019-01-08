/*
CEL ZADANIA:
Dla 30 elementowej tablicy (z alfabetem)
wyświetlid po kolei co 0,5s litery przy czym
jeżeli jest to samogłoska dodad przerwę 2
sekundy (uśpić licznik)
*/

var sleep500 = 25,
    sleep2000 = 2000;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function sleeperFunction(sleep2000)
{
    // opóźnienia czasowe, jeśli sleep500 == spółgłoska, to ustaw opóźnienie na 2000, jesli nie to 500
    setTimeout(function () {
        if (sleep500 == 0 || sleep500 == 4 || sleep500 == 8 || sleep500 == 14 || sleep500 == 20 || sleep500 == 24)
        {
            sleep2000 = 2000;
        } else
        {
            sleep2000 = 500;
        }
        console.log(alphabet[sleep500]);
        sleep500--;
        if (sleep500 == -1)
        {
            return false;
        }else if (sleep500 < alphabet.length)
        {
            sleeperFunction(sleep2000);
        }
    }, sleep2000);
}
sleeperFunction();
var str = '{"Persons":[{"Name":"Artur","LastName":"Ulfig","Age":22},{"Name":"Adam","LastName":"Mitręga","Age":22},{"Name":"Dominik","LastName":"Pezda","Age":"23"}]}';

//parser do JSON
var obj = JSON.parse(str);
console.log("Lista osob:");

//wypisanie z obj (tablica)
for (var i = 0; i < obj.Persons.length; i++)
{
    var next = "";

    if (i == 0) next = "Pierwsza";
    if (i == 1) next = "Druga";
    if (i == 2) next = "Trzecia";

    console.log("Osoba %s:", next)
    console.log("Imie: %s", obj.Persons[i].Name);
    console.log("Nazwisko: %s", obj.Persons[i].LastName);
    console.log("Wiek: %s", obj.Persons[i].Age);
    console.log("");
}
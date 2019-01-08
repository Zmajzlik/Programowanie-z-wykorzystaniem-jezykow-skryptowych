var str = '{"Persons":[{"Name":"John","LastName":"Kowalski","YO":21},{"Name":"David","LastName":"Copperfield","YO":63},{"Name":"Cezary","LastName":"Pazura","YO":"40"}]}';

//parser do JSON
var obj = JSON.parse(str);
console.log("Lista personsów:");

//wypisanie z obj (tablica)
for (var i = 0; i < obj.Persons.length; i++) 
{
   var next = "";

   if (i == 0) next = "Pierwszy";
   if (i == 1) next = "Drugi";
   if (i == 2) next = "Trzeci";
   
   console.log("Persons %s", next)
   console.log("Name:      %s", obj.Persons[i].Name);
   console.log("Last Name: %s", obj.Persons[i].LastName);
   console.log("YO:        %s", obj.Persons[i].YO);
   console.log("");
}
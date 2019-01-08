var str = '{"Persons":[{"Name":"John","LastName":"Kowalski","YO":21},{"Name":"David","LastName":"Copperfield","YO":63},{"Name":"Cezary","LastName":"Pazura","YO":"40"}]}';
var obj = JSON.parse(str);

// dodajemy nowego ziomeczka do listy

obj.Persons.push({
   "Name": "ŚWIEŻAK",
   "LastName": "Borówa",
   "YO": "0.1"
});

for (var i = 0; i < obj.Persons.length; i++) 
{
   var next = "";

   if (i == 0) next = "Pierwszy";
   if (i == 1) next = "Drugi";
   if (i == 2) next = "Trzeci";
   if (i == 3) next = "Czwarty";

   console.log("Ziomek %s", next)
   console.log("Name:      %s", obj.Persons[i].Name);
   console.log("Last Name: %s", obj.Persons[i].LastName);
   console.log("YO:        %s", obj.Persons[i].YO);
   console.log("");
}
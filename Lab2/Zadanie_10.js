var str = '{"Persons":[{"Name":"John","LastName":"Kowalski","YO":21},{"Name":"David","LastName":"Copperfield","YO":63},{"Name":"Cezary","LastName":"Pazura","YO":"40"}]}';


// parse to JSON
var obj = JSON.parse(str);
// write JSON structure
console.log(obj);
// write JSON structure as string
var JSONstr = JSON.stringify(obj);
console.log(JSONstr);
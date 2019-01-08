/*
Stworzyd bazę danych (3 osoby) w zmiennej
opartej o strukturę JSON. (zmienna tekstowy)
*/
var str = '{"to1":{ "imie":"Artur", "nazwisko":"Kradziej", "wiek":22},"to2":{ "imie":"Konrad", "nazwisko":"Koroń", "wiek":"39393"},"to3":{ "imie":"Papryg", "nazwisko":"Dupanek", "wiek":"NULL"}}';
// parsowanie do JSON -> wynik w strukturze JSON
var obj = JSON.parse(str);
console.log(obj);
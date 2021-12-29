// Solving problems using array functions on rest countries data.Print the following details name, capital, flag using forEach function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.onload = function () {
   let data = JSON.parse(xhr.response);
 data.forEach((data)=>{
console.log(`Name: ${data.name},Capital: ${data.capital}`);
var a=data.flags.png;
console.log('%c ','font-size:200px;background: url('+ a +') no-repeat;');
 }
 )
};
// Output:Sample
// Name: Afghanistan,Capital: Kabul
// foreach.js:10 Name: Åland Islands,Capital: Mariehamn
// foreach.js:10 Name: Albania,Capital: Tirana
// foreach.js:10 Name: Algeria,Capital: Algiers
// foreach.js:10 Name: American Samoa,Capital: Pago Pago
// foreach.js:10 Name: Andorra,Capital: Andorra la Vella
// foreach.js:10 Name: Angola,Capital: Luanda
// foreach.js:10 Name: Anguilla,Capital: The Valley
// foreach.js:10 Name: Antarctica,Capital: undefined
// foreach.js:10 Name: Antigua and Barbuda,Capital: Saint John's
// foreach.js:10 Name: Argentina,Capital: Buenos Aires
// foreach.js:10 Name: Armenia,Capital: Yerevan
// foreach.js:10 Name: Aruba,Capital: Oranjestad
// foreach.js:10 Name: Australia,Capital: Canberra
// foreach.js:10 Name: Austria,Capital: Vienna
// foreach.js:10 Name: Azerbaijan,Capital: Baku
// foreach.js:10 Name: Bahamas,Capital: Nassau
// foreach.js:10 Name: Bahrain,Capital: Manama
// foreach.js:10 Name: Bangladesh,Capital: Dhaka
// foreach.js:10 Name: Barbados,Capital: Bridgetown
// foreach.js:10 Name: Belarus,Capital: Minsk
// foreach.js:10 Name: Belgium,Capital: Brussels
// foreach.js:10 Name: Belize,Capital: Belmopan
// foreach.js:10 Name: Benin,Capital: Porto-Novo
// foreach.js:10 Name: Bermuda,Capital: Hamilton

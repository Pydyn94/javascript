'use strict';
var names = ["Grzegorz", "Emilia", "Krystian"];

names[3] = "Tania";
names[2] = "Ela";

console.log(names);


//dodaje do tablicy
names.push("Geralt");
console.log(names);

//usuwnaie elementow z tablicy
names.pop();
names.pop();
console.log(names);

console.log(names.unshift("Robert"));
console.log(names);

console.log(names.shift());
console.log(names);

//dlugosc
console.log(names.length);

console.log(names.join(" :) "));

//odwrocenie kolejnosci tablicy
console.log(names.reverse());

//sortowanie alfabetyczne
var liczby = ["dwa", "aaaa", "zero"];
console.log(liczby.sort());

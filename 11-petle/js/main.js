'use strict';

//for

for (var i = 10; i > 0; i--) {
    console.log(i);
}

for (var i = 0; i <= 5; i++) {
    console.log(i);
}


//for each *inna wersja

var tablica = ["Krystian", "Monika", "Danuta", "Agata"];

for (i = 0; i < tablica.length; i++) {
    console.log("Element z indexem: " + i + " ma wartosć " + tablica[i]);
}

//na tablicach tylko
tablica.forEach(function (element, index) {
    console.log("Element z Indexem: " + index + " ma wartość " + element);
});


//while
var it = 0;
while (it <= 10) {
    console.log(it);
    it++;
}

//do while

var iter = 8;
do {
    console.log(iter);
    iter++;
    //    console.log(iter);
}
while (iter <= 10);


//break - bezwarunkowe przerwanie pętli
var a = 0;
while (a < 10) {
    console.log(++a);
    if (a == 5) {
        break;
    }
}

//contiune

for (var b = 0; b < 15; ++b) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }
    console.log("---");
}

'use strict';
//if else
var wzrostMateusza = 190;
var wzrostOlgi = 190;
if (wzrostOlgi < wzrostMateusza) {
    console.log("Olga jest niższa");
} else {
    console.log("Olga jet wyższa");
}


//if else if
if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyzsza");
} else if (wzrostOlgi == wzrostMateusza) {
    console.log("Równi");
} else {
    console.log("Olga jest niższa");
}

//switch
var kolor = "zielony";

switch (kolor) {
    case "czerwony":
        console.log("Kolor czerwony")
        break;
    case "zielony":
        console.log("Kolor zielony")
        break;
    case "niebieski":
        console.log("Kolor niebieski")
        break;
    default:
        console.log("Inny kolor")
}

'use strict '

function odwrocString(parametr) {
    /*  pobranie parametru funkcji */
    var tekst = parametr;
    
    /* zapis stringu do tablicy*/
    var string = [];

    /* pętla wycinające kolejne znaki ze stringu i zapisujące je do tablicy*/
    for (var i = 0; i < tekst.length; i++) {
        string.push(tekst.charAt(i));
        }

    /* odwrócenie kolejności elementów w tablicy */
    string.reverse();
    
    /* zapisanie tablicy do stringa - coś mi nie działa??? */
    string.toString();
    console.log(string.join(""));
}

odwrocString('Akademia108');
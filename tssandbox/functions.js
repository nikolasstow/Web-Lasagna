"use strict";
var numbersApp = {};
numbersApp.words = {
    numString: ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
    tensStrings: ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
    suffix: ["", "Hundred", "Thousand,", "Million,", "Billion,", "Trillion,"]
};
numbersApp.numberToWord = function (digit, position) {
    var mod = position % 3;
    var suffix = numbersApp.words.suffix[(position < 2 || mod == 1 ? 0 : (mod == 0 ? (position / 3) + 1 : 1))];
    return (digit == 0 ? "" : (mod != 1 ? numbersApp.words.numString[digit] + " " : numbersApp.words.tensStrings[digit])) + suffix;
};
numbersApp.numTranslator = function (num) {
    var asString = String(num).split("").reverse();
    var numberWord = "";
    for (var position in asString) {
        var digit = Number(asString[position]);
        numberWord = numbersApp.numberToWord(digit, position) + " " + numberWord;
    }
    return numberWord;
};
console.log(numbersApp.numTranslator(928340234));

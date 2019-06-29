let numbersApp: any = {};

numbersApp.words = {
    numString: ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],
    tensStrings: ["","Ten","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"],
    suffix: ["","Hundred","Thousand,","Million,","Billion,","Trillion,"]
}

numbersApp.numberToWord = function (digit: number, position: number) {
    let mod: number = position % 3;
    let suffix: string = numbersApp.words.suffix[(position < 2 || mod == 1 ? 0 : (mod == 0 ? (position / 3) + 1 : 1))];
    /*
        NOTE: When describing position, I'm talking right to left: from the smallest number, to the largest (9,876,543,210)
        Positions start at 0. Including the suffix array (Hopefully that should be obvious)
        
        mod is the number's position inbetween commas `'`
            ex: if 9,876,543,210
                0, 3, and 9 have a position of 0
                1, 4, and 7 have a position of 1
                2, 5, and 8 have a position of 2
        
        if the number's position within the entire number is less than two, it needs no suffix
        or if mod is 1, it also needs no suffix
            ex: in the number Three Million, Three Hundred Sixty Four Thousand, Two Hundred Fourty Eight (3,364,248)
                the suffixes are 3(Million), 3(Hundred) 6(!) 4(Thousand), 2(Hundred) 4(!) 8(!)
                
                notice that Fourty (*,***,*4*) and Eight (*,***,**8) require no suffix. They have positions less than 2
                note that Sixty (*,*6*,***) also requires no suffix. It's mod position is 1
            
            If a digit doesn't need a suffix, it returns 0 for suffix[0] which equals "" an empty string
            
        else if mod is 0, divide it's position by 3, and add 1 to get the suffix position in the suffix array
            ex: A number with a position of 3, the suffix should be "Thousand"
                mod = 3 % 3 = 0
                3 / 3 = 1
                1 + 1 = 2
                suffix[2] = "Thousand"
            ex: A number with a position of 6, the suffix should be "Million"
                mod = 6 % 3 = 0
                6 / 3 = 2
                2 + 1 = 3
                suffix[3] = "Million"
        
        If none of the above, the mod must be 2 and it's suffix should be "Hundred"
            I really hope I don't have to explain this.
    */
    return (digit == 0 ? "" : (mod != 1 ? numbersApp.words.numString[digit] + " " : numbersApp.words.tensStrings[digit])) + suffix;
}

numbersApp.numTranslator = function (num: number) {
    let asString: Array<string> = String(num).split("").reverse(); // Reversed Array of Each Digit (As Strings)
    let numberWord: string = "";
    for (let position in asString) {
        let digit: number = Number(asString[position]);
        numberWord = numbersApp.numberToWord(digit, position) + " " + numberWord;
    }
    return numberWord;
}

console.log(numbersApp.numTranslator(928340234));
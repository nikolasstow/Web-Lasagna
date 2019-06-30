var varname = 10;
var bln = true;
var fullName = "Nikolas Stow";
var message = 'This is my message';
message = "Hello " + fullName + ", How are you?";
console.log(message);
var lst = [1, 2, 3, 4];
var lst2 = [1, 2, 3, 4, 5];
var x = ['hello', 20]; //Tuple
var Color;
(function (Color) {
    Color["Red"] = "FF0000";
    Color["Green"] = "00FF00";
    Color["Blue"] = "0000FF";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var a = "A";
var s = a;
console.log(s);

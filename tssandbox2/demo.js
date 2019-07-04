function Add(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(Add(10, 20, 30));
function Add2(n) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var x = 0;
    for (var i = 0; i < numbers.length; i++) {
        x += numbers[i];
    }
    return x;
}
console.log(Add2(1, 2, 3, 4, 5, 7));
var sub;
sub = function (x, y) {
    return x - y;
};

var Hello = /** @class */ (function () {
    function Hello() {
        this.SayHello = function () {
            return "Hello " + this.FirstName + " " + this.LastName;
        };
    }
    return Hello;
}());
function sayHello(firstName, lastName) {
    var message = "Hello ";
    message += firstName + " " + lastName;
    return message;
}
var h = new Hello();
h.FirstName = "Nikolas";
h.LastName = "Stow";
console.log(h.SayHello());

class Hello {
    FirstName!: string;
    LastName!: string;
    SayHello = function (this: Hello) : string {
        return "Hello " + this.FirstName + " " + this.LastName;
    }
}

function sayHello (firstName: string, lastName: string): string {
    var message: string = "Hello ";
    message += firstName + " " + lastName;
    return message;
}

var h: Hello = new Hello();
h.FirstName = "Nikolas";
h.LastName = "Stow";
console.log(h.SayHello());
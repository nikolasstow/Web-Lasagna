var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, dateOfBirth) {
        this.testVar = false;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.DateOfBirth = dateOfBirth;
    }
    Object.defineProperty(Person.prototype, "FullName", {
        get: function () {
            return this.FirstName + " " + this.LastName;
        },
        set: function (name) {
            // set up validation
            if (name.split(" ").length != 2)
                throw "Invalid Name";
            this.FirstName = name.split(' ')[0];
            this.LastName = name.split(' ')[1];
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.show = function () {
        console.log(this);
    };
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(FirstName, LastName, DateOfBirth) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = DateOfBirth;
    }
    Person2.prototype.show = function () {
        console.log(this);
    };
    return Person2;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, dateOfBirth, departmentName, salary) {
        var _this = _super.call(this, firstName, lastName, dateOfBirth) || this;
        _this.DepartmentName = departmentName;
        _this.Salary = salary;
        return _this;
    }
    Employee.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log(this.FullName);
    };
    return Employee;
}(Person));
var p = new Employee("Nikolas", "Stow", new Date(1997, 1, 11), "Music", 300001);
p.FullName = "Jesse Lacey";
p.show();
var e;
if (p instanceof Employee)
    e = p;
/*--------------------------------------*/
var Figure = /** @class */ (function () {
    function Figure(Dimension) {
        this.Dimension = Dimension;
    }
    return Figure;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.Area = function () {
        return Math.pow(this.Dimension, 2);
    };
    Square.prototype.Perimeter = function () {
        return 4 * this.Dimension;
    };
    return Square;
}(Figure));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.Area = function () {
        return Math.PI * Math.pow(this.Dimension, 2);
    };
    Circle.prototype.Perimeter = function () {
        return 2 * Math.PI * this.Dimension;
    };
    return Circle;
}(Figure));
var square = new Square(2);
console.log(square.Area());
var circle = new Circle(2);
console.log(circle.Perimeter());

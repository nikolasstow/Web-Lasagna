class Person {
    FirstName: string;
    LastName: string;
    DateOfBirth: Date;
    testVar: boolean = false;
    
    constructor(firstName: string, lastName: string, dateOfBirth: Date) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.DateOfBirth = dateOfBirth;
    }
    
    public get FullName():string {
        return this.FirstName + " " + this.LastName;
    }
    
    public set FullName(name: string) {
        // set up validation
        if(name.split(" ").length != 2) throw "Invalid Name";
        this.FirstName = name.split(' ')[0];
        this.LastName = name.split(' ')[1];
    }
    
    show() {
        console.log(this)
    }
}

class Person2 {
    constructor(private FirstName: string, private LastName: string, private DateOfBirth: Date) {
    }
    show() {
        console.log(this)
    }
}

class Employee extends Person {
    DepartmentName: string;
    Salary: number;
    constructor(firstName: string, lastName: string, dateOfBirth: Date, departmentName: string, salary: number) {
        super(firstName, lastName, dateOfBirth);
        this.DepartmentName = departmentName;
        this.Salary = salary;
    }
    show() {
        super.show();
        console.log(this.FullName);
    }
}

let p:Person = new Employee("Nikolas","Stow", new Date(1997, 1, 11), "Music", 300001);
p.FullName = "Jesse Lacey";
p.show();

let e: Employee;

if (p instanceof Employee) e = p as Employee;

/*--------------------------------------*/

abstract class Figure {
    constructor(protected Dimension: number) {}
    public abstract Area(): number;
    public abstract Perimeter(): number;
}

class Square extends Figure {
    Area(): number {
        return Math.pow(this.Dimension, 2);
    }
    Perimeter(): number {
        return 4 * this.Dimension;
    }
}

class Circle extends Figure {
    Area(): number {
        return Math.PI * Math.pow(this.Dimension, 2);
    }
    Perimeter(): number {
        return 2 * Math.PI * this.Dimension;
    }
}

let square: Figure = new Square(2);
console.log(square.Area());

let circle: Figure = new Circle(2);
console.log(circle.Perimeter());
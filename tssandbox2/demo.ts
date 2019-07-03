interface IPoint {
    X: number;
    Y: number;
    Z?: number;
    distanceFromOrigin() : number;
    distanceFromPoint(point: IPoint): number;
}

class Point implements IPoint {
    X: number;
    Y: number;
    constructor(x:number, y:number) {
        this.X = x;
        this.Y = y;
    }
    distanceFromOrigin(): number {
        return Math.sqrt(Math.pow(this.X,2) + Math.pow(this.Y,2));
    }
    distanceFromPoint(point: IPoint): number {
         return Math.sqrt(Math.pow(point.X - this.X,2) + Math.pow(point.Y - this.Y,2));
    }
}

let pt1: Point = new Point(10,20);
let pt2: Point = new Point(234,54);

console.log(pt1.distanceFromOrigin());
console.log(pt1.distanceFromPoint(pt2));

interface IMath {
    (n1: number, n2: number): number;
}

let add: IMath = function (a,b) {
    return b + a;
}

console.log(add(1,2));

class Demo {
    static CalculateAndPrint(m: IMath) {
        console.log(m(10,20));
    }
}

Demo.CalculateAndPrint(add);
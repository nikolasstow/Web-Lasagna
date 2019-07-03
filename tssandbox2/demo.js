var Point = /** @class */ (function () {
    function Point(x, y) {
        this.X = x;
        this.Y = y;
    }
    Point.prototype.distanceFromOrigin = function () {
        return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
    };
    Point.prototype.distanceFromPoint = function (point) {
        return Math.sqrt(Math.pow(point.X - this.X, 2) + Math.pow(point.Y - this.Y, 2));
    };
    return Point;
}());
var pt1 = new Point(10, 20);
var pt2 = new Point(234, 54);
console.log(pt1.distanceFromOrigin());
console.log(pt1.distanceFromPoint(pt2));
var add = function (a, b) {
    return b + a;
};
console.log(add(1, 2));
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.CalculateAndPrint = function (m) {
        console.log(m(10, 20));
    };
    return Demo;
}());
Demo.CalculateAndPrint(add);

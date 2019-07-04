"use strict";
///<reference path="IPoint.ts"/>
var MyExamples;
(function (MyExamples) {
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.distanceFromOrigin = function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        };
        return Point;
    }());
    MyExamples.Point = Point;
})(MyExamples || (MyExamples = {}));
///<reference path="IPoint.ts"/>
///<reference path="Point.ts"/>
var MyDemo;
(function (MyDemo) {
    var pt = new MyExamples.Point(10, 2);
    console.log(pt.distanceFromOrigin());
})(MyDemo || (MyDemo = {}));

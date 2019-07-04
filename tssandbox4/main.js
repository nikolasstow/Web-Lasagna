"use strict";
///<reference path="IPoint.ts"/>
///<reference path="Point.ts"/>
var MyDemo;
(function (MyDemo) {
    var pt = new MyExamples.Point(10, 2);
    console.log(pt.distanceFromOrigin());
})(MyDemo || (MyDemo = {}));

///<reference path="IPoint.ts"/>
///<reference path="Point.ts"/>

namespace MyDemo {
    let pt: MyExamples.IPoint = new MyExamples.Point(10,2);
    console.log(pt.distanceFromOrigin());
}
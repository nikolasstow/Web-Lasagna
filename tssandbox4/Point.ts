///<reference path="IPoint.ts"/>

namespace MyExamples {
    export class Point implements IPoint {
        x: number;    
        y: number;
        constructor (x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        distanceFromOrigin(): number {
            return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        }
    }
}
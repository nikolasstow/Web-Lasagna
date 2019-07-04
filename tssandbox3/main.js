//import { IPoint, Point } from "./Point";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./Point"], function (require, exports, MyApp) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MyApp = __importStar(MyApp);
    var pt = new MyApp.default(10, 20);
    console.log(pt.distanceFromOrigin());
});

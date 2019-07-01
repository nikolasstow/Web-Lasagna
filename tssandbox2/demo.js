var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var input = [1, 2];
//let first:number = input[0];
//let second:number = input[1];
var first = input[0], second = input[1];
//console.log(first + " " + second);
var _a = [1, 2, 3, 4, 5], n1 = _a[0], n2 = _a[1], rest = _a.slice(2);
//console.log(n1, rest);
var m1 = [2, 3, 4, 5][0];
//console.log(m1);
var _b = [1, 2, 3, 4], m2 = _b[2], m3 = _b[3];
//console.log(m2,m3);
var _c = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2017-07-01') || [0, 0, 0, 0], totalDate = _c[0], year = _c[1], month = _c[2], day = _c[3];
//console.log(totalDate,year,month,day);
var ob = {
    a: "foo",
    b: 12,
    c: "bar"
};
var A = ob.a, B = ob.b;
//console.log(A,B);
var a = ob.a, rest1 = __rest(ob, ["a"]);
//console.log(rest1);
var user = {
    department: "DP1",
    name: "NikolasStow",
    favoriteMusician: {
        first: {
            name: "Jesse"
        },
        second: {
            name: "Lacey"
        }
    },
    hobbies: ["Music", "Programming"]
};
var _d = user.favoriteMusician, First = _d.first, Second = _d.second, _e = user.hobbies, hob1 = _e[0], hob2 = _e[1];
function foo(p1) {
    var _a = p1.a, a = _a === void 0 ? "" : _a, _b = p1.b, b = _b === void 0 ? 100 : _b;
    //console.log(a,b);
}
foo({ a: "A", b: 12 });
foo({});
function foo1(_a) {
    var _b = _a === void 0 ? { c: "", d: 0 } : _a, c = _b.c, d = _b.d;
    //console.log(c,d);
}
foo1();
function foo2(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.e, e = _c === void 0 ? "a" : _c, _d = _b.f, f = _d === void 0 ? 0 : _d;
    //console.log(e,f);
}
foo2({ e: "b" });
foo2();
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a12 = [0].concat(a1, a2, [7]);
//console.log(a12);
var obs1 = { p1: "p1", p2: 10, p3: true };
var obs2 = __assign({}, obs1, { p4: 100 });
console.log(obs2);

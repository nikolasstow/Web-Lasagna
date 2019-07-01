let input = [1,2];
//let first:number = input[0];
//let second:number = input[1];
let [first, second] = input;
//console.log(first + " " + second);

let [n1,n2,...rest] = [1, 2, 3, 4, 5];
//console.log(n1, rest);

let [m1] = [2,3,4,5];
//console.log(m1);

let [,,m2,m3] = [1,2,3,4];
//console.log(m2,m3);

let [totalDate, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2017-07-01') || [0,0,0,0];
//console.log(totalDate,year,month,day);

let ob = {
    a: "foo",
    b: 12,
    c: "bar"
}

let { a:A, b:B } = ob;
//console.log(A,B);

let {a,...rest1} = ob;
//console.log(rest1);

let user = {
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
    hobbies : ["Music","Programming"]
};

let { favoriteMusician: { first: First, second: Second }, hobbies: [hob1, hob2] } = user;
//console.log(hob1);

type C = {a?:string, b?:number};

function foo(p1: C) {
    let {a="",b=100} = p1;
    //console.log(a,b);
}

foo({a: "A",b: 12});
foo({});

function foo1({ c, d } = { c: "", d: 0}) {
    //console.log(c,d);
}

foo1();

function foo2({e="a", f=0} = {}) {
    //console.log(e,f);
}

foo2({e: "b"});
foo2();

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

let a12 = [0, ...a1, ...a2, 7];
//console.log(a12);

let obs1 = {p1:"p1", p2:10, p3:true};
let obs2 = {...obs1, p4: 100};

console.log(obs2);
function Add(a: number, b: number, c: number = 0) {
    return a + b + c;
}

console.log(Add(10,20,30));

function Add2 (n:number,...numbers: number[]) {
    let x: number = 0;
    for (var i = 0; i <numbers.length; i++) {
        x += numbers[i];
    }
    return x;
}

console.log(Add2(1,2,3,4,5,7));

let sub: (x: number, y: number) => number;
sub = function (x,y) {
    return x - y;
}

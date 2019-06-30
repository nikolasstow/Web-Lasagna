let varname: number = 10;
let bln: boolean = true;
let fullName: string = "Nikolas Stow";
let message: string = 'This is my message';
message = `Hello ${fullName}, How are you?`;

console.log(message);

let lst: number[]=[1,2,3,4];
let lst2: ReadonlyArray<number> = [1,2,3,4,5];

let x: [string, number] = ['hello',20]; //Tuple

enum Color { Red="FF0000", Green="00FF00", Blue="0000FF" };
let c: Color = Color.Green;
console.log(c);

let a: any = "A";
let s: number = <number>a;

console.log(s);
/*

Maths Object
The JavaScript Math object allows you to perform mathematical tasks on numbers.

Example:-
Math.PI;	
The Math object is static.
All methods and properties can be used without creating a Math object first.
Math Properties(Constants):-
The syntax for any Math property is : Math.property
JavaScript provides 8 mathematical constants that can be accessed as Math properties. 

*/

/*

Example:-

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.LOG2     // returns base 2 logarithm of E
Math.LOG10    // returns base 10 logarithm of E
Math Methods
The syntax for Math any methods is : Math.method(number)

*/
//Math.E

let math1 = Math.E
console.log(math1);

//Math.PI

let math2 = Math.PI
console.log(math2);

//Math.round():-

//Math.round(x) returns the nearest integer.
//Example:-

let math3 = Math.round(10.9)
console.log(math3);

		
//Math.ceil():-

//Math.ceil(x) returns the value of x rounded up to its nearest integer.
//Example:-

let math4 = Math.ceil(10.1)
console.log(math4);

	
//Math.floor():-

//Math.floor(x) returns the value of x rounded down to its nearest integer.
//Example:-

let math5  = Math.floor(-10.9)
console.log(math5);


//Math.trunc():-

//Math.trunc(x) returns the integer part of x.
//Example:-

let math6 = Math.trunc(-1222.99)
console.log(math6);

		

//Math.sign():-
//Math.sign(x) returns  if x is negative, null or positive.
//Example:-

let math7  = Math.sign(129059)
console.log(math7);

	

//Math.pow():-

//Math.pow(x, y) returns the value of x to the power of y.
//Example:-

let math8 = Math.pow(3 , 3)
console.log(math8);
		
//Math.sqrt():-

//Math.sqrt(x) returns the square root of x.
//Example:-

let math9 = Math.sqrt(1024)
console.log(math9);

//Math.abs():-

//Math.abs(x) returns the absolute (positive) value of x.
//Example:-

let math10  = Math.abs(20);
console.log(math10);

//Math.min() and Math.max():-

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
//Example:-

let math11  = Math.min(101 , -20 , 60  , 87  , 50);
let math12  = Math.max(101 , 20 , 60  , 87  , 50);
console.log(math11);
console.log(math12);

		

//Math.random():-

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).

//Example:-

let math13  = Math.random()
console.log(math13);

//Math.sin():-

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.

//Example:-

let math14 = Math.sin(30*3.14/180)	
console.log(math14);	

//Math.cos():-

//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.

//Example:-

let math15 = Math.cos(60*3.14/180);
console.log(math15);


//Math.log():-

//Math.log(x) returns the natural logarithm of x.
//The natural logarithm returns the time needed to reach a certain level of growth.
//Example:-

let math16 = Math.log2(15.27)
console.log(math16);
	

//Math.log2():-

//Math.log2(x) returns the base 2 logarithm of x.
//Example:-

		

//Math.log10():-

//Math.log10(x) returns the base 10 logarithm of x.
//Example:-

		
	
// {
// 	{
//     let i = 1;
//     let a = 0;
//     let n = 5;
//     let b = 1;
//     let c;
//     console.log("Fibonacci sequence:");
//     while (i<=n)
//     {
// 			c = a+b;
// 			a = b;
// 			b = c;
// 			console.log(a);
//         i++;
//     }
// }
// }

// {
// 	let n = 6;
// 	let fact = 1;
// 	let i;
// 	console.log("Factorial number");
// 	for (i = 1; i <= n; i++) {
// 			fact = fact * i;
// 	}
// 	console.log(fact);
// }

// {
// {
//     for (let i = 1; i <= 10; i++) {
//         if (i % 2 != 0) {
//             continue;
//         }
//         document.write(i);
//     }
// }
// }


// {
//     var i = 1;
//     var j = 1;
//      while (i <= 10) {
// 			 j = j*i;
// 			 i++;
// 			 document.write(j + "<br>");
//      }
// }

// 1*1  1
// 1*2  2
// 1*2*3  6
// 1*2*3*4  24
// 1*2*3*4*5 120
// 1*2*3*4*5*6 720

//❖ while / do-while / for Program

// Q - 1

// {
//   let a = 10

//   while (a > 0) {
//     document.write(a + "\t")
//     a--
//   }
//   document.write("<br>")
// }

// {
//   let a = 10

//   do {
//     document.write(a + "\t")
//     a--
//   }
//   while (a > 0)
//   document.write("<br>")
// }

// {
//   let a = 10

//   for (a; a > 0; a--)
//     document.write(a + "\t")
//   document.write("<br>")
// }

// Q - 2

//{
//   let add = 0
//   let b = 1

//   while (b <= 10) {
//     add += b
//     b++
//   }
//   document.write(add + "<br>")
// }

// {
//   let add = 0
//   let b = 1

//   do {
//     document.write(b + "<br>")
//     add += b
//     b++
//   }
//   while (b <= 10)
//   document.write(add + "<br>")
// }

// {
//   let add = 0
//   let b = 1

//   for (b; b <= 10; b++)
//   {
//     add += b
//   }
//   document.write(add + "\t")
// }

// Q - 3

// {
//   let t = prompt();
//   c = prompt();

//   while (c <= 10) 
//  {
//     document.write(c * t + "<br>");
//     c++;
//   }
// }

// {
//   let t = prompt();
//   c = prompt();

//   do {
//     document.write(c * t + "<br>");
//     c++;
//   }
//   while (c <= 10)
// }

// {
//   let t = prompt();
//   c = prompt();

//   for (c = 1; c <= 10; c++)
// {
//     document.write(c * t + "<br>");
//   }
// }

// Q - 4

// {
//   let Num = 50;
//   let guessCount = 0;
//   let guess = 5;

//   while (guessCount < guess) 
//   {
//     let user = prompt("Enter a number between 1 and 100");
//     guessCount++;

//     if (user == Num) 
//     {
//       alert(
//         "Congratulations! You guess the number"
//       );
//       break;
//     }

//     if (user > Num) 
//     {
//       alert("guess is too high. Try again.");
//     } 

//     else if (user < Num) 
//     {
//       alert("guess is too low. Try again.");
//     }

//     if (guessCount == guess) 
//     {
//       alert(
//         "Sorry, your guess limit over.");
//     }
//   }
// }

// Q - 5

{
  const num = prompt();
  let n1 = 0
  n2 = 1
  n3 = 1

  console.log('Fibonacci Series:');
  console.log(n1);
  console.log(n2);

  n3 = n1 + n2;

  while (n3 <= num) {

    console.log(n3);

    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
  }
}

// {
//   const num = prompt();
//   let n1 = 0;
//   let n2 = 1;
//   let n3 = 1;

//   console.log('Fibonacci Series:');
//   console.log(n1);
//   console.log(n2);

//   do {
//     n3 = n1 + n2;
//     console.log(n3);

//     n1 = n2;
//     n2 = n3;

//   }
//   while ((n3 <= num) && (n3 = n1 + n2));

// }

// {
//   const num = prompt();
//   let n1 = 0;
//   let n2 = 1;
//   let n3;

//   console.log('Fibonacci Series:');
//   console.log(n1);
//   console.log(n2);

//   for (n3 = n1 + n2; n3 <= num;
//     console.log(n3), n1 = n2, n2 = n3, n3 = n1 + n2) {

//   }

// }

// Q - 6

// {
//   let n = prompt()
//   d = 1, fact = 1

//   while (d <= n) {
//     fact = fact * d
//     d++
//   }
//   console.log(fact)
// }

// {
//   let n = prompt();
//   let d = 1, fact = 1;

//   do {
//     fact = fact * d;
//     d++;
//   } 
//   while (d <= n);

//   console.log(fact);
// }

// {
//   let n = prompt();
//   let fact = 1;

// for (let d = 1; d <= n; fact *= d, d++) {

// }
// console.log(fact);
// }


// Q - 7


// Q - 8

// {
//   let e = prompt()
//   power = prompt()
//   f = 1;
//   g = 0;

//   while (g < power) {
//     f = f * e;
//     g++;
//   }
//   console.log(f);
// }

// {
//   let e = prompt();
//   let power = prompt();
//   let f = 1;

//   for (let g = 0; g < power; f *= e, g++) {
//   }

//   console.log(f);
// }

// {
//   let e = prompt();
//   let power = prompt();
//   let f = 1;
//   let g = 0;

//   do {
//     f = f * e;
//     g++;
//   } 
//   while (g < power);

//   console.log(f);
// }

// Q - 9

// {
//   let h = prompt()
//   let i = 1

//   while (i <= h) {
//     let j = 1;

//     while (j <= i) {
//       document.write("* ");
//       j++;
//     }
//     document.write("<br>");
//     i++;
//   }
// }

// {
//   let h = prompt();
//   let i = 1;

//   do {
//     let j = 1;

//     do {
//       document.write("* ");
//       j++;
//     }

//     while (j <= i);

//     document.write("<br>");
//     i++;
//   }
//   while (i <= h);
// }

// {
//   let h = prompt();

//   for (let i = 1; i <= h; document.write("<br>"), i++) {
//     for (let j = 1; j <= i; document.write("* "), j++);
//   }

// }

// ❖ break statement

// Q - 10

// {
//   let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
//   let k = 35;

//   for (let l = 0; l < arr.length; l++) {
//     if (arr[l] === k) {
//       document.write("Number found at index : ", l + "<br>");
//       break;
//     }
//   }
// }

// Q - 11

// {
//   let m = prompt();
//   while (true) {
//     if (m % 2 !== 0) {
//       document.write(`The First Odd Num Is : ${m}` + "<br>");
//       break;
//     }
//     m++;
//   }
// }

// Q - 12

// {
//   let n = 5
//   let o = 2 
//   for (o = 2; o < n; o++) {
//     if (n % o === 0) {
//       document.write(n + " Is Not A Prime..." + "<br>");
//       break;
//     }
//   }

//   if (o === n) {
//     document.write(n + " Is A Prime...." + "<br>");
//   }

// }

// Q -13

// {
// let userInput;

// while (true) {
//   userInput = prompt("Enter a number (type 'exit' to stop loop):");

//   if (userInput === "exit") {
//     document.write("Exiting the loop based on user input." + "<br>");
//     break;
//   }

//   document.write("You entered: " + userInput + "<br>");
// }

//   let sum = 0, num;

//    while(true) {

//     num = parseInt(prompt('Enter a number: '));

//     if(num < 0) {
//         break;
//     }


//     sum += num;

// }
// console.log(`The sum is ${sum}.`);
// }

// ❖ continue statement

// Q - 14

// {
//     let p = 1

//     for (p=1; p <= 20; p++)
//     {
//         if (p % 2 !== 0)
//         {
//             continue;
//         }
//         document.write(p + "<br>")
//     }
// }

// Q - 15

// {
//   let q = 1;

//   while (q <= 15) {
//     if (q % 3 === 0) {
//       q++;
//       continue;
//     }

//     document.write(q + "<br>");
//     q++;
//   }
// }

// Q -16

// {
//     let r = prompt('Enter The Starting Num');
//     let s = prompt('Enter The Ending Num');
//     let t;
//     for(t = r; t <= s; t++)
//     {
//         if(t % 2 !== 0)
//         {
//             continue;
//         }
//         document.write(t + "<br>")
//     }
// }

// Q - 17

//  {
//   let u = 1;

//   while (u <= 100) {
//     if (u % 5 === 0) {
//       u++;
//       continue;
//     }

//     console.log(u);
//     u++;
//   }
// }  


// const ani = (value) => {
//   for (let a = value; a > 0; a--) {
//     let semstring = "";
//     for (let b = 1; b < a; b++) {
//       semstring += " ";
//     }
//     for (let c = 0; c <= value - a; c++) {
//       semstring += "*";
//     }
//     document.write(semstring + "<br>");
//   }
// }
// ani(15)

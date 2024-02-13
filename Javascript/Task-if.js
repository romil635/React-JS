/* Q - 1 */

var a = 22

if (a % 2 == 0) {
    document.write("A Num Is Even")
}
else {
    document.write("A Num Is Odd")
}

/* Q - 2 */

// var c = prompt()
// var d =prompt()

// if(c < d){
//     console.log("D Num Is Big: " + d)
// }

// else {
//     console.log("C Num Is Small: " + c)
// }

/* Q - 4 */

// var mark = prompt()

// if (mark <= 35) {
//     console.log("failed")
// }

// else if (mark >= 36 && mark <= 55) {
//     console.log("D grade")
// }

// else if (mark >= 56 && mark <= 59) {
//     console.log("C grad grade")
// }

// else if (mark >= 60 && mark <= 80) {
//     console.log("B grade")
// }
// else {
//     console.log("A grade")
// }

// Q - 3

{ 
    let A = prompt("Enter Number 1:") 
    let H = prompt("Enter Number 2:")
    let ch = parseInt(prompt("Enter your choice:")) 
     
    switch (ch) { 
      case 1: 
      res = A + H
      console.log("\nResult is :" + res) 
      break 
   
      case 2: 
      res = A - H 
      console.log("\nResult is :" + res) 
      break 
 
      case 3: 
      res = A * H
      console.log("\nResult is :" + res) 
      break 
 
      case 4: 
      res = A / H 
      console.log("\nResult is :" + res) 
      break 
 
      case 5: 
      res = A % H; 
      console.log("\nResult is :" + res) 
      break 
 
      default: 
      console.log("Invalid Choice:" + ch) 
    } 
  }


// 5. Sort three numbers

var x = 20
var y = 341
var z = 454

if (x > y && x > z) {

    if (y > z) {
        console.log(x + ", " + y + ", " + z)
    }

    else {
        console.log(x + ", " + z + ", " + y)
    }
}

else if (y > x && y > z) {

    if (x > z) {
        console.log(y + ", " + x + ", " + z)
    }

    else {
        console.log(y + ", " + z + ", " + x)
    }
}

else if (z > x && z > y) {

    if (x > y) {
        console.log(z + ", " + x + ", " + y)
    }

    else {
        console.log(z + ", " + y + ", " + x)
    }
}



// JAVASCRIPT LOGICAL PROGRAM

// Evaluate each of the following JavaScript expressions and show the value.


// ------------program---------------------------------------


// 1.   ‐9*3

var e = -9
var f = 3

var g = e * f

console.log(g)

// 2.“Value is “+ 50

var s = "Value is"
var v = 50
var z = `"${s} ${v}"`

console.log(z)


// 3. 17 % 5

var h = 17
var i = 5

var j = h % i

console.log(j)

// 4. 5 % 17

var k = 5
var l = 17

var m = k % l

console.log(m)

// 5. 5/10

let n = 5
let o = 10

let p = n / o

console.log(p)

// 6. (4 == 4)

{

    let q = 4
    let r = 4
    console.log(q == r)
}

// 7. (4! = 5)

let t = 4
let u = 5

console.log(t != u)

// 8. (7 <= 8)

let w = 7
let xx = 8

console.log(w <= xx)




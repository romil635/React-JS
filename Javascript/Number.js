// JavaScript Number Methods

/*

toString()	      Returns a number as a string
toExponential()	  Returns a number written in exponential notation
toFixed()	        Returns a number written with a number of decimals
toPrecision()	    Returns a number written with a specified length
ValueOf()	        Returns a number as a number

*/

/* toString() */


let Number1  = 150

let Number2 = Number1.toString()
console.log(Number2)
console.log(typeof(Number2))

let Number3 = (89+20).toString()
console.log(Number3)

let Number4 = (150).toString()
console.log(Number4)



/*  toExponential() */


// toExponential() returns a string, with a number rounded and written using exponential notation.

  let  a = 2500000

  let b  = a.toExponential()
  console.log(b)
  let c = a.toExponential(10)
  console.log(c)


/*  toFixed() */

let fix1 = 5.4545

let fix2 = fix1.toFixed()
console.log(fix2)
let fix3  = fix1.toFixed(10)
console.log(fix3)




/* toPrecision()pre */


{
  let pre1 = 5
  let pre2 = pre1.toPrecision(1)
  let pre3 = pre1.toPrecision(2)
  let pre4 = pre1.toPrecision(3)
  let pre5 = pre1.toPrecision(4)
  let pre6 = pre1.toPrecision(5)
  let pre7 = pre1.toPrecision(6)

  console.log(pre1)
  console.log(pre2)
  console.log(pre3)
  console.log(pre4)
  console.log(pre5)
  console.log(pre6)
  console.log(pre7)
}


/* ValueOf()  */

{
  const num = 150
  let Num1  = num.valueOf()
  let Num2  = (15-26).valueOf()
  let Num3  = (255).valueOf()
  console.log(Num1)
  console.log(Num2)
  console.log(Num3)
  console.log(typeof(Num3))

}



function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds();
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

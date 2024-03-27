/* Javascript Asyncronous Method */

/* settimeout method */

// setTimeOut(function, delay , Parameter1, parameter2 , .....)


/* setTimeout(
  function(){

  }, delaytime
) */



// function print(){
//   console.log(
//     "Hello Javascript"
//   );
// }


// setTimeout(print , 5000);

// let print = () => {
//   console.log("SetTimeOut Method");
// }

// setTimeout(print  , 5000)


// setTimeout(
//   function greet(){
//     console.log("Hello Javascript");
//   } , 5000
// )

// setTimeout(
//   () => console.log("Hello World") , 5000
// )


// function greet(name , age){
//   console.log(`Your name is ${name} and age ${age}`);
// }

// setTimeout(greet , 1000 , "Rakesh" ,52)



/* SetInterval */

// setinterval(function , delay , Parameter1 , parameter2, .....)

// setInterval(
//   function greet(){
//     console.log("1");
//   } , 2000
// )

// setInterval(
//   () => console.log("Hello"), 3000
// )

// function greet(name , age){
//   console.log(`Your name is ${name} and age ${age}`);
// }

// setInterval(greet , 1000 , "Rakesh" ,52)

/* Current Time Print Every 3 Seconds */

/* Tomorrow Task */

// {
//   let datetime = new Date().toLocaleTimeString()

//   function time(date){
//     console.log(`Current Time ${date}`);
//   }
//   time(datetime);
//   setInterval(time , 3000)
// }

// {
  
//     function time(){
//       let date = new Date().toLocaleTimeString()
//       console.log(`Current Time ${date}`);
//       setInterval(time , 3000)
//     }
//     time();
//   }
  
  /* SetInterval Id */
  
  // function greet(name , age){
  //   console.log(`Your name is ${name} and age ${age}`);
  // }
  
  // let  Id= setInterval(greet , 1000 , "Rakesh" ,52)
   
  // console.log("This is ID " , Id);
  
  /* ClearTimeOut */
  
  // clearInterval(Id)
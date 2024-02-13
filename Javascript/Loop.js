/* Javascript Loops */


/* javascript while loop */

/*

The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known.

while (condition)  
{  
    code to be executed  
}  

*/

{
    let i = 2 ;
    
    while(i<=10){
        document.write("Hello" + "<br>")
        i++;
    }
}



/* JavaScript Do while loop

The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. 

do{  
    code to be executed  
}while (condition);  

*/

// let i = 11;

// do{
//     document.write("Hello"+ "<br>")
//     i++;
// }while(i<=10)



/* javascript for loop

The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. 

*/

/*

for (initialization; condition; increment)  
{  
    code to be executed   
}  

for ([initialExpression]; [con bditionExpression]; [incrementExpression])
  statement

*/

// let i = 0;

// for(i; i<=10; i++){
//     document.write("Hello"+"<br>")
// }


/* Break , Continue and Nested Statements */


/*  The break statement is used to terminate the loop immediately when it is encountered. */

// {
//      for (let counter = 0; counter <= 10; counter++) {
//           if (counter == 6) {
//                break;
//           }
//           document.write(counter);
//           document.write("<br>");
//      }
// }

// {
//      for(let counter = 1; counter <= 10 ; counter++){
//      if(counter == 5){
//           continue;
//      }
//      if(counter == 6){
//           continue;
//      }
//      document.write(counter);
//      document.write("<br>");
//      }
// }

// {
//      link: for(let counter = 1; counter <= 10 ; counter++){

//      document.write(counter);
//      document.write("<br>");

//      for(let counter2 = 1; counter2 < 4; counter2++){

//           if(counter == 3){
//           break link;
//           }
//           document.write("Hello");
//           document.write("<br>");
//      }
//      }
// }

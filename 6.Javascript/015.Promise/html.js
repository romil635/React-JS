// Javascript Promise and Promise Chaining 

// In Javascript, a Promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A Promise may have one of three states.

// Pending
// Fulfilled
// Rejected
// A Promise starts in a Pending state. That means the process is not complete. If the operation is successful, the process ends in afulfilled states. And, if an error occurs, the process ends in a rejected states.

// For example, when you request data from the server by using a promise, it will be in a pending state. when the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

// Create a Promise

// To create a promise object, we use the promise() constructor.
// {
//     let promise = new Promise(function(resolve, reject){});

    // The Promise() constructor takes a function as an argument. the function also accepts two functions resolve() and reject().
// }

// Program with a Promise
// {
//     const count = false;

//     let countValue = new Promise(function(resolve, reject){
//         if(count){
//             resolve("There is a count value.");
//         }
//         else{
//             reject("There is no count value");
//         }
//     });

//     console.log(countValue);
// }

// Javascript Promise Chaining

// Promise are useful when you have to handle more than one asynchronous task, one after another. For that, we use Promise chaining.

// You can perform an operation after a promise is resolved using methods then(), catch() and finally().

// Javascript then() method

// The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// The syntax of then() method is

{
    // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then()
// {
//     let countValue = new Promise(function (resolve, reject){
//         reject("Promise is not resolved");
//     });

//     countValue
//         .then(function successValue(result){
//             console.log(result);
//         })

//         .then(function successValue1(){
//             console.log("You can call multiple functions this way.");
//         });

//         // the then() method is used to chain the functions to the promise. the then() method is called when the promise is resolved successfully.

//         //You can chain multiple then() methods with the promise.
// }

// // Javascript catch() method 

// // The catch() method is used with the callback when the promise is rejected or if an error occurs.

// {
//     let countValue = new Promise (function(resolve, reject){
//         resolve("Promise is not rejected")
//     });

//     countValue.then(
//         function successValue(){
//             let text = 8*10
//             console.log(text);
//         },
//     )

//     .catch(
//         function errorValue(result){
//             console.log(result);
//         }
//     );
// }

// Javascript Promise Versus Callback

// Promises are similar to callback function in a sense that they both cn be used to handle asynchronous tasks.

// JavaScript callback functions can also be used to perform aynchronous tasks.

//JavaScript Promise

// The syntax is user-friendly and easy to read.

// Error handling is easier to manage.

{
    // api().then(function(result){
    //     return api2();
    // }).then(function(result2){
    //     return api3();
    // }).then(function(result3){
    //     // do work
    // }).catch(function(error){
    //     // handle any error that my occur before this point
    // });
}

//JavaScript Callback
// The syntax is difficult to understand.
// Error handling may be hard to manage.
{
    // api(function(result){
    //     api2(function(result2){
    //         api3(function(result3){
    //             // do work
    //             if(error){
    //                 // do something
    //             }
    //             else{
    //                 // do something
    //             }
    //         });
    //     });
    // });
}

// JavaScript finally() method

// You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.
// {
//     let countValue = new Promise(function (resolve, reject){
//         reject();
//     });

//     countValue.finally(
//         function greet(){
//             console.log('This code is executed.');
//         }
//     );

//     let promise = new Promise(function(resolve, reject){
//         setTimeout(
//             function(){
//                 console.log('Hello Promises');
//                 // reject("This Task is Not Completed!");
//                 resolve();
//             }, 5000
//         )
//     })
    
//     promise.then(function(){
//         setTimeout(
//             function(){
//                 console.log("First Then Function");
//             }, 1000
//         )
//     })

//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log("Second Then Function");
//             }, 5000
//         )
//     })

//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log("Third Then Function");
//             }, 4000
//         )
//     })

//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log("Fourth Then Function");
//             }, 5000
//         )
//     })

//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log("Fifth Then Function");
//             }, 6000
//         )
//     })

//     .catch(function(result){
//         console.log(result);
//     })

//     .finally(function(){
//         console.log('The Asyncronous Task Complete!.');
//     })
// }
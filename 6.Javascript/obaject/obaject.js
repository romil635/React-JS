/* Javascript Object */

// const dataobject  = {}
// console.log(dataobject);

// const dataObject1 = {
//   key1:"javascript",
//   key2:"reactjs"
// }

// console.log(dataObject1);

// console.log(dataObject1.key1);

// console.log(dataObject1.key2);

// console.log(dataObject1["key1"]);

// console.log(dataObject1["key2"]);


// const dataObject3 = {
//   name:"vasu",
//   gender:"male",
//   address:"Twintower",
//   marks:{
//     maths:35,
//     english:90
//   }
// }

// console.log(dataObject3.marks.maths);

// console.log(dataObject3["marks"]);

// console.log(dataObject3["marks"]["maths"]);

// const dataObject4 = {
//   array:[1,2,3,4,5,6,[111,222]],
//   array2:[11,22,33,44,55,66],
// }

// console.log(dataObject4.array);
// console.log(dataObject4.array[6][0]);


// const Array1 = [
//   {
//     id:1,
//     item:"apple",
//     catagories:"fruits"
//   },
//   {
//     id:2,
//     item:"banana",
//     catagories:"fruits"
//   },
//   {
//     id:3,
//     item:"graps",
//     catagories:"fruits"
//   },
//   {
//     id:4,
//     item:"mango",
//     catagories:"fruits"
//   },
//   {
//     id:5,
//     item:"watermelon",
//     catagories:"fruits"
//   }

// ]


// console.log(Array1[0].id);

// const newObject = new Object({
//   Obj1:"Option-1",
//   Obj2:"Option-2"
// });
// console.log(newObject);


/* javascript object method */

//  1. JavaScript Object.assign()

// assign() Syntax

{
    // Object.assign(target, ...sources)
  }
  
  // assign() Parameters
  
  // The assign() method takes in:
  
  // target - the target object to which we will copy all the properties of the sources.
  // sources - the source object(s) whose properties we want to copy.
  
  // {
  //   const Obj1 = {num1:"1" , num2:"2"} 
  //   const Obj2 = {num3:"3" , num4:"4"} 
  //   const Obj3 = {num5:"5" , num6:"6"} 
  
  //   const Obj4 = Object.assign(Obj1 , Obj1)
  
  //   console.log(Obj1);
  //   console.log(Obj2);
  // }
  
  
  // assign() Return Value
  
  // Javascript Object.assign() to Clone Objects
  
  {
    // create source object
  
    // let Obj1 = {num1:"1" , num2:"2"}
  
    // let Obj2 = {num3:"3"};
  
    // let Object3 = Object.assign(Obj2 , Obj1)
  
    // let AllObj = Obj1 = Obj2
  
    // console.log(AllObj);
    // console.log(Obj2);
    // console.log(Obj1);
    
    // // copy enumerable properties of obj to newObject
    // // newObject is returned and stored in copy object
    
  }
  
  // In the above example, we have used the assign() method to assign the contents of obj to newObject.
  
  // Since assign() modifies the target object and returns the same object, both copy and newObject are clones of one another. As a result, we get identical outputs when we print them both.
  
  
  // assign() to Merge Objects
  
  {
  
    // const Obj1 = {num:"1" , num2:"2"}
    // const Obj2 = {num3:"3" , num4:"4"}
    // const Obj3 = {num5:"5" , num6:"6"}
  
    // // Object To Merge In Another Object
  
    // const Object4 = Object.assign({} , Obj1 , Obj2 , Obj3)
  
    // const Array = Object4[1]
  
    // console.log(Array);
  
    // console.log(Object4);

  
  }
  
  // In the above example, we have used assign() to merge the objects o1, o2, and o3 into a new object o4.
  
  {
    // const o4 = Object.assign({}, o1, o2, o3);
  }
  
  // Using the empty object {} as a target object ensures that the properties of the other objects are copied to a new object without modifying any of the source objects.
  
  // As can be seen from the output, properties of later objects overwrite that of earlier ones. For example,
  
  // the b key from o1 is overwritten by its counterpart in o2.
  // the c keys from o1 and o2 are overwritten by their counterpart in o3.
  
  //If the source value is a reference to an object, it only copies the reference value.
  
  //  2. Javascript Object.create()
  
  {
    // let Student = {
    //     name: "Lisa",
    //     age: 24,
    //     marks: 78.9,
    //     // display() {
    //     //   console.log("Name:", this.name);
    //     // }
    //   };
  
      
    //   // create object from Student prototype
    //   let std1 = Object.create(Student);  
  
    //   let std2 = Object.assign(std1 , Student)
  
      
    //   std1.name = "Sheeran";
      
    //   console.log(std2);
      // console.log(std1);
      // std1.display();
      // console.log(Student);
  }
  
  // 3.  JavaScript Object.entries()
  
  {
    // const obj = { 
    //   name: "Adam",
    //    age: 20,
    //     location: "Nepal"
    //    };
  
    // let Obj1 = Object.entries(obj);
  
    // console.log(Obj1[2]);
  }
  
  {
    // // keys are arranged randomly
    // const obj = { 42: "a", 22: "b", 71: "c" };
  
    // // returns key-value pairs arranged
    // // in ascending order of keys
    // console.log(Object.entries(obj));
  
  }
  
  // entries() to Iterate Through Key-Value Pairs
  
  {
    // const obj = { name: "John", age: 27, location: "Nepal" };
  
    // // iterate through key-value pairs of object
    // for (const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    // }
  }
  
  // 4. JavaScript Object.is()
  
  {
    // The Object.is() method checks if two values are the same.
  
    // let Obj1 = {Num1:"1" , Num2:"2"} 
    // let Obj2 = {Num1:"1" , Num2:"2"} 
  
    // let Obj3 = Object.is(Obj1 , Obj2)
  
    // console.log(Obj3);
  
  }
  
  {
    // Javascript Object.is()
  
    // // objects with same values
    // console.log(Object.is("JavaScript", "JavaScript")); 
  
    // // objects with different values
    // console.log(Object.is("JavaScript", "javascript")); 
  
    // // compare null values
    // console.log(Object.is(null, null));
  }
  
  {
    // is() With Custom Objects
  
    // create an object
    // let obj1 = { a: 1 };
  
    // // create another object
    // // with identical properties as obj1
    // let obj2 = { a: 1 };
  
    // // returns true because both arguments
    // // have the same reference
    // console.log(Object.is(obj1, obj1));
  
    // // returns false because obj1 and
    // // obj2 have different references
    // console.log(Object.is(obj1, obj2));
  
  }
  
  {
    // is() With Special Cases
  
    // Special Cases
  
    // console.log(Object.is([], []));
  
    // console.log(Object.is({}, {}));  
  
    // console.log(Object.is(0, -0));  
  
    // console.log(Object.is(-0, -0)); 
  
    // console.log(Object.is(NaN, 0 / 0));  
  }
  
  
  // 5. JavaScript Object.hasOwnProperty()
  
  // The Object.hasOwnProperty() method checks if the object possesses the given property.
  
  {
    // const obj = {};
    // console.log(obj);
  
    // obj.id = 42;
  
    // // // check if id is present in obj or not
    // console.log(obj.hasOwnProperty("id"));
  
    // console.log(obj);
  }
  
  {
    // Javascript Object.hasOwnProperty()
  
    // // create an object with property id
    // const obj = {id: 42 , toString:10};
  
    // // check if id exists in obj 
    // console.log(obj.hasOwnProperty("id")); 
  
    // // check if name exists in obj 
    // console.log(obj.hasOwnProperty("name")); 
  
    // // inherited properties return false
    // console.log(obj.hasOwnProperty("toString")); 
  
  }
  
  // 6. JavaScript Object.freeze()
  
  {
    // The Object.freeze() method freezes an object i.e. it prevents the object from being modified.
  
    // const Obj  = {num:"1" , num2:"2"}
  
    
    // Obj.num = "10"
    
    // Object.freeze(Obj)
  
    // Obj.num2="20"
  
    // console.log(Obj);
  
  }
  
  // 7. JavaScript Object.getOwnPropertyNames()
  
  {
    // The Object.getOwnPropertyNames() method returns an array of all the properties found in a given object.
  
    // const obj = {
    //     name: 'Alexander',
    //     age: 32,
    //     address: 'Macedonia',
    //   };
      
    //   // find out the properties present in obj
    //   const propertyNames = Object.getOwnPropertyNames(obj);
      
    //   console.log(propertyNames);
      
  }
  
  // 8. Javascript Object.setPrototypeOf()
  
  {
    // The Object.setPrototypeOf() method sets the prototype of the specified object to another object or null.
  
    // create an empty object
    // const obj = {};
  
    // // // create a non-empty object parent
    // const parent = { foo: 'bar' };
  
    // // // set parent as the prototype of obj
    // Object.setPrototypeOf(obj, parent);
  
    // // // print foo property of parent
    // // // using the obj object
    // console.log(obj.foo);
  
    // console.log(obj);
  
  }
  
  // 9. JavaScript Object.toString()
  
  {
    // The Object.toString() method returns the given object as a string.
  
    // create a number with value 10
    // let num = {10:"obj"};
  
    // // check the type of num before
    // // using the toString() method
    // console.log(typeof num); 
  
    // // check the type of num after 
    // //using the toString() method
    // console.log(typeof num.toString()); 
  }
  
  // 10. JavaScript Object.valueOf()
  
  {
    // The Object.valueOf() method returns the primitive value of the specified object.
  
    // create a new Number object with value of 12
    // let num = new Number(12);
  
    // console.log(num);
  
    // console.log(num.valueOf());
  }
  
  // 11. JavaScript Object.values()
  
  {
    // The Object.values() method returns an array containing the enumerable values of an object.
  
    // array-like object having integers as key
    // const obj = { 65: "A", 66: "B", 67: "C" };
  
    // // print the enumerable values of obj
    // console.log(Object.values(obj));
  
    const object ={}












  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
    // values() With Object Having Random Key Ordering
  
    // object with random key ordering
    const obj1 = { 42: "a", 22: "b", 71: "c" };
  
    // print the enumerable values of obj1
    console.log(Object.values(obj1));
  
  }
  
  {
    // JavaScript Object.values() With String
  
    const string = "code";
    console.log(Object.values(string));
  
    values() wit
  }
  






















let list1 = [
    { No1: "Moto", price:"$229", category: "mobile" },
    { No2: "Apple", price:"$449", category: "mobile" },
    { No3: "Poco", price:"$109", category: "mobile" },
    { No4: "Samsung", price:"$329", category: "mobile" },
    { No5: "Pixel", price:"$389", category: "mobile" },

    { Car1: "Chevelle", price:"$140000", category: "car" },
    { Car2: "Shelby", price:"$91450", category: "car" },
    { Car3: "Mustang", price:"$328900", category: "car" },
    { Car4: "Blazer", price:"$109945", category: "car" },
    { Car5: "Corvette", price:"$119500", category: "car" },

    { Fruit1: "Strawberry", price:"$23", category: "fruit" },
    { Fruit2: "Brazil Nut", price:"$23", category: "fruit" },
    { Fruit3: "Coconut", price:"$23", category: "fruit" },
    { Fruit4: "Fig", price:"$38", category: "fruit" },
    { Fruit5: "Persimmon", price:"$89", category: "fruit" },

    { Tour1: "Rishikesh", price:"$39", category: "tour" },
    { Tour2: "Ladak", price:"$38", category: "tour" },
    { Tour3: "Spiti", price:"$89", category: "tour" },
    { Tour4: "Goa", price:"$29", category: "tour" },
    { Tour5: "Kerala", price:"$59", category: "tour" },

    { Treak1: "Kedarkantha", price:"$87", category: "treak" },
    { Treak2: "Brahmatal", price:"$56", category: "treak" },
    { Treak3: "Tarsar", price:"$47", category: "treak" },
    { Treak4: "Nandadevi", price:"$32", category: "treak" },
    { Treak5: "Hampta", price:"$23", category: "treak" }
]; 
let output = prompt("Enter This Name Mobile, Tour, Treak, Fruit, Car For Full List: ");
let output1=  list1.filter(list1 => list1.category == output);

console.log(output1);
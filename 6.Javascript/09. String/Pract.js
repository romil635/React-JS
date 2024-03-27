// primitive string 

let S1 = "Hello"
let S2 = 'World'
let S3  = `Hello World`

console.log(S1);
console.log(S2);
console.log(S3);


// string as object 

let S4 = new String("Aniruddh")

console.log(S4);

let S5 = S4.split("");
console.log(S5);

//  String length.

let S6  = "WHAT ARE MOST SIMPLE."
console.log(S6.length);


//  String charAt() 

let S7  = "MOST Populer FOOd."
let S8 = S7.charAt(6)
console.log(S8);


// String slice() return New String 

let String9  = "Noty Boy."
let String10  = String9.slice(6)
let String11  = String9.slice(-10)
let String12  = String9.slice(-5  , -12)
let String13  = String9.slice(6 , 8)
let String14  = String9.slice(-3 , 14)
let String15  = String9.slice(4 , -9)

console.log(String10)
console.log(String11)
console.log(String13)
console.log(String14)
console.log(String15)

// String substring() return New String 

let String16 = "Happy Girl."
let String17 = String16.substring(10)
let String18 = String16.slice(12)
let String19 =  String16.substring(-10)
let String20 =  String16.slice(-13)
let String21 =  String16.substring(10 , 30)
let String22 =  String16.substring(2 , -20)
let String23 =  String16.substring( -10 , 8)

console.log(String17)
console.log(String18)
console.log(String19)
console.log(String20)
console.log(String21)
console.log(String22)
console.log(String23)

// String replace()

let String24 = "WHAT ARE MOST SIMPLE Guy's."
let String25 = String24.replace("MOST" , "The")

console.log(String25)

// String replaceAll()

let String27 = "Simple Guy's Is Very Simple."
let String28  = String27.replaceAll("Simple" , "Boring")
console.log(String28)


// String toUpperCase()

let String30 = "aniruddh godhani"
let String31 = String30.toUpperCase()
console.log(String31)


//  String toLowerCase()

let String32 = "ANIRUDDH GODHANI"
let String33  = String32.toLowerCase()
console.log(String33)


//  String concat()

let String34 = "Hello"
let String35  = "How Are You!"
let String36 = String34.concat(" " + String35)
console.log(String36)


// String trim()

let String38 = "  This is most common lecture!  "
console.log(String38.length)

let String39 = String38.trim()
console.log(String39)
console.log(String39.length)


//  String trimStart()

let String40 = "  This is most common lecture!  "
console.log(String40.length)

let String41 = String40.trimStart()
console.log(String41)
console.log(String41.length)


//  String trimEnd() 

let String42 = "   This is most common lecture!   "
console.log(String42)
console.log(String42.length)

let String43 = String42.trimEnd()
console.log(String43)
console.log(String43.length)


//  String padStart() 

let String44 = "This is Common langauage!"
console.log(String44)
console.log(String44.length)

let String45 = String44.padStart(5, "1")
console.log(String45)

let Number1 = "500"
let Number2 = Number1.padStart(3, 0)
console.log(Number2)


// String padEnd() 

let Number3 = "2002"
let Number4 = Number1.padEnd(4, 0)
console.log(Number4);
console.log(typeof (Number4));

let Number5 = parseFloat(Number4)
console.log(Number5);
console.log(typeof (Number5));


//  String charCodeAt() 

let String46 = "This is most CoMmon!"
let String47 = String46.charCodeAt(15)
console.log(String47)


// String split() 

let String48 = "Aniruddh Godhani."
console.log(String48)
let String49 = String48.split("")
console.log(String49)


//  String includes() , true and false 

let String50 = "Aniruddh Godhani"
console.log(String50)
let String51 = String50.includes("a")
console.log(String51)
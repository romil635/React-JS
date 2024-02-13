/***** Javascript String Method ******/

// The String object is used to represent and manipulate a sequence of characters.

/* primitive string */

// let String1 = "Hello World"
// let String2 = 'Hello World'
// let String3  = `Hello World`

// console.log(String1);
// console.log(String2);
// console.log(String3);


/* string as object */

// let String4 = new String("Hello World")

// console.log(String4);

// let String5 = String1.split("");
// console.log(String5);



/******  javascript string method ******/

// String length
// String charAt()
// String slice()
// String substring()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charCodeAt()
// String split()
// String includes()


/* Follow String :- WHAT ARE MOST SIMPLE FOO. */

/***********************************************/

/******  String length. ******/

// {String.length}

// let String6  = "WHAT ARE MOST SIMPLE FOO."
// console.log(String6.length);


/******  String charAt() ******/

// let String7  = "WHAT ARE MOST SIMPLE FOO."
// let String8 = String7.charAt(3)
// console.log(String8);



/****** String slice() return New String ******/
// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// slice(indexStart)
// slice(indexStart, indexEnd)


// let String9  = "WHAT ARE MOST SIMPLE FOO."
// let String10  = String9.slice(6)
// let String11  = String9.slice(-6)
// let String12  = String9.slice(-6  , -12)
// let String13  = String9.slice(6 , 6)
// let String14  = String9.slice(-6 , 6)
// let String15  = String9.slice(6 , -6)
// console.log(String15);


/******  String substring() return New String ******/
// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
// substring(indexStart)
// substring(indexStart, indexEnd)

// let String16 = "WHAT ARE MOST SIMPLE FOO."
// let String17 = String16.substring(10)
// let String18 = String16.slice(10)
// let String19 =  String16.substring(-10)
// let String20 =  String16.slice(-10)
// let String21 =  String16.substring(10 , 20)
// let String22 =  String16.substring(10 , -20)
// let String23 =  String16.substring( -10 , 7)

// console.log(String17);
// console.log(String18);
// console.log(String19);
// console.log(String20);
// console.log(String21);
// console.log(String23);


/****** String replace() ******/

// let String24 = "WHAT ARE MOST SIMPLE MOST FOO."
// let String25 = String24.replace("Most" , "index")
// let String26 = String24.replace("MOST" , "INDEX")
// console.log(String26);


/****** String replaceAll() ******/

// let String27 = "WHAT ARE MOST HARD MOST FOO."
// let String28  = String27.replaceAll(/MOST/g , "TUSHAR")
// let String29  = String27.replaceAll(/MOST/i , "TUSHAR") // Error
// console.log(String28);


/****** String toUpperCase() ******/

// let String30 = "This is most common langauage"
// let String31 = String30.toUpperCase();
// console.log(String31);



/******  String toLowerCase() ******/

// let String32 = "THIS IS MOST COMMON LANGUAGE"
// let String33  = String32.toLowerCase();
// console.log(String33);



/******  String concat() ******/

// let String34 = "Hello"
// let String35  = "World"
// let String36  = "How Are You!"
// let String37 = String34.concat(" " + String36 + " " +  String35)
// console.log(String37);



/******  String trim() ******/


// let String38 = "      This is most common lecture!    "
// console.log(String38);
// console.log(String38.length);
// let String39 = String38.trim()
// console.log(String39);
// console.log(String39.length);



/******  String trimStart() ******/

// let String40 = "   This is most common lecture!   "
// console.log(String40);
// console.log(String40.length);
// let String41 = String40.trimStart();
// console.log(String41);
// console.log(String41.length);



/******  String trimEnd() ******/

// let String42 = "   This is most common lecture!   "
// console.log(String42);
// console.log(String42.length);
// let String43 = String42.trimEnd();
// console.log(String43);
// console.log(String43.length);



/******  String padStart() ******/

// let String44 = "This is Common langauage!"
// console.log(String44);
// console.log(String44.length);
// let String45 = String44.padStart(30 , "1");
// console.log(String45);
// let Number1  = "500"
// let Number2  = Number1.padStart(2 , 0)
// console.log(Number2);



/******  String padEnd() ******/


// let Number1  = "500"
// let Number2  = Number1.padEnd(4 , 0)
// console.log(Number2);
// console.log(typeof(Number2));
// let Number3 = parseFloat(Number2)
// console.log(Number3);
// console.log(typeof(Number3));


/******  String charCodeAt() ******/

// let String46 = "This is most CoMmon!"
// let String47  = String46.charCodeAt(15);
// console.log(String47);


/****** String split() ******/

// let String48 = "Wow! What a Place."
// console.log(String48);
// let String49 = String48.split("");
// console.log(String49);
  

/******  String includes() , true and false ******/

// let String50 = "Wow!WhataPlace."
// console.log(String50);
// let String51 = String50.includes(".")
// console.log(String51);


/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()

/******   String indexOf() ******/

// let String52 = "Wow! What a Place."
// console.log(String52);
// let String53  = String52.indexOf("a" , 8)
// console.log(String53);


/******   String lastIndexOf() ******/


// let String54 = "Why Need Form Valiadation In Web Development"
// console.log(String54);
// let String55  = String54.lastIndexOf("m" , 20)
// console.log(String55);


/******  String search() ******/


// let String56 = "Why Need Form Valiadation In Web Development"
// console.log(String56);
// let String57 = String56.search("W")
// console.log(String57);


/******  String startsWith() ******/

// let String56 = "Why Need Form Valiadation In Web Development"
// console.log(String56);
// let String57 = String56.startsWith("h");
// console.log(String57);


/******  String endWith() ******/

// let String58 = "Why Need Form Valiadation In Web Development  "
// console.log(String58);
// let String59 = String58.endsWith(" ");
// console.log(String59);


/******  String match() ******/

/* After Regx */

/******  String matchall()/ remider with array ******/

// let String24 = "WHAT ARE MOST SIMPLE FOO."
// let String24 = "WHAT ARE MOST SIMPLE MOST FOO."
// let String25 = String24.replace("Most" , "index")
// let String26 = String24.replace("MOST" , "index")
// console.log(String25);
// let String26 = String24.replace("MOST" , "INDEX")
// console.log(String26);


/****** String replaceAll() ******/


// let String27 = "WHAT ARE MOST HARD MOST FOO."
// let String28  = String27.replaceAll(/MOST/g , "TUSHAR")
// let String29  = String27.replaceAll(/MOST/i , "TUSHAR") // Error
// console.log(String28);


/****** String toUpperCase() ******/

// let String30 = "This is most common langauage"
// let String31 = String30.toUpperCase();
// console.log(String31);



/******  String toLowerCase() ******/

// let String32 = "THIS IS MOST COMMON LANGUAGE"
// let String33  = String32.toLowerCase();
// console.log(String33);



/******  String concat() ******/

// let String34 = "Hello"
// let String35  = "World"
// let String36  = "How Are You!"
// let String37 = String34.concat(" " + String36 + " " +  String35)
// console.log(String37);



/******  String trim() ******/


// let String38 = "      This is most common lecture!    "
// console.log(String38);
// console.log(String38.length);
// let String39 = String38.trim()
// console.log(String39);
// console.log(String39.length);



/******  String trimStart() ******/

// let String40 = "   This is most common lecture!   "
// console.log(String40);
// console.log(String40.length);
// let String41 = String40.trimStart();
// console.log(String41);
// console.log(String41.length);



/******  String trimEnd() ******/

// let String42 = "   This is most common lecture!   "
// console.log(String42);
// console.log(String42.length);
// let String43 = String42.trimEnd();
// console.log(String43);
// console.log(String43.length);



/******  String padStart() ******/

// let String44 = "This is Common langauage!"
// console.log(String44);
// console.log(String44.length);
// let String45 = String44.padStart(30 , "1");
// console.log(String45);
// let Number1  = "500"
// let Number2  = Number1.padStart(2 , 0)
// console.log(Number2);



/******  String padEnd() ******/


// let Number1  = "500"
// let Number2  = Number1.padEnd(4 , 0)
// console.log(Number2);
// console.log(typeof(Number2));
// let Number3 = parseFloat(Number2)
// console.log(Number3);
// console.log(typeof(Number3));


/******  String charCodeAt() ******/

// let String46 = "This is most CoMmon!"
// let String47  = String46.charCodeAt(15);
// console.log(String47);


/****** String split() ******/

// let String48 = "Wow! What a Place."
// console.log(String48);
// let String49 = String48.split("");
// console.log(String49);


/******  String includes() , true and false ******/

    // {
    //     let demotext="this is string values";
    //     let demo = demotext.includes("w");
    //     console.log(demo);
    // }
// let String50 = "Wow!WhataPlace."
// console.log(String50);
// let String51 = String50.includes(".")
// console.log(String51);


/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()

/******   String indexOf() ******/

// let String52 = "Wow! What a Place."
// console.log(String52);
// let String53  = String52.indexOf("a" , 8)
// console.log(String53);


/******   String lastIndexOf() ******/


// let String54 = "Why Need Form Valiadation In Web Development"
// console.log(String54);
// let String55  = String54.lastIndexOf("m" , 20)
// console.log(String55);


/******  String search() ******/


// let String56 = "Why Need Form Valiadation In Web Development"
// console.log(String56);
// let String57 = String56.search("W")
// console.log(String57);


/******  String match() ******/



/******  String matchall()/ remider with array ******/
/******  String startsWith() ******/

// let String56 = "Why Need Form Valiadation In Web Development"
// console.log(String56);
// let String57 = String56.startsWith("h");
// console.log(String57);


/******  String startsWith() ******/
/******  String endWith() ******/

// let String58 = "Why Need Form Valiadation In Web Development  "
// console.log(String58);
// let String59 = String58.endsWith(" ");
// console.log(String59);


/******  String endWith() ******/
/******  String match() ******/

/* After Regx */

/******  String matchall()/ remider with array ******/

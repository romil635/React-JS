/* JavaScript Operators */

/*

1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison (Relational) Operators 
4. Logical Operators
5. Special Operators

*/


/* Arithmetic Operators */

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/


/* Arithmetic Operators */

{  
    var A = 5
    var B = 5
    var C = A ** B
    console.log(C)
}


/*  ASSIGEMENT OPERATOR  */

/*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C

+= (Add and Assignment)

Ex: C += A is equivalent to C = C + A

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/

{
    var a = 3
    var b = 3
    var z = 4
    var c = b += a // (b+=a) b=b+a
    var d = z -= a  // b = b-a
    var e = b *= a // b = b*a
    var f = a %= b  // a = a%b
    var g = a /= b  // a = a/b
    var h = a **= b // a = a ** b 
    var linebreak = "<br />"
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(g)
    console.log(h)
}

/* Comparison Operators */

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.   

=== (identical equel and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.


!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/

{
    var Aa = 10
    var Bb = 11
    
    var D = Aa == Bb
    var E = Aa === Bb
    var F = Aa != Bb
    var G = a !== Bb
    var H = Aa > Bb
    var I = Aa < Bb
    var J = Aa >= Bb
    var K = Aa <= Bb  

    console.log(D)
    console.log(E)
    console.log(F)
    console.log(G)
    console.log(H)
    console.log(I)
    console.log(J)
    console.log(K)
}

/* Logical Operators */

/*

&& (Logical AND)

If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.


|| (Logical OR)
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.


! (Logical NOT)
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it true.
Ex: ! (A && B) is false.

*/

/*

(a && b) => false
(a || b) => true
!(a && b) => true

*/

{

let aa = false
let bb = false
let cc = false
let dd = false

let ee = !(aa && bb || cc || dd);
console.log(ee);
  
}


/* Miscellaneous Operator

? tarnary operator
: (Conditional )
If Condition is true? Then value X : Otherwise value Y
 
*/

/*
((a > b) ? 100 : 200) => 200
((a < b) ? 100 : 200) => 100

*/

let aggriment = 0
let age = aggriment == 0 ? "Login" : "Logout"
console.log(age)





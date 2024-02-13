// Converting Variable to Numbers

/*

Number() Returns a number converted from argument.
parseFloat() Parse its argument and returns a floating point number 
parseInt() Parse its argument and returns a whole number

*/

{
    let n1 =  Number(true)
    let n2 =  Number(false)
    let n3 =  Number("10")	
    let n4 =  Number("  10")
    let n5=  Number("10  ")
    let n6 =  Number(" 10  ")
    let n7 =  Number("10.33")	
    let n8 =  Number("10,33")	
    let n9 =  Number("10 33")	
    let n10 =  Number("John")	

    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(n4)
    console.log(n5)
    console.log(n6)
    console.log(n7)
    console.log(n8)
    console.log(n9)
    console.log(n10)
 }

 {
    let pi1 =  parseInt("-10")		
    let pi2 =  parseInt("-10.33")
    let pi3 =  parseInt("10")
    let pi4 =  parseInt("10.33")
    let pi5 =  parseInt("20 30")	
    let pi6 =  parseInt("10 years")	
    let pi7 =  parseInt("years 10")	
    console.log(pi1)
    console.log(pi2)
    console.log(pi3)
    console.log(pi4)
    console.log(pi5)
    console.log(pi6)
    console.log(pi7)
 }

 {
    let pf1 =  parseFloat("10")	
    let pf2 =  parseFloat("10.33")
    let pf3 =  parseFloat("10 20 30")	
    let pf4 =  parseFloat("10 years")	
    let pf5 =  parseFloat("years 10")
    console.log(pf1)	 
    console.log(pf2)	
    console.log(pf3)	
    console.log(pf4)	
    console.log(pf5)	
 }
     
 
 /* Number Object Method */
 
 /*
 
 Number.isInteger() Returns true if the argument is an integer
 Number.isSafeInteger() Returns true if the argument is a safe integer
 Number.parseFlaot() Convert a string to a number
 Number.parseInt() Convert a string to a whole number
 
 */
 
 {
    // let method = Number.isInteger(10)	
    // let method1 = Number.isInteger(10.5)
       
    // let method2 = Number.isSafeInteger(10)	
    // let method3 = Number.isSafeInteger(12345678901234567890)	
    
    // let method4 = Number.parseFloat("10")		
    // let method5 = Number.parseFloat("10.3")	
    // let method6 = Number.parseFloat("10 20 30")	
    // let method7 = Number.parseFloat("10 years")	
    // let method8 = Number.parseFloat("years 10")	
    
    // let method9 = Number.parseInt("-10")
    // let method10 = Number.parseInt("-10.33")		
    // let method11 = Number.parseInt("10")			
    let method12 = Number.parseInt("10.33")		
    // let method13 = Number.parseInt("10 6")		
    // let method14 = Number.parseInt("10 years")	
    // let method15 = Number.parseInt("years 10")	
    
         console.log(method12)
 }

 /* Javascript type Conversion */

let x
console.log(x) /*"undefined" */
console.log(typeof(x))


// const  /* SyntaxError: Missing initializer in const declaration */


// console.log(x) /* ReferenceError */
// const x = 3

// console.log(y) /* ReferenceError */
// let y = 3


x = "The answer is " + 42   /* "The answer is 42" */
y = 42 + " is the answer"  /* "42 is the answer" */
z = "37" + 7               /* "377" */

console.log(x)
console.log(typeof(x))
console.log(y)
console.log(typeof(y))
console.log(z)
console.log(typeof(z))

{
  let b = "37" - 7
  let c = "7" * 7
  console.log(b)
  console.log(typeof(b))
  console.log(c)
  console.log(typeof(c))
}

/* convert string to number */

{
  let d = false
  let e = true
  let f = 0
  let g = 1
  let h = "000"
  let i = "111"
  let j = undefined
  let k = NaN
  let l = null
  let m = Infinity
  let n = -Infinity
  let o = " "
  let p = [ ]
  let q = ["Hello"]
  let r = [10, 50 ,30]
  let s = [100]
  let t = ["Hello" , "Hi"]
  let u =function(){}
  let v = {}

  console.log(typeof(d))
  
  let y = (Number(d))
  console.log(y)
  console.log(typeof(y))
  
  let z = (String(d))
  console.log(z)
  console.log(typeof(z))

  let a = (Boolean(d))
  console.log(a)
  console.log(typeof(a))

  console.log(typeof(e))
  
  let y1 = (Number(e))
  console.log(y1)
  console.log(typeof(y1))
  
  let z1 = (String(e))
  console.log(z1)
  console.log(typeof(z1))

  let a1 = (Boolean(e))
  console.log(a1)
  console.log(typeof(a1))

  console.log(typeof(f))
  
  let y2 = (Number(f))
  console.log(y2)
  console.log(typeof(y2))
  
  let z2 = (String(f))
  console.log(z2)
  console.log(typeof(z2))

  let a2 = (Boolean(f))
  console.log(a2)
  console.log(typeof(a2))

  console.log(typeof(g))
  
  let y3 = (Number(g))
  console.log(y3)
  console.log(typeof(y3))
  
  let z3 = (String(g))
  console.log(z3)
  console.log(typeof(z3))

  let a3 = (Boolean(g))
  console.log(a3)
  console.log(typeof(a3))

  console.log(typeof(h))
  
  let y4 = (Number(h))
  console.log(y4)
  console.log(typeof(y4))
  
  let z4 = (String(h))
  console.log(z4)
  console.log(typeof(z4))

  let a4 = (Boolean(h))
  console.log(a4)
  console.log(typeof(a4))

  console.log(typeof(i))
  
  let y5 = (Number(i))
  console.log(y5)
  console.log(typeof(y5))
  
  let z5 = (String(i))
  console.log(z5)
  console.log(typeof(z5))

  let a5 = (Boolean(i))
  console.log(a5)
  console.log(typeof(a5))

  console.log(typeof(j))
  
  let y6 = (Number(j))
  console.log(y6)
  console.log(typeof(y6))
  
  let z6 = (String(j))
  console.log(z6)
  console.log(typeof(z6))

  let a6 = (Boolean(j))
  console.log(a6)
  console.log(typeof(a6))

  console.log(typeof(k))
  
  let y7 = (Number(k))
  console.log(y7)
  console.log(typeof(y7))
  
  let z7 = (String(k))
  console.log(z7)
  console.log(typeof(z7))

  let a7 = (Boolean(k))
  console.log(a7)
  console.log(typeof(a7))

  console.log(typeof(l))
  
  let y8 = (Number(l))
  console.log(y8)
  console.log(typeof(y8))
  
  let z8 = (String(l))
  console.log(z8)
  console.log(typeof(z8))

  let a8 = (Boolean(l))
  console.log(a8)
  console.log(typeof(a8))

  console.log(typeof(m))
  
  let y9 = (Number(m))
  console.log(y9)
  console.log(typeof(y9))
  
  let z9 = (String(m))
  console.log(z9)
  console.log(typeof(z9))

  let a9 = (Boolean(m))
  console.log(a9);
  console.log(typeof(a9))

  console.log(typeof(n))
  
  let y0 = (Number(n))
  console.log(y0)
  console.log(typeof(y0))
  
  let z0 = (String(n))
  console.log(z0)
  console.log(typeof(z0))

  let a0 = (Boolean(n))
  console.log(a0)
  console.log(typeof(a0))

  console.log(typeof(o))
  
  let yy = (Number(o))
  console.log(yy)
  console.log(typeof(yy))
  
  let zz = (String(o))
  console.log(zz)
  console.log(typeof(zz))

  let aa = (Boolean(o))
  console.log(aa)
  console.log(typeof(aa))

  console.log(typeof(p))
         
  let yY = (Number(p))
  console.log(yY)
  console.log(typeof(yY))
  
  let zZ = (String(p))
  console.log(zZ)
  console.log(typeof(zZ))

  let aA = (Boolean(p))
  console.log(aA)
  console.log(typeof(aA))

  console.log(typeof(q))
  
  let Yy = (Number(q))
  console.log(Yy)
  console.log(typeof(Yy))
  
  let Zz = (String(q))
  console.log(Zz)
  console.log(typeof(Zz))

  let Aa = (Boolean(q))
  console.log(Aa)
  console.log(typeof(Aa))

  console.log(typeof(r))
  
  let A = (Number(r))
  console.log(A)
  console.log(typeof(A))
  
  let B = (String(r))
  console.log(B)
  console.log(typeof(B))

  let C = (Boolean(r))
  console.log(C)
  console.log(typeof(C))

  console.log(typeof(s))

  let D = (Number(s))
  console.log(D)
  console.log(typeof(D))
  
  let E = (String(s))
  console.log(E)
  console.log(typeof(E))

  let F = (Boolean(s))
  console.log(F)
  console.log(typeof(F))

  console.log(typeof(t))
  
  let G = (Number(t))
  console.log(G)
  console.log(typeof(G))
  
  let H = (String(t))
  console.log(H)
  console.log(typeof(H))

  let I = (Boolean(t))
  console.log(I)
  console.log(typeof(I))

  console.log(typeof(u))
  
  let J = (Number(u))
  console.log(J)
  console.log(typeof(J))
  
  let K = (String(u))
  console.log(K)
  console.log(typeof(K))

  let L = (Boolean(u))
  console.log(L)
  console.log(typeof(L))

  console.log(typeof(v))
  
  let M = (Number(v))
  console.log(M)
  console.log(typeof(M))
  
  let N = (String(v))
  console.log(N)
  console.log(typeof(N))

  let O = (Boolean(v))
  console.log(O)
  console.log(typeof(O))
 }    
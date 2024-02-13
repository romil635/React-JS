// Q -1 

{
    
    var t = function u() {

        console.log(t === u);
    }
    t()
} 

// Q -2

{
    let h = 1
    let i = 2
    let j = '1'
    let A = h + i + j

    console.log(A)
}

{
    let k = '1'
    let l = 2
    let m = 1
    let B = k + l + m

    console.log(B)
}

// Q - 3

{
    let n = "9"
    let o = "19"  
    let p = n > o

    console.log(p)
}

{
    let q = "09"
    let r = "19"
    let s = q > r

    console.log(s)
}

// Q - 4

{
    const a = new Boolean(false)

    if (a) {
        console.log(1)
    }

    else {
        console.log(2)
    }
    console.log(typeof (a))
}

// Q - 5

{
    let b = 100
    let c = b++
    let d = ++b

    let e = (b == c) ? d++ : ++d

    console.log("e:" + e)
}

// Q - 6

{
    var g = 0

    if (10 > 9 > 8) {
        g += 1
    }
    console.log(g)
}
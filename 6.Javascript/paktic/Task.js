/* Q - 1 */

var a = 1 + 2 * 3
console.log(a);

var b = 1 + "2" * 3
console.log(b);

var c = "1" + "2" * 3
console.log(c);

/* Q - 2 */

var d = 1 + 2 ** 3 / 2 - 1
console.log(d);

var e = 9 / 2 * 3
console.log(e);

var f = 9 / (2 * 3)
console.log(f)

/* Q - 3 */

// var g = 1; g++;
// alert(`${g}`)
// console.log(g);

// var h = 1
// alert(`${++h}`)

// var i = 1
// alert(`${i++}`)
// console.log(i)
// console.log(typeof (i))

/* Q - 4 */

const j = 1 == `01`
console.log(j)

const k = 1 === `01`
console.log(k);

const l = "1" == `01`
console.log(l);

{
    let m = "1" == "01"
    console.log(m);
}

{
    let n = "1" == 0 + 1
    console.log(n);
}

{
    let o = "1" == 0 + "1"
    console.log(o);
}

{
    let p = "1" == 0 * 1
    console.log(p);
}

{
    let q = "1" == 0 * "1"
    console.log(q);
}

/* Q - 5 */

{
    const r = true && false
    console.log(r);
}

{
    const s = true && false || true
    console.log(s);
}

{
    const t = true && false || !true
    console.log(t);
}

{
    const u = !(true && false)
    console.log(u);
}

/* Q - 6 */

// var string1 ="123";
// var intvalue = 123;
// alert( string1 + intvalue );
// alert(`${string1} + ${intvalue}`);

/* Q - 7 */

let mark = 37;
let marks = (mark < 35) ? "Fail" : "Pass";
document.write(marks);

/* Q - 8 */

{
    var v = 5
    var newelement = document.createElement("p");
    newelement.textContent = (v === "5");
    document.body.appendChild(newelement);
}

/* Q -9 */

function height() {
    var height = 200;
    var type = (height >= 190) ? "tall" : "short";
    console.log(type);
    return type;
}
var w = height();
document.write(w)

/* Q - 10 */

{
    let x = "1";
    let y = 5;
    console.log(typeof(x));
    console.log(typeof(y));
}
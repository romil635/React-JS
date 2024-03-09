toString()
{
    let Number  = 25;
    console.log(typeof(Number));

    let Number1 = Number.toString();
    console.log(Number1);
    console.log(typeof(Number1));
}
{
    let Number2 = (20+12).toString();
    console.log(Number2);
}
{
    let Number3 = (180).toString();
    console.log(Number3);
    console.log(typeof(Number3));
}


// toExponential()
{
    let  expo = 2500000

    let expo1  = expo.toExponential();
    console.log(expo1);
}
{
    let expo2 = 250;
    let expo3 = expo2.toExponential(15);
    console.log(expo3);
}
{
    let expo4 = 435;
    let expo5 = expo4.toExponential();
    console.log(expo5);

    let expo6 =expo4.toExponential(3);
    console.log(expo6);
}


// toFixed()
{
    let fix = 5.4545

    let fix1 = fix.toFixed()
    console.log(fix1);
}
{
    let fix2 = 4.47578;
    let fix3  = fix2.toFixed(30)
    console.log(fix3);
}
{
    let fix4 = 7.5080;
    let fix5  = fix4.toFixed();
    console.log(fix5);

    let fix6 =fix4.toFixed(46);
    console.log(fix6);
}


// toPercision()
{
    let pre = 3
    let pre1 = pre.toPrecision();

    console.log(pre1);
}
{
    let pre2 = 7
    let pre3 = pre2.toPrecision(2);

    console.log(pre3);
}
{
  let pre4 = 9
  let pre5 = pre4.toPrecision(1);
  let pre6 = pre4.toPrecision(2);
  let pre7 = pre4.toPrecision(3);
  let pre8 = pre4.toPrecision(4);

  console.log(pre4);
  console.log(pre5);
  console.log(pre6);
  console.log(pre7);
  console.log(pre8);
}


// toValueOf()
{
    const Num = 356
    let num1 = Num.valueOf();

    console.log(num1);
}
{
    let num2 = (34+45-23);
    console.log(num2);
}
{
    let num3 = (124/2*3+4-10).valueOf();
    console.log(num3);
    console.log(typeof(num3));
}
let array = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

  let array2 = array.sort((a, b) => a - b);

  let array3 = array2.filter((num) => num < 40);

  console.log(array3);
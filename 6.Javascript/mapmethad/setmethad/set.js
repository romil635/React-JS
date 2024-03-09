// ----->>>>> set() <<<<<------
// new Set()
{
    const a = new Set([35 ,56 ,766 , 85]);
    console.log(a);
    console.log(a.size);
}
{
    let M = new Set([
        [24],
        [54],
        [65],
        [55],
        [94]
    ]);
    console.log(M);
    console.log(M.size);
}
{
    const L = new Set(["apple" , "banana" , "orange" , "mango" , "lichi" , "pineapple" , "guava"]);
    console.log(L);
    console.log(L.size);
}

// add()
{
    let Birds = new Set();

    Birds.add("Sparrow");
    Birds.add("Crow");
    Birds.add("Peacock");

    console.log(Birds);
}
{
    const Fruits = new Set();

    let a = "apple";
    let b = "banana";
    let c = "orange";
    let d = "mango";
    let e = "lichi";
    let f = "pineapple";
    let g = "guava";

    Fruits.add(a);
    Fruits.add(b);
    Fruits.add(c);
    Fruits.add(d);
    Fruits.add(e);
    Fruits.add(f);
    Fruits.add(g);

    console.log(Fruits);
    console.log(Fruits.size);
}
{
    const Animal = new Set(["Lion" , "Tiger"]);
    console.log(Animal);

    Animal.add("Elephant");
    Animal.add("Deer");
    Animal.add("Zebra");

    console.log(Animal);
}

// delete()
{
    const Car = new Set(["BMW" , "KIA" , "SWIFT"]);
    Car.delete("SWIFT");

    console.log(Car);
}
{
    const Vagetable = new Set(["Potato" , "Tomato" , "Ladyfinger" , "Carret"]);
    Vagetable.delete("Carret");
    console.log(Vagetable);
}
{
    const Animal = new Set(["Zerraf" , "Zebra" , "Lion" , "Tiger"]);
    Animal.delete("Zebra");
    console.log(Animal);
}

// has()
{
    const HAS = new Set(["Vagetable" , "Animal" , "Car" , "Fruits"]);
    let confirmation = HAS.has("Animal");
    console.log(confirmation);
}
{
    const Animal = new Set(["Zerraf", "Zebra", "Lion", "Tiger"]);
    let confirm = Animal.has("Panda");
    console.log(confirm);
}
{
    const Fruits = new Set(["apple" , "banana" , "orange" , "mango" , "lichi" , "pineapple" , "guava"]);
    let Fruit = Fruits.has("Coconut");
    console.log(Fruit);
    let F = Fruits.has("pineapple");
    console.log(F);
}

// Values()
{
    const Coldeinks = new Set(["Maza" , "Mango" , "Coca Cola"]);

   console.log(Coldeinks.values());
}
{
   const Alphabets = new Set(["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h"]);
   let A = Alphabets.values();
 
   console.log(A);
}
{
   const Variables = new Set(["var" , "let" , "const"]);
   console.log(Variables.values());
   let Var = Variables.values();

   console.log(Var);
}
// ----->>>>> map() <<<<<------
new Map()
{
    const map = new Map([
        ["option-1", 28],
        ["option-2", 98],
    ])
    console.log(map);
    console.log(map.size);
}
{
    const mAp = new Map([
        ["age", 18],
        ["age", 19],
        ["age", 20],
        ["age", 21],
    ])
    console.log(mAp);
}
{
    let maP = new Map([
        ["name", "ysha"],
        ["age", 30],
        ["city", "bangalore"],
        ["job", "software development"],
    ])
    console.log(maP);
    console.log(maP.size);
}

// set()
{
    const Set = new Map();
    Set.set("option-1" , "ice cream");
    Set.set("option-2" , "candle");
    Set.set("option-3" , "candy")

    console.log(Set);
}
{
    const sEt = new Map();
    sEt.set("Human")
    sEt.set("Birds")
    sEt.set("Animals")
    sEt.set("Insects")

    console.log(sEt);
}
{
    const set = new Map();
    set.set("name", "sagar");
    set.set("age", 23);
    set.set("city", "ahemadabad");
    set.set("country", "India");
    set.set("job", "web devalopament");
    set.set("phone", "6359358506");
    set.set("email", "<EMAIL>");
    console.log(set);
}

// get()
{
    const get = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    console.log(get);
    console.log(get.get("item-1"));
}
{
    const Get = new Map([
        ["item-1" , "Sparrow"],
        ["item-2" , "Parrot"],
        ["item-3" , "Peacock"]
    ]);
    Get.set("item-1" , "Parrot");

    console.log(Get);
    console.log(Get.get("item-1"));
}
{
    const GeT = new Map([
        ["item-1" , "Fz-x"],
        ["item-2" , "Fz-s"],
        ["item-3" , "Suzuki"]
    ]);
}
{
    console.log(GeT);
    console.log(GeT.get("item-2"));
}

// delete()
{
    const newmap = new Map([
    ["item-1" , "car"],
    ["item-2" , "bus"],
    ["item-3" , "truck"]
    ]);

   console.log(newmap);
   console.log(newmap.delete("item-1"));
   console.log(newmap);
}
{
        const newmap = new Map([
            ["item-1" , "Sparrow"],
            ["item-2" , "Parrot"],
            ["item-3" , "Peacock"]
    ]);

   console.log(newmap);
   console.log(newmap.delete("item-3"));
   console.log(newmap);
}
{
        const newmap = new Map([
            ["item-1" , "Fz-x"],
            ["item-2" , "Fz-s"],
            ["item-3" , "Suzuki"]
    ]);

   console.log(newmap);
   console.log(newmap.delete("item-2"));
   console.log(newmap);
}

// has()
{
    const Has = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "bike"],
        ["item-4" , "truck"]
    ])
    
    console.log(Has.has("item-3"));
}

{
    const HAS = new Map([
        ["item-1" , "cow"],
        ["item-2" , "buffalo"],
        ["item-3" , "goat"],
        ["item-4" , "ship"]
    ])
    
    HAS.delete("item-2");
    console.log(HAS);

    const hasss = HAS.has("item-3");
    console.log(hasss);

    console.log(HAS.size);
}
{
    let HaS = new Map([
        ["item-1" , "cat"],
        ["item-2" , "dog"],
        ["item-3" , "monkey"],
        ["item-4" , "fish"]
    ])
    HaS.delete("item-1");
    console.log(HaS);

    let hAs = HaS.has("item-1");
    console.log(hAs);
}

// entries()
{
    const newmap = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    let max = "";

    for(const x of newmap.entries()){
        max += x + "<br>" ;
    }

    document.getElementById("element").innerHTML = max;
}
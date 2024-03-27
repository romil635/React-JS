/* Javascript Map Methods */

/*

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map

*/

/* Methods */

{
    /* You can create a Map by passing an Array to the new Map() constructor */

    const Data = new Map([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])

    console.log(Data)
    console.log(Data.size)

}

{

    /* The set() method can also be used to change existing Map values */

    const newmap = new Map()

    newmap.set("item-1" , "car")
    newmap.set("item-2" , "bus")
    newmap.set("item-3" , "truck")
    newmap.set("item-1" , 50 )

    console.log(newmap)

}

{
    /* The get() method gets the value of a key in a Map */

    const newmap = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    newmap.set("item-1" , "truck")

    console.log(newmap)
    console.log(newmap.get("item-1"))
}

{
    /* The size property returns the number of elements in a Map */

    const Data = new Map([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80],
        ["option-4" , 80]
    ])
    const sizes = Data.size
    console.log(sizes)
}  

{
    /* The delete() method removes a Map element */

    const newmap = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

   console.log(newmap)
   console.log(newmap.delete("item-1"))
   console.log(newmap)
} 

{
    /* The has() method returns true if a key exists in a Map */
    
    const Data = new Map([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])
    
    console.log(Data.has("option-4"))
}

{
    const Data = new Map([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])
    
    Data.delete("option-5")

    const hasss = Data.has("option-5")

    console.log(hasss)

    console.log(Data.size)

}

/* Note : forEach() after function lecture */

{
    const newmap = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    let mapitem = ""

    for(const x of newmap.entries())
    {
        mapitem += x + "<br>" 
    }

    // document.getElementById("element").innerHTML = mapitem
}


/* Set Methods */

/*

new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
values()	Returns an iterator with all the values in a Set
size	Returns the number of elements in a Set

*/

{
    const x = new Set([10,20,30])
    console.log(x)
    console.log(x.size)
  }
  
  {
    const x = new Set()
    
    x.add("a")
    x.add("b")
    x.add("c")
    x.add("d")
  
    console.log(x)

    console.log(x.size)
  }
  
  {
    const newset = new Set()
    
    const a = "a"
    const b = "b"
    const c = "c"
    
    newset.add(a)
    newset.add(b)
    newset.add(c)
  
    console.log(newset)
    console.log(newset.size)
  }
  
  {
    const x = new Set(["a" , "b" , "c"])
    
    x.delete("a")
  
    console.log(x)
    console.log(x.size)
  }
  
  {
    const x = new Set(["a" , "b" , "c"])
    
    let y = x.has("a")
  
    console.log(y)
  }
  
  {
    const x = new Set(["a" , "b" , "c"])
    
    let y = x.values()
  
    console.log(y)
  }
  
  {
    const x = new Set(["a" , "b" , "c"])
    
    let y = x.delete("a")
  
    console.log(y)
    console.log(x)
  }
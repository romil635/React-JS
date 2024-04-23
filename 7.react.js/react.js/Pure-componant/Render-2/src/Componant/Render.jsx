import React from 'react'

const item = [
    {   
        id : 1,
        name : "apple",
        price : "100rs/kg",
        color : "red",
        img : "https://w0.peakpx.com/wallpaper/160/130/HD-wallpaper-apples-fruit-ripe-red-apples-fresh-fruit-apple.jpg",
        catagory : "fruit"
    },
    {
        id : 2,
        name : "guava",
        price : "80rs/kg",
        color: "green",
        img : "https://t3.ftcdn.net/jpg/04/58/75/46/360_F_458754648_KqX9vlUWFf7i7vvlQy4KrmzWzEJQw7pW.jpg",
        catagory : "fruit"
    },
    {
        id : 3,
        name : "orange",
        price : "70rs/piece",
        color : "orange",
        img : "https://www.heythattastesgood.com/wp-content/uploads/2022/06/orange-fruits.jpg",
        catagory : "fruit"
    },
    {
        id : 4,
        name : "mango",
        price : "150rs/kg",
        color : "yellow",
        img : "https://static.wixstatic.com/media/11062b_012d6c9a50fe43e7be6de53eefc62657~mv2.jpg/v1/fill/w_540,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_012d6c9a50fe43e7be6de53eefc62657~mv2.jpg",
        catagory : "fruit"
    }
]

const Render = () => {
    const FilterData = item.filter((data) => data.catagory === "fruit");
    const Render_List = FilterData.map(
        (item) =>  <div className="flex justify-center items-center h-screen select-none ">
        <div className="max-w-[350px] h-fit-conetent mx-4 shadow-xl shadow-orange-600 bg-orange-500 text-white">
          <div>
            <img 
              className="w-[350px] h-[250px] object-cover"
              src={item.img}
              alt=""
            />
          </div>
  
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-2 ">{item.name}</h1>
            <p>
              {item.price}
            </p>
            <p>
                {item.color}
            </p>
            <a className="btn inline-block mt-5 text-orange-700 bg-white text-center" href="">
              BUY
            </a>
          </div>
        </div>
      </div>)
  return (
    <>
      
        {Render_List}
      
    </>
  )
}

export default Render;
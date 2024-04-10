import './App.css'
// import List_Rendering  from './Conditional/List_Rendering';


const Product = [
  {
    id: 1,
    name: "iphone",
    price:80000,
    disc:"Best IOS Device",
    discount:"10%",
    color:"red",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 2,
    name: "iphone15pro",
    price:90000,
    disc:"Best IOS Device",
    discount:"8%",
    color:"black",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/81+GIkwqLIL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 3,
    name: "iphone15",
    price:85000,
    disc:"Best IOS Device",
    discount:"8%",
    color:"gray",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    name: "iphone14",
    price:65000,
    disc:"Best IOS Device",
    discount:"14%",
    color:"blue",
    catagories:"mobile",
    img:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 5,
    name: "fire-bolt phoenix",
    price:189,
    disc:"Best IOS Device",
    discount:"5%",
    color:"black",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61SaUIiYu2L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 6,
    name: "boat lunar orb",
    price:1899,
    disc:"Best IOS Device",
    discount:"5%",
    color:"silver",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61zlQHkE2ML._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 7,
    name: "boat wave lynk",
    price:1649,
    disc:"Best IOS Device",
    discount:"12%",
    color:"white",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/31SWXWFWl0L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 8,
    name: "noise",
    price:5000,
    disc:"Best Watch",
    discount:"5%",
    color:"black",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/71ZNB1qCdXL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 9,
    name: "apple",
    price:30000,
    disc:"Best Watch",
    discount:"7%",
    color:"pink",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61gEb1f208L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 10,
    name: "firebolt",
    price:3000,
    disc:"Best Watch",
    discount:"10%",
    color:"black",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/71aDgJCJviL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 11,
    name: "oneplus",
    price:6000,
    disc:"Best Watch",
    discount:"10%",
    color:"blue",
    catagories:"watch",
    img:"https://m.media-amazon.com/images/I/61w32vv7d7L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 12,
    name: "Lg",
    price:32990,
    disc:"108 cm",
    discount:"5%",
    color:"Gray",
    catagories:"Tv",
    img:"https://m.media-amazon.com/images/I/8195aYGDl9L._SL1500_.jpg"
  },
  {
    id: 13,
    name: "OnePlus",
    price:7650,
    disc:"108 cm",
    discount:"3%",
    color:"Black",
    catagories:"Tv",
    img:"https://m.media-amazon.com/images/I/819SRH2DKBL._SL1500_.jpg"
  },
  {
    id: 14,
    name: "Sony",
    price:57990,
    disc:"139 cm",
    discount:"5%",
    color:"Black",
    catagories:"Tv",
    img:"https://m.media-amazon.com/images/I/51eiFYQhwBL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: 15,
    name: "Samsung",
    price:44990,
    disc:"145 cm",
    discount:"4%",
    color:"Titan Gray",
    catagories:"Tv",
    img:"https://m.media-amazon.com/images/I/41F20jeVASL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: 16,
    name: "DENVER",
    price:217,
    discount:"4%",
    color:"Titan Gray",
    catagories:"Perfum",
    img:"https://rukminim2.flixcart.com/image/612/612/kqb8pzk0/deodorant/i/u/y/330-hamilton-and-imperial-combo-2-deodorant-spray-denver-men-original-imag4cnajwzryfdy.jpeg?q=70"
  },
  {
    id: 17,
    name: "Patel",
    price:250,
    discount:"10%",
    color:"Titan Gray",
    catagories:"Perfum",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/l/z/9/30-prince-eau-de-parfum-patel-men-women-original-imagyj8t8gvufuqt.jpeg?q=70"
  },
  {
    id: 18,
    name: "Bella vita",
    price:565,
    discount:"5%",
    color:"",
    catagories:"Perfum",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/6/w/9/40-fresh-perfume-skai-aquatic-perfume-combo-2x20ml-with-citrus-original-imagz5gdyggcjrjb.jpeg?q=70"
  },
  {
    id: 19,
    name: "RAMSONS",
    price:245,
    discount:"4%",
    color:"",
    catagories:"Perfum",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/p/6/9/300-rhymes-gift-pack-eau-de-parfum-ramsons-men-women-original-imagnbfcdn66tbhd.jpeg?q=70"
  },
  i
]

// function App() {
//   const FilterData = Product.filter((data) => data.catagories === "mobile");

//   console.log(FilterData);
//   const Render_List = FilterData.map(
//     (item) => 
//     <div className='row'>
//       <div className="col-4">
//       <div className="border shadow-xl shadow-black  border-solid border-black p-3 m-3">
//         <div className="h-56 w-48">
//         <img className='object-contain' src={item.img} alt="" />
//         </div>
//         <hr />cd 
//         <br /><hr /><br />
//         <div className='text-xl font-bold text-center'>
//           <h1>{item.name}</h1>
//           <span>{item.price}</span><br />
//           <button className='bg-blue-600 h-12 w-36 rounded-3xl'>More Details</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
//   return (
//     <>
//       <ul className='flex'>
//         {Render_List}
//       </ul>
//     </>
//   )
// }

// export default App








function App() {
  const FilterData = Product.filter((data) => data.catagories === "Tv");

  console.log(FilterData);

  const Render_List = FilterData.map(
    (item) => 
    <div className='p-3 mt-20 ms-2 shadow-black shadow-2xl rounder-2xl margin-auto border-r-amber-200 '>
      <div className=" flex-wrap  h-[470px] w-[350px] text-center font-bold text-2xl">
        <div className="h-64 w-64 d-flex  align-items-center">
        <img  className= "ms-14 object-cover"src={item.img} alt="" />
        </div>
        <div className='mt-20'>
          <hr className='border-black'></hr>
          <h1>{item.name}</h1>
          <p>{item.disc}</p>
          <span>{item.price}</span><br></br>
          <button className='bg-cyan-200 h- w-full rounded-lg my-2 ring-1' >Buy Now</button>
        </div>
      </div>
    </div>
  )
  return (
    <>
      <ul className='flex'>
        {Render_List}
      </ul>
    </>
  )
}

export default App

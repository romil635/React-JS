import './App.css'
import Lise_Rendering from './List_Rendering';

const product = [
  {
    id:1,
    name:"iphone",
    price:89000,
    disc:"best product",
    color:"green",
    catagories:"phone",
    img:"https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      id:2,
      name:"iphone",
      price:79000,
      disc:"best product",
      color:"pink",
      catagories:"phone",
      img:"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg"
      },
      {
        id:3,
        name:"iphone15pro",
        price:95000,
        disc:"best product",
        color:"blue",
        catagories:"phone",
        img:"https://m.media-amazon.com/images/I/71PjpS59XLL._AC_UY327_FMwebp_QL65_.jpg"
        },
        {
          id:4,
          name:"i-watch",
          price:90000,
          disc:"best product",
          color:"black",
          catagories:"watch",
          img:"https://m.media-amazon.com/images/I/61Famx7xQwL._AC_UY327_FMwebp_QL65_.jpg"
          },
          {
            id:5,
            name:"semsung",
            price:77000,
            disc:"best product",
            color:"blue",
            catagories:"watch",
            img:"https://m.media-amazon.com/images/I/71+-rwXfrCL._AC_UY327_FMwebp_QL65_.jpg"
            },
           {
            id:6,
            name:"firebolt",
            price:60000,
            disc:"best product",
            color:"black",
            catagories:"watch",
            img:"https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_SR230,210_QL65_.jpg"
            },
            {
              id:7,
              name:"boat",
              price:999,
              disc:"best product",
              color:"black",
              catagories:"bluetooth",
              img:"https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UY327_FMwebp_QL65_.jpg"
              },
              {
                id:8,
                name:"noise",
                price:1399,
                disc:"best product",
                color:"black",
                catagories:"bluetooth",
                img:"https://m.media-amazon.com/images/I/610vkg7hBIL._AC_UL480_FMwebp_QL65_.jpg"
                },
                {
                  id:9,
                  name:"BOSTON LEVIN",
                  price:1299,
                  disc:"best product",
                  color:"blue",
                  catagories:"bluetooth",
                  img:"https://m.media-amazon.com/images/I/61Lv1GzYaZL._AC_UL480_FMwebp_QL65_.jpg"
                  },
  
]


function App() {

   const fillterdata = product.filter((data) => data.catagories === "phone")

   console.log(fillterdata);

   const Render_list = fillterdata.map(
    (item) =>
    <div className="m-2">
      <div className='shadow-xl shadow-gray-500'>
      <div className='object-fill'>
        <img src={item.img} alt="" className='h-[300px] w-[250px] p-2'/>
        </div>
        <div className='p-4'>
          <h1 className='font-bold text-2xl' >{item.name}</h1>
          <p>{item.disc}</p>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
   )

  return (
    <>
      <ul className='flex justify-center items-center h-screen'>
        {Render_list}
      </ul>

        </>
  )
}

export default App




import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import List_Rendering from './List_Rendering'


// const Quotes = [
//   "Every moment matters",
//   "Be a voice is power",
//   "character is power",
//   "All is well",
//   "Be here now"
// ]

const item = [
  {
    id: 1,
    name: "samsung S20Fe",
    price: 30000,
    discount: "10%",
    color: "pink",
    catagories: "Mobile",

    img : "https://m.media-amazon.com/images/I/812yohjGZ2L._SY741_.jpg"

  },
  {
    id: 3,
    name: "samsung S23 Ultra",
    price: 15000,
    discount: "10%",
    color: "Gold",
    catagories: "Mobile",
    img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0BcRPqA3Ir83PJOMF0hx9t30XZtMciOtP7nTfZGITrBJ3dDVR"
  },
  {
    id: 3,
    name: "Vivo X18",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Mobile",
    img:"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1651807558189/e7db3841bf6db0ac7a6f58948e8ab515.png"
  },
  {
    id: 3,
    name: "Vivo X19",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Mobile",
    img : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1585380643397/0559394eab4a2adcf1bc3b1dc63ad25f.png"
  },
  {
    id: 4,
    name: "vivo v29",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Mobile",
    img :"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1692845789974/fff1712895cf005af41bea955ac6972a.png"
  },
  {
    id: 5,
    name: "Vivo v29 pro",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Mobile",
    img: "https://d2xamzlzrdbdbn.cloudfront.net/products/c9aebab1-e28c-4a85-b69d-97d3b9014c0423091139.jpg"
  },
  {
    id: 6,
    name: "Oppo A15s",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Mobile",
    img : "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-f-5g-en/navigation/reno11-f-440_440-purple.png.thumb.webp"
  },
  {
    id: 7,
    name: "Oppo F25",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Mobile",
    img : "https://m.media-amazon.com/images/I/81FeGlImflL._SX679_.jpg"
  },
  {
    id: 8,
    name: "Hp",
    price: 50000,
    discount: "10%",
    color: "black",
    catagories: "Leptop"

  },
  {
    id: 9,
    name: "Dell",
    price: 15000,
    discount: "10%",
    color: "black",
    catagories: "Leptop"
  },

]

function App() {
  const FilterData = item.filter((data) => data.catagories === "Mobile")
  console.log(FilterData);
  const Render_List = FilterData.map(
    (item) =>
    <div className="inline-flex" style={{marginInlineStart: '50px'}}>
      <div>
    <Card style={{width: '18rem'}} className='m-2'>
    <Card.Img variant="top" src={item.img} className='h-[300px] w-[300px] object-contain' />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        {item.price}
      </Card.Text>
      <Button variant="primary" className='btn-sm my-2'>Get More Details</Button>
    </Card.Body>
  </Card>
      </div>
    </div>
  )


  return (
    <>
      <ul>
        {Render_List}
      </ul>
    </>
  )

  
  // const Render_List = Quotes.map((item) => <li>{item}</li>)
  // return (
  //   <>
  //     <ul>
  //       {Render_List}
  //     </ul>
  //   </>
  // )
}

export default App
import React from 'react'


function Status({ name, isDeliverd }) {
  // return <li>{name}</li>
  // if(isDeliverd){
  //     // return <li></li>;
  //     return <li>{name}</li>
  // }
  // return <li><del>{name}</del></li>

  return <li>{isDeliverd ? (name) : (<del>{name}</del>)}</li>

}



const Rendering = () => {
  return (
    <div>
      <h1 className='hading' >Flipkart Explore plus</h1><br></br>
      <div className='pro'>
        <ul className='list'>
          <Status isDeliverd={true} name={"1.Grocery"} />
          <Status isDeliverd={false} name={"2.Mobiles"} />
          <Status isDeliverd={true} name={"3.Fashion"} />
          <Status isDeliverd={false} name={"4.Electronics"} />
          <Status isDeliverd={true} name={"5.Home & Furniture"} />
          <Status isDeliverd={false} name={"6.Appliances"} />
          <Status isDeliverd={true} name={"7.Travel"} />
          <Status isDeliverd={false} name={"8.Beauty"} />
          <Status isDeliverd={true} name={"9.Toys"} />
          <Status isDeliverd={false} name={"10.Tow Wheelers"} />
        </ul>
      </div>
    </div>
  )
}

export default Rendering

import React from 'react'

function Status({name , isDeliverd})
{
      // return <li>{name}</li>
      // if(isDeliverd){
      //   return<li></li>;
      //   return<li>{name}</li>
      // }
      // return<li><del>{name}</del></li>

    return <li>{isDeliverd ?(name):(<del>{name}</del>)}</li>
}
const Rendering = () => {
  return (
    <div>
       <h1>Amazon Deliveries Network</h1>
       <ul>
        <Status isDeliverd={false} name={"1.Amazon Books"}/>
        <Status isDeliverd={true} name={"2.Amazon Mobiles"}/>
        <Status isDeliverd={false} name={"3.Amazon Electronics"}/>
        <Status isDeliverd={true} name={"4.Amazon Groceries"}/>
       </ul>
    </div>
  )
}

export default Rendering

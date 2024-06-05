import React from 'react'


function Recipe({drinkres}){
    return(
        <ol>
            <li> add {drinkres} cups of water.</li>
            <li>Add {drinkres} spoons of solt and {0.5  +drinkres} sopoons of spice</li>
            <li> add {0.5+  drinkres} cups of suger and lemon to taste</li>
            <li> add {drinkres} ice-cube</li>
        </ol>
    );
}

const Juice = () => {
  return (
    <div>
      <h1> juice recipe</h1>
      <h2> for two</h2>
      <Recipe drinkres={2}/>
      <h2>for a gathering </h2>
      <Recipe drinkres={4}/>
    </div>
  )
}

export default Juice

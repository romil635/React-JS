import React from 'react'
import {data ,data1} from './Main1_compo'

const Comp1_c = () => {
  return (
    <div>
      <data.Consumer>
        {
          (name)=>{
            return(
              <>
              <data1.Consumer>
                {
                  ( Age )=>{
                    return(
                      <>
                    <h1>This is {name} and  age {Age}</h1>
                      </>
                    )
                  }
                }
              </data1.Consumer>
              </>
            )
          }
        }
      </data.Consumer>
    </div>
  )
}

export default Comp1_c

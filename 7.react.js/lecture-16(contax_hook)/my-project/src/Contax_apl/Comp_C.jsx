import React from 'react'
import {data , data1} from'./Comp_main'

const Comp_C = () => {
  return (
    <div>
      <data.Consumer>
        {
            (name) => {
                return(
                    <>
                    <data1.Consumer>
                      {
                        (surname) => {
                          return(
                            <>
                      <h1>hello i am {name} and my surname is {surname}</h1>
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

export default Comp_C

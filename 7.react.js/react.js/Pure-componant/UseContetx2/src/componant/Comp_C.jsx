import React from "react";
import { data , data1} from "./Comp_main";
const Comp_C = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <>
            <data1.Consumer>
              {
                (gender) => {
                  return(
                    <>
                    
                    <h1>he is  {name} and his gender is {gender}</h1>
                    </>
                  )
                }
              }
            </data1.Consumer>
            </>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default Comp_C;

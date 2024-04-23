import React from "react";
import Comp_A from "./Comp_A";
import { createContext } from "react";

const data = createContext();
const data1 = createContext();
const Comp_main = () => {
  const name = "harsh karkar";
  const gender = "male";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>this is Componant Main</h1>
          <Comp_A />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default Comp_main;
export { data , data1};

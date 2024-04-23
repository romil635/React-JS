import React, { useContext } from "react";
import { data, data1 } from "./Comp_main";
const Comp_C = () => {
  const firstname = useContext(data);
  const gender = useContext(data1);

  return (
    <div>
      <h1>
        he is {firstname} and his gender is {gender}
      </h1>
    </div>
  );
};

export default Comp_C;

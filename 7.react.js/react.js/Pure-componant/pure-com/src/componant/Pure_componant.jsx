import React from "react";

let guest = 0;
function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

const Pure_componant = () => {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
};

export default Pure_componant;

import React from "react";

const Button = () => {
  return (
    <button className="text-blue-300 bg-red-700  border-2 border-green-200 px-2 py-2 my-2 mx-2 rounded-full w-28 hover:text-black hover:bg-green-400 hover:border-blue-800">
      Click me
    </button>
  );
};
export const Button1 = () => {
  return (
    <button className="text-blue-300 bg-lime-600  border-2 border-green-200 px-2 py-2 my-2 mx-2 rounded-full w-28 hover:text-black hover:bg-green-400 hover:border-blue-800">
      Click me
    </button>
  );
};
export const Button2 = () => {
  return (
    <button className="text-blue-300 bg-yellow-500  border-2 border-green-200 px-2 py-2 my-2 mx-2 rounded-full w-28 hover:text-black hover:bg-green-400 hover:border-blue-800">
      Click me
    </button>
  );
};

const Resolve = () => {
  return (
    <>
      <Button />
      <Button1 />
      <Button2 />
    </>
  );
};

export default Resolve;

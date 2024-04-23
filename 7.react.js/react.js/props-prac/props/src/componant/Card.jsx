import React from "react";


const Card = (props) => {
  return (
    <div className="flex justify-center items-center h-screen select-none ">
      <div className="max-w-[350px] h-fit-conetent mx-4 shadow-xl shadow-orange-600 bg-orange-500 text-white">
        <div>
          <img 
            className="w-[350px] h-[250px] object-cover"
            src={props.Img}
            alt=""
          />
        </div>

        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2 ">{props.title}</h1>
          <p>
            {props.history}
          </p>
          <a className="btn inline-block mt-5 text-orange-700 bg-white " href="">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

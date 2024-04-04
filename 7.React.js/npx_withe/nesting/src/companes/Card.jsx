import React from "react";

const Card1 = (props) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-[350px] h-fit-conetent mx-4 shadow-xl shadow-gray-600">
                <div>
                    <img
                        className="w-[350px] h-[250px] object-cover"
                        src={props.img}
                        alt=""
                    />
                </div>

                <div className="p-4">
                    <h1 className="text-2x1 font-bold mb-2 ">{props.title}</h1>
                    <p>
                    Somnath's first temple is said to have existed 2000 years ago. Is. In 649 AD, King Maitre of Vallabhini built a second temple in place of the temple and renovated it. In 725, the old ruler of Sindh took his army and attacked the temple and destroyed the temple.
                    </p>
                    <a className="btn inline-block mt-5 " href="">
                        {props.name}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card1;
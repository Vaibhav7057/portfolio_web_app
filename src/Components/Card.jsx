import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="w-[150px] h-[150px] px-4 py-3 shadow-xl border-2 rounded-lg border-slate-200  flex flex-col justify-around items-center hover:scale-110 transition-all ">
      <div className="w-[60px] h-[60px] p-2 rounded-full shadow-xl ">
        <img src={image} alt={image} />
      </div>
      <p className=" capitalize text-md text-favtext font-medium ">{name}</p>
    </div>
  );
};

export default Card;

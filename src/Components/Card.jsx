import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="w-[150px] h-[150px] dark:bg-darkbg2 px-4 py-3 shadow-xl border-2 rounded-lg border-slate-200  flex flex-col justify-around items-center hover:scale-110 transition-all ">
      <div className="w-[60px] h-[60px] p-2 rounded-full shadow-xl dark:shadow-darkt3 dark:bg-darkt2 ">
        <img src={image} alt={image} />
      </div>
      <p className=" capitalize text-md text-favtext dark:text-darkt2 font-medium ">{name}</p>
    </div>
  );
};

export default Card;

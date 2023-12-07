import React from "react";

const Pagenotfound = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-yellow-400 ">
      <h4 className="text-red-600 font-bold mb-10 text-[28px] md:text-[3vmax] ">
        404 page not found
      </h4>
      <a href="#home">
        <button className="bg-red-600 text-white rounded-lg py-2 px-4 text-sm md:text-md font-medium ">
          Go to Homepage
        </button>
      </a>
    </div>
  );
};

export default Pagenotfound;

import React from "react";

const Progressbar = ({ name, value }) => {
  const barvalue = {
    width: `${value}%`,
  };
  return (
    <div>
      <div className="flex justify-between mb-1 ">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {name}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {value}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div className="bg-blue-600 h-2 rounded-full" style={barvalue}></div>
      </div>
    </div>
  );
};

export default Progressbar;

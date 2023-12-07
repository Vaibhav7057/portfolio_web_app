import React from "react";

const Details = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li className="font-medium text-lg text-favtext">
        Name :{" "}
        <span className="italic text-slate-600 ">Vaibhav Bhauji Gedam</span>
      </li>
      <li className="font-medium text-lg text-favtext">
        Father Name :{" "}
        <span className="italic text-slate-600 ">Bhauji Gedam</span>
      </li>
      <li className="font-medium text-lg text-favtext">
        Marital Status :{" "}
        <span className="italic text-slate-600 ">Unmarried</span>
      </li>
      <li className="font-medium text-lg text-favtext">
        DOB : <span className="italic text-slate-600 ">06/09/1997</span>
      </li>
      <li className="font-medium text-lg text-favtext">
        Gender : <span className="italic text-slate-600 ">Male</span>
      </li>
      <li className="font-medium text-lg text-favtext">
        Languages Known :{" "}
        <span className="italic text-slate-600 ">English, Marathi, Hindi</span>
      </li>
    </ul>
  );
};

export default Details;

// className="font-medium text-slate-600"

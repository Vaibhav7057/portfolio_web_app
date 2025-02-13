import React from "react";

const Details = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li className="font-medium text-lg text-favtext dark:text-darkt1">
        Name :{" "}
        <span className="italic text-slate-600 dark:text-darkt3 ">Vaibhav Bhauji Gedam</span>
      </li>
      <li className="font-medium text-lg text-favtext dark:text-darkt1">
        Father Name :{" "}
        <span className="italic text-slate-600 dark:text-darkt3 ">Bhauji Gedam</span>
      </li>
      <li className="font-medium text-lg text-favtext dark:text-darkt1">
        Marital Status :{" "}
        <span className="italic text-slate-600 dark:text-darkt3 ">Unmarried</span>
      </li>
      <li className="font-medium text-lg text-favtext dark:text-darkt1">
        DOB : <span className="italic text-slate-600 dark:text-darkt3 ">06/09/1997</span>
      </li>
      <li className="font-medium text-lg text-favtext dark:text-darkt1">
        Gender : <span className="italic text-slate-600 dark:text-darkt3 ">Male</span>
      </li>
      <li className="font-medium text-lg text-favtext dark:text-darkt1">
        Languages Known :{" "}
        <span className="italic text-slate-600 dark:text-darkt3 ">English, Marathi, Hindi</span>
      </li>
    </ul>
  );
};

export default Details;

// className="font-medium text-slate-600"

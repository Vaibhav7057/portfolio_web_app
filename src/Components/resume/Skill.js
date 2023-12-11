import React from "react";

const Skill = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li className="font-medium text-lg text-favtext">Comunication Skills</li>
      <li className="font-medium text-lg text-favtext">Typing</li>
      <li>
        <h3 className="font-medium text-lg text-favtext">Computer Languages</h3>
        <p className="italic text-slate-600 text-lg ">Javascript, Html, CSS</p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext">Libraries</h3>
        <p className="italic text-slate-600 text-lg ">
          React Js, Redux Toolkit, Tailwind Css, Express Js, Node Js, Mongo DB
        </p>
      </li>
    </ul>
  );
};

export default Skill;

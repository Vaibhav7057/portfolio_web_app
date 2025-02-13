import React from "react";

const Skill = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li className="font-medium text-lg text-favtext dark:text-darkt1">Comunication Skills</li>
      <li className="font-medium text-lg text-favtext dark:text-darkt1">Typing</li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Computer Languages</h3>
        <p className="italic text-slate-600 text-lg dark:text-darkt3 ">Javascript, Html, CSS</p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Libraries</h3>
        <p className="italic text-slate-600 text-lg dark:text-darkt3 ">
          React Js, Redux Toolkit, Tailwind Css, Express Js, Node Js, Mongo DB
        </p>
      </li>
    </ul>
  );
};

export default Skill;

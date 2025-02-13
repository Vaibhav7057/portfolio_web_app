import React from "react";

const Courses = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <h2 className="font-bold text-lg text-black dark:text-darkt1">
        RELEVEL BY UNACADEMY{" "}
        <span className="italic font-medium text-slate-500 dark:text-darkt2 ">2022-2023</span>
      </h2>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">
          Computer Science Fundamentals
        </h3>
        <p className="italic dark:text-darkt3">
          Basics of programming - Loops, conditionals, function
        </p>
        <p className="italic dark:text-darkt3">
          Basic Data Structures - Arrays, stacks, linked lists, queues,
          recursion
        </p>
        <p className="italic dark:text-darkt3">
          Computer networks, Database management, Operating Systems
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">
          Frontend Development
        </h3>
        <p className="italic dark:text-darkt3">
          HTML, CSS, Responsive Design, javascript fundamentals, React.Js Basic
          Knowledge of APIs
        </p>
      </li>
    </ul>
  );
};

export default Courses;

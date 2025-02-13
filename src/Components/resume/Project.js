import React from "react";

const Project = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Personal Portfolio</h3>
        <p className="italic dark:text-darkt3">
          My personal portfolio website is built with some curiosity using my
          knowledge
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Todo List</h3>
        <p className="italic dark:text-darkt3">
          Todo list is something simple but great stuff to learn logic, and
          practice skills
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Currency Converter</h3>
        <p className="italic dark:text-darkt3">
          Here we can convert any currency to any other currency and all
          currency rates are live
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">E-commerce website</h3>
        <p className="italic dark:text-darkt3">
          currently working on this project, this is a MERN stack project
        </p>
      </li>
    </ul>
  );
};

export default Project;

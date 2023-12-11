import React from "react";

const Projectcard = ({ imgadd, projectName, active, gitlink, applink }) => {
  return (
    <div className="w-[240px] h-[210px] shadow-lg border-2 border-slate-200 rounded-md bg-[#04364A] ">
      <div className=" h-[150px] w-[234px] overflow-hidden p-1 m-auto rounded-lg">
        <img src={imgadd} alt="project" />
      </div>
      <p className="font-bold text-md text-slate-300 py-0.5 ml-2">
        {projectName}
      </p>
      <div className="flex justify-between px-1">
        <a href={gitlink} target="_blank" rel="noreferrer">
          <button
            className="py-0.5 px-3 bg-[#265073] text-slate-200 text-sm rounded-sm hover:text-md hover:text-white hover:cursor-pointer "
            disabled={!active}
          >
            Github
          </button>
        </a>
        <a href={applink} target="_blank" rel="noreferrer">
          <button
            className={`py-0.5 px-3 bg-[#265073] text-slate-200 text-sm rounded-sm hover:text-md hover:text-white ${
              active ? "hover:cursor-pointer" : ""
            }`}
            disabled={!active}
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projectcard;

import React from "react";
import { details } from "../Constants/image.js";

import { NavLink, Outlet } from "react-router-dom";

const Resume = () => {
  return (
    <div id="resume" className="bg-bgcolor">
      <div className="flex flex-col px-10 py-1 pt-16 ">
        <div className="flex  justify-center items-center flex-col mb-10 md:mb-0 pt-1">
          <h3 className="text-[28px] md:text-[3vmax] font-bold text-favtext">
            My <span className="text-dor">Resume</span>
          </h3>
          <p className="text-sm md:text-lg font-medium text-favtext">
            My formal Bio Details
          </p>
        </div>

        <div className="flex flex-1 md:flex-row flex-col">
          <div className="flex items-center py-5 flex-col justify-center flex-1 ">
            <div className="flex items-center">
              <ul className="flex flex-col gap-4 bg-dor w-9 h-[370px] justify-center items-center ">
                {details.map((ele, i) => (
                  <li key={ele.name + i} className="w-[25px]">
                    {" "}
                    <img src={ele.img} alt={ele.name} />{" "}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-2.5 w-[200px] h-[380px] justify-center items-start">
                {details.map((ele, i) => (
                  <NavLink
                    to={ele.link}
                    key={ele.name + i}
                    className="hover:bg-pink-100 cursor-pointer font-medium pl-5 w-full py-1 hover:pl-7 rounded-r-full "
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "#FF9209" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                  >
                    {ele.name}
                  </NavLink>
                ))}
              </ul>
              <div className="h-[330px] w-1 bg-slate-300 shadow-xl ml-10 "></div>
            </div>
          </div>

          <div className="flex-1 md:pl-[40px] pt-16 flex justify-between items-center flex-col">
            <div className="border-2 border-slate-300 h-[330px] w-full overflow-y-auto mb-3 p-3 ">
              <Outlet />
            </div>
            <a
              href="https://drive.google.com/file/d/15enGjGQLMFRpLPf8TT7PFGrqhVCiQPy1/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="transition-all hover:scale-[107%] mb-4 text-white font-medium px-5 py-1.5 rounded-full  bg-gradient-to-r from-yellow-500  to-dor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

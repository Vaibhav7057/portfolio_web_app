import React, { useState } from "react";
import Projectcard from "../Components/Projectcard";
import { projects } from "../Constants/image.js";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Projects = () => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
  return (
    <div id="projects" className="bg-white">
      <div className="flex flex-col px-10 py-4 pt-14 ">
        <div className="flex  justify-center items-center flex-col mb-10 md:mb-0 pt-3">
          <h3 className="text-[28px] md:text-[3vmax] font-bold text-favtext">
            My <span className="text-dor">Projects</span>
          </h3>
          <p className="text-sm md:text-lg font-medium text-favtext">
            My Awesome Work
          </p>
        </div>

        <div className="flex flex-1 md:flex-row flex-col ">
          <div className="flex items-center gap-4 py-12 flex-col flex-1 ">
            <h4 className="text-[15px] sm:text-[16px] lg:text-[1.3vmax] font-bold text-favtext mt-10">
              Turning Vision Into Reality With{" "}
              <span className="text-dor">Code</span> And{" "}
              <span className="text-green-800">Design</span>
            </h4>

            <div className="w-[240px] lg:w-[490px] h-[210px] mt-9  flex relative">
              <div className="overflow-hidden pl-[6px] ">
                <div
                  className="flex gap-[10px] transition-all duration-[1s]  "
                  style={{ transform: `translateX(-${curr * 250}px)` }}
                >
                  {projects.map((obj, i) => (
                    <Projectcard
                      key={obj.name + i}
                      imgadd={obj.img}
                      projectName={obj.name}
                    />
                  ))}
                </div>
              </div>
              <div className=" flex items-center justify-between inset-y-0 inset-x-1 absolute pl-2 ">
                <button
                  onClick={prev}
                  className="w-[40px] h-[40px] bg-white p-2 rounded-full shadow-xl border-2 border-slate-200 "
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="w-[40px] h-[40px] bg-white p-2 rounded-full shadow-xl border-2 border-slate-200 "
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="absolute left-0 right-0 -bottom-5 flex gap-2 justify-center items-center ">
                {projects.map((_, i) => (
                  <div
                    onClick={() => setCurr(i)}
                    key={i}
                    className={`w-3 h-3 rounded-full bg-favtext ${
                      i === curr ? "p-2" : "bg-opacity-50"
                    } `}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className=" flex-1 ">
            <div className="md:px-10 py-20 flex justify-between items-start flex-col">
              <h4 className="text-[18px] md:text-[2vmax] font-bold text-favtext">
                Creativity starts with viewing the whole world differently
              </h4>
              <h4 className="text-[18px] md:text-[2vmax] font-bold text-favtext mt-4">
                Let me help you solve your critical website development
                challenges
              </h4>
              <a
                href="tel:+917057836286"
                className="mx-auto transition-all hover:scale-[107%] mt-16 text-white font-medium px-5 py-1.5 rounded-full  bg-gradient-to-r from-yellow-500  to-dor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

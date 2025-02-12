import React, { useState } from "react";

import { HiMenuAlt1, HiX } from "react-icons/hi";

const Navigationbar = (props) => {
  const [menu, setMenu] = useState(false);
  const pages = ["home", "about", "skills", "projects", "resume", "contact"];

  return (
    <div className="fixed top-0 right-0 left-0 z-20 dark:bg-black dark:text-neutral-200 ">
      <header className="backdrop-blur-[4px] bg-[rgba(250,250,250,0.4)] flex justify-between items-center py-4 px-10 relative">
        <a href="#home">
          <h1 className="animate-wiggle font-rancho text-[25px] tracking-[5px] font-bold text-slate-400">
            VAI<span className="text-dor">BHA</span>V{" "}
          </h1>
        </a>
        <label htmlFor="check" className="bg-black dark:bg-white cursor-pointer relative w-10 h-5 rounded-full" >
          <input type="checkbox" onChange={props.changeTheme} id="check" className="sr-only peer" />
          <span className="w-2/5 h-4/5 bg-white absolute rounded-full peer-checked:left-5 peer-checked:bg-black left-1 top-[2px] transition-all duration-500 "></span>
        </label>
        <ul className="md:flex items-center hidden ">
          {pages.map((page, i) => (
            <li key={page + i} className="text-md mr-7  ">
              <a
                href={`#${page}`}
                className=" capitalize hover:text-violet-700 dark:text-white dark:hover:text-yellow-300 text-[#191970] font-medium "
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
        <div className="bg-dor hover:shadow-md transition-all scale-105 cursor-pointer text-white text-xl p-2 rounded-full md:hidden  ">
          <HiMenuAlt1 onClick={() => setMenu(true)} />
        </div>{" "}
      </header>
      {menu && (
        <ul className="opacity-[200%] animate-propel flex flex-col gap-5 z-10  absolute top-0 right-0 w-[250px] bg-white border-l-2  pl-12 font-medium md:hidden transition-all h-[500px] ">
          <div className="p-2 rounded-full cursor-pointer hover:scale-105   transition-all text-2xl mt-4 ml-[122px] text-[#191970] font-extrabold ">
            <HiX onClick={() => setMenu(false)} />
          </div>
          {pages.map((page, i) => (
            <li
              key={page + i}
              className="animate-propel text-md mr-7 last:mb-10 "
            >
              <a
                href={`#${page}`}
                className="capitalize hover:text-violet-700 text-[#191970] hover:border-b-2 border-sky-900"
                onClick={() => setMenu(false)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      )}{" "}
    </div>
  );
};

export default Navigationbar;

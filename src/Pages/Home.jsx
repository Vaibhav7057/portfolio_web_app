import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Enthusiastic Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "Cross Platform Developer",
      "React Developer",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id="home" className="bg-bgcolor dark:bg-darkbg1  ">
      <div className="flex flex-col sm:flex-row px-10 pb-20 sm:pb-0 pt-16">
        <div className="flex flex-col flex-1 gap-4 items-start py-24  ">
          <h3 className="text-[28px] md:text-[3vmax] font-bold text-favtext dark:text-darkt1">
            Hello! I Am
          </h3>
          <h1 className="text-[28px] md:text-[3vmax] font-bold text-dor">
            Vaibhav Gedam
          </h1>
          <p className="text-sm md:text-md font-medium text-favtext dark:text-darkt2">
            Fullstack developer in web designing and development, a MERN stack
            developer producing the Quality work
          </p>
          <a href="#contact">
            <button className="transition-all hover:scale-[107%] mt-5 text-white font-medium px-5 py-1.5 rounded-full  bg-gradient-to-r from-yellow-500  to-dor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300">
              Contact Me
            </button>
          </a>
          <div className="mt-12 flex gap-6 text-dor font-bold text-3xl ">
            <a
              href="https://www.linkedin.com/in/vaibhav-gedam-930642224"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="transition-all hover:scale-[120%] hover:cursor-pointer" />
            </a>
            <a
              href="https://github.com/Vaibhav7057"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="transition-all hover:scale-[120%] hover:cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/vaibhavgedam95"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="transition-all hover:scale-[120%] hover:cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start flex-1">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" transition-all mt-16 mb-7 w-[270px] overflow-hidden h-[270px] min-h-[250px] min-w-[250px] rounded-full shadow-2xl bg-dor "
          >
            <img src="/images/profile.png" alt="creater profile" />
          </motion.div>
          <h1 className="text-lg text-favtext font-bold mt-7 dark:text-darkt3 ">
            <span>{text}</span>
            <Cursor cursorColor="red" cursorStyle="|" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about" className="bg-white dark:bg-darkbg2 transition-all">
      <div className="flex flex-col px-10 pb-8 pt-16 ">
        <div className="flex  justify-center items-center flex-col mb-10 md:mb-0">
          <h1 className="text-[28px] md:text-[3vmax] font-bold text-favtext dark:text-darkt1">
            About <span className="text-dor">Me</span>
          </h1>

          <p className="text-sm md:text-lg font-medium text-favtext dark:text-darkt1">
            My Introduction
          </p>
        </div>
        <div className="flex flex-1 md:flex-row flex-col-reverse ">
          <div className="flex items-start gap-4 py-24 flex-col flex-1">
            <h6 className="text-md md:text-lg font-medium text-favtext dark:text-darkt1">
              Hi, I am Vaibhav, nice to meet you!
            </h6>
            <p className="text-sm md:text-[15px] font-medium text-favtext dark:text-darkt1">
              I'm a skilled web developer with a passion for crafting
              exceptional user interfaces. 💻 My journey in web development has
              led me to master HTML, CSS, and JavaScript, and I'm fluent in
              frameworks like reactjs, tailwind etc. I am continuously learning
              and staying up-to-date with the latest web development trends and
              technologies. I am excited about building innovative and impactful
              projects that solve real-world problems.
            </p>
            <a
              href="https://drive.google.com/file/d/17LrvhqrMf_-kkoNB1pZUgCr2cJPTk2Wq/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="transition-all hover:scale-[107%] mt-14 text-white font-medium px-5 py-1.5 rounded-full  bg-gradient-to-r from-yellow-500  to-dor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300">
                Download cv
              </button>
            </a>
          </div>
          <div className="flex flex-1 relative justify-center items-start">
            <motion.div
              whileInView={{ rotate: [0, 12] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-[22vmax] h-[30vmax] absolute top-1.1 rotate-12 left-30 bg-favtext dark:bg-darkt3 rounded-lg "
            ></motion.div>
            <motion.div
              whileInView={{ rotate: [12, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-[22vmax] bg-dor rounded-lg overflow-hidden z-10   "
            >
              <img src="/images/about.png" alt="Creater" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

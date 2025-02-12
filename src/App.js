import React, { useCallback, useState } from "react";
import Navigationbar from "./Components/Navigationbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import { Route, Routes } from "react-router-dom";
import Education from "./Components/resume/Education.js";
import Courses from "./Components/resume/Courses.js";
import Details from "./Components/resume/Details.js";
import Interests from "./Components/resume/Interests.js";
import Project from "./Components/resume/Project.js";
import Skill from "./Components/resume/Skill.js";

function App() {

const [theme,setTheme] = useState("light");
const changeTheme = useCallback(()=>{setTheme(theme === 'light' ?'dark':'light')},[theme]);
  return (
    <div className={`app ${theme}`}>
      <Navigationbar changeTheme={changeTheme} />
      <Home />
      <About />
      <Skills />
      <Projects />

      <Routes>
        <Route path="/" element={<Resume />}>
          <Route path="" element={<Details />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/project" element={<Project />} />
        </Route>
      </Routes>
      <Contact />
    </div>
  );
}

export default App;

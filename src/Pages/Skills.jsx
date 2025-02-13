import React from "react";
import skillsets from "../Constants/image";
import Card from "../Components/Card";
const Skills = () => {
  return (
    <div id="skills" className="bg-bgcolor dark:bg-darkbg1">
      <div className="flex flex-col items-center px-10 pb-10 pt-16">
        <h1 className="text-[28px] md:text-[3vmax] font-bold text-favtext dark:text-darkt1 mb-5">
          Skill<span className="text-dor">s</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {skillsets.map((skill, i) => (
            <Card key={skill.name + i} name={skill.name} image={skill.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";

const Education = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li>
        <h3 className="font-medium text-lg text-favtext">
          Shri Dnyanesh Mahavidylaya,Nawargoan{" "}
          <span className="italic text-slate-600  ">- B.Sc.</span>{" "}
        </h3>
        <p className="font-medium text-slate-600">
          Subjects : Physics, Chemistry, Mathematics
        </p>
        <p className="font-medium text-slate-600">CGPA 6.80 out of 10</p>
        <p className="font-medium text-slate-600">First Division</p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext">
          Shri Dnyanesh Mahavidyalaya, Nawargoan{" "}
          <span className="italic text-slate-600 ">- 12th</span>{" "}
        </h3>
        <p className="font-medium text-slate-600">
          Subjects : Physics, Chemistry, Mathematics, Biology, English, Marathi
        </p>
        <p className="font-medium text-slate-600">Percentage : 69.23</p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext">
          Neharu Vidyalaya, Chimur{" "}
          <span className="italic text-slate-600 ">- 10th</span>{" "}
        </h3>
        <p className="font-medium text-slate-600">
          Subjects : Science, Mathematics, English, Marathi, Hindi, Social
          Science
        </p>
        <p className="font-medium text-slate-600">Percentage : 81.40</p>
      </li>
    </ul>
  );
};

export default Education;

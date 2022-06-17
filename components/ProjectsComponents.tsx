import React from "react";

const Projects = () => {
  return (
    <div className=" flex p-16 flex-col">
      <h2 className="text-white text-2xl text-center pb-11">
        My Primary Skills
      </h2>
      <div className="mx-auto">
        <div className=" text-white text-6xl flex space-x-32">
          <div className="rounded-xl bg-[#222222] p-7 hover:scale-125 transition font-sans">
            Flutter
          </div>
          <div className="rounded-xl bg-[#222222] p-7 hover:scale-125 transition">
            NextJs
          </div>
          <div className="rounded-xl bg-[#222222] p-7 hover:scale-125 transition">
            ReactJs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

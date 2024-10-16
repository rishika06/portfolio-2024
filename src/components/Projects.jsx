import React from "react";
import Box from "./ui/Box";
import Tags from "./ui/Tags";
import { BsArrowUpRight } from "react-icons/bs";
import { projectsData } from "../constants/data";

function Projects() {
  return (
    <>
      <h2 className="text-slate-300 text-2xl font-semibold mt-12 md:mt-24 mb-8">
        PROJECTS
      </h2>
      {projectsData.map((item) => (
        <Box className="flex flex-col justify-center items-center pb-4 mb-8 w-[95%]">
          <a href={item.link} target="_blank" className="p-2 relative">
            <img src={item.image} alt="" className="h-full rounded-xl" />
          </a>
          <div className="px-4 mt-7">
            <a
              href={item.link}
              target="_blank"
              className="flex items-center group"
            >
              <h3 className="text-slate-200 opacity-85 text-2xl font-semibold transition duration-300 ease-in-out group-hover:text-teal-200">
                {item.title}
              </h3>
              <BsArrowUpRight className="h-full ml-2 mt-1 text-slate-200 opacity-85 transition duration-300 ease-in-out group-hover:text-teal-200 group-hover:scale-125" />
            </a>
            <p className="text-slate-200 opacity-75 text-sm mt-4">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {item.tags.map((tag) => (
                <Tags>{tag}</Tags>
              ))}
            </div>
          </div>
        </Box>
      ))}
    </>
  );
}

export default Projects;

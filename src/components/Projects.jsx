import React from "react";
import Box from "./ui/Box";
import Tags from "./ui/Tags";
import { BsArrowUpRight } from "react-icons/bs";
import { projectsData } from "../constants/data";
import Carousel from "./ui/Carousel";
import VideoPlayer from "./ui/VideoPlayer";
import useSeeMore from "../hooks/useSeeMore";

function Projects() {
  const { visibleCount, isExpanded, toggle } = useSeeMore(2);

  return (
    <>
      <h2 className="text-slate-300 text-2xl font-semibold mt-12 md:mt-24 mb-8">
        PERSONAL PROJECTS
      </h2>

      {projectsData.slice(0, visibleCount).map((item) => (
        <Box className="flex flex-col justify-center items-center pb-4 mb-8 w-[95%]">
          <a href={item.link} target="_blank" className="p-2 relative">
            {!item.videoLink && (
              <img src={item.image} alt="" className="h-full rounded-xl" />
            )}
          </a>

          {/* Carousel */}
          {item.image && item.image[2].length > 2 && (
            <Carousel slides={item.image} />
          )}

          {/* Video */}
          {item.videoLink && <VideoPlayer src={item.videoLink} />}

          <div className="px-4 mt-7">
            <a
              href={item.link}
              target="_blank"
              className="flex items-center group"
            >
              <h3 className="text-slate-200 opacity-85 text-2xl font-semibold transition duration-300 ease-in-out group-hover:text-teal-200">
                {item.title}
              </h3>
              {item.link && (
                <BsArrowUpRight className="h-full ml-2 mt-1 text-slate-200 opacity-85 transition duration-300 ease-in-out group-hover:text-teal-200 group-hover:scale-125" />
              )}
            </a>
            <p className="text-slate-200 opacity-75 text-sm mt-4">
              {item.description}
            </p>
            {item.image[2].length > 2 && (
              <ul className="text-slate-200 opacity-75 text-sm mt-4">
                <li className="pb-2">
                  <strong>Form: </strong>Allows users to input details about the
                  problems they have solved.
                </li>
                <li className="pb-2">
                  <strong>Table:</strong> Displays all the entered data in a
                  structured and easily accessible format.
                </li>
                <li>
                  <strong> Graph:</strong> Provides a visual representation of
                  the data, dynamically updating based on selected categories.
                </li>
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-6">
              {item.tags.map((tag) => (
                <Tags>{tag}</Tags>
              ))}
            </div>
          </div>
        </Box>
      ))}

      {projectsData.length > 2 && (
        <button
          onClick={() => toggle(projectsData.length)}
          className="mt-4 text-teal-300 hover:text-teal-500"
        >
          {isExpanded ? "See Less" : "...See More"}
        </button>
      )}
    </>
  );
}

export default Projects;

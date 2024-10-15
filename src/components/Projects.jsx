import React from "react";
import RapidFireQuiz from "../assets/RapidFire Quiz.png";
import Box from "./ui/Box";
import Tags from "./ui/Tags";
import { BsArrowUpRight } from "react-icons/bs";

function Projects() {
  return (
    <>
      <h2 className="text-slate-300 text-2xl font-semibold mt-12 md:mt-24 mb-12">
        PROJECTS
      </h2>
      <Box className="flex flex-col justify-center items-center pb-4 w-[95%]">
        <div className="p-2">
          <img src={RapidFireQuiz} alt="" className="h-full rounded-xl" />
        </div>
        <div className="px-4">
          <a
            href="https://rapidfire-quiz.vercel.app/"
            target="_blank"
            className="flex items-center group"
          >
            <h3 className="text-slate-200 opacity-85 text-2xl font-semibold transition duration-300 ease-in-out group-hover:text-teal-200">
              RapidFire Quiz
            </h3>
            <BsArrowUpRight className="h-full ml-2 mt-1 text-slate-200 opacity-85 transition duration-300 ease-in-out group-hover:text-teal-200 group-hover:scale-125" />
          </a>
          <p className="text-slate-200 opacity-75 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque
            dolorum fugiat dolores quas officiis velit accusantium quo atque.
            Voluptatibus. fugiat dolores quas officiis velit accusantium quo
            atque. Voluptatibus.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Tags>JavaScript</Tags>
            <Tags>React</Tags>
            <Tags>TypeScript</Tags>
            <Tags>Tailwind</Tags>
            <Tags>JavaScript</Tags>
            <Tags>JavaScript</Tags>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Projects;

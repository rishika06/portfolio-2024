import React from "react";
import Box from "./ui/Box";
import Tags from "./ui/Tags";

function Experience() {
  return (
    <>
      <h2 className="text-slate-300 opacity-90 text-2xl font-semibold mt-12 md:mt-24">
        EXPERIENCE
      </h2>
      <Box className="p-4 mt-6 w-[95%]">
        <div className="flex justify-between items-center mb-4 text-slate-200 opacity-75">
          <h3 className="text-lg font-semibold">PUBLICIS SAPIENT</h3>
          <span className="text-xs pr-3">JUNE - NOV 2023</span>
        </div>
        <p className="text-sm text-slate-200 opacity-70 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque
          dolorum fugiat dolores quas officiis velit accusantium quo atque.
          Voluptatibus. fugiat dolores quas officiis velit accusantium quo
          atque. Voluptatibus.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Tags>JavaScript</Tags>
          <Tags>React</Tags>
          <Tags>TypeScript</Tags>
          <Tags>Tailwind</Tags>
          <Tags>JavaScript</Tags>
          <Tags>JavaScript</Tags>
        </div>
      </Box>
    </>
  );
}

export default Experience;

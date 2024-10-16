import React from "react";
import Box from "./ui/Box";
import Tags from "./ui/Tags";
import { expData } from "../constants/data";

function Experience() {
  return (
    <>
      <h2 className="text-slate-300 opacity-90 text-2xl font-semibold mt-12 md:mt-24">
        EXPERIENCE
      </h2>
      {expData.map((item) => (
        <Box className="p-4 mt-6 w-[95%]">
          <h3 className="text-slate-200 opacity-75 text-lg font-semibold uppercase">
            {item.companyName}
          </h3>
          <div className="flex justify-between items-center mb-4 text-slate-200 opacity-75">
            <h4 className="font-semibold">{item.projectName}</h4>
            <span className="text-xs pr-3">{item.time}</span>
          </div>
          <p className="text-sm text-slate-200 opacity-70 pb-4">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </div>
        </Box>
      ))}
    </>
  );
}

export default Experience;

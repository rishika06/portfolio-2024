import React from "react";
import { cetificationData } from "../constants/data";
import Box from "./ui/Box";

function Certifications() {
  return (
    <>
      <h2 className="text-slate-300 text-2xl font-semibold mt-12 md:mt-24 mb-8 uppercase">
        Certifications
      </h2>
      {cetificationData.map((item) => (
        <Box className="flex items-center w-[95%] my-4 ">
          <a href={item.link} target="_blank">
            <h3 className="text-slate-200 px-4 py-2">{item.titile}</h3>
          </a>
        </Box>
      ))}
    </>
  );
}

export default Certifications;

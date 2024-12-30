import React, { useState } from "react";
import { certificationData } from "../constants/data";
import Box from "./ui/Box";
import useSeeMore from "../hooks/useSeeMore";

function Certifications() {
  const { visibleCount, isExpanded, toggle } = useSeeMore(3);

  const [selectedImage, setSelectedImage] = useState();

  return (
    <div>
      <h2 className="text-slate-300 text-2xl font-semibold mt-12 md:mt-24 mb-8 uppercase">
        Certifications
      </h2>

      {certificationData.slice(0, visibleCount).map((item) => (
        <Box
          key={item.id}
          className="flex items-center w-[95%] my-4 cursor-pointer"
          onClick={() => setSelectedImage(item.link)}
        >
          <h3 className="text-slate-200 px-4 py-2">{item.titile}</h3>
        </Box>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative flex flex-col items-center justify-center m-8">
            <img
              src={selectedImage}
              alt="Certification"
              className="max-w-full max-h-[80vh] rounded shadow-lg"
            />
            <button
              className="absolute top-1 -right-24 text-slate-800 bg-teal-200 hover:bg-teal-300 rounded-full px-4 py-2 font-bold text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              x
            </button>
          </div>
        </div>
      )}

      {certificationData.length > 3 && (
        <button
          onClick={() => toggle(certificationData.length)}
          className="mt-4 text-teal-300 hover:text-teal-500"
        >
          {isExpanded ? "See Less" : "...See More"}
        </button>
      )}
    </div>
  );
}

export default Certifications;

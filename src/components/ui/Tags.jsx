import React from "react";

function Tags({ children }) {
  return (
    <div
      className={`bg-slate-950  bg-opacity-30 text-teal-200 font-semibold rounded-xl px-3 pt-1 pb-2 text-xs`}
    >
      {children}
    </div>
  );
}

export default Tags;

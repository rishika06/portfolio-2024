import React from "react";

function Tags({ children }) {
  return (
    <div
      className={`bg-teal-200 text-slate-900 font-semibold rounded-xl px-3 py-1 text-xs`}
    >
      {children}
    </div>
  );
}

export default Tags;

import React from "react";

function Box({ children, className, onClick }) {
  return (
    <div
      className={`bg-[#8A8593] border-2 border-[#E1E1E11A] bg-opacity-10 rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Box;

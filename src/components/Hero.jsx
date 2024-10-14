import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaCodepen,
} from "react-icons/fa";
import displayPicture from "../assets/DP.jpeg";

function Hero() {
  return (
    <section>
      <div>
        <div className="h-56 mb-10">
          <img
            src={displayPicture}
            alt="Display Picture"
            className="h-full rounded-xl"
          />
        </div>
        <h1 className="text-4xl font-bold text-pale-olive sm:text-5xl">
          Rishika Kalita
        </h1>
        <h3 className="text-2xl pt-4 font-semibold text-pale-olive sm:text-xl">
          Senior Frontend Engineer
        </h3>
        <p className="text-lg pt-4 max-w-xs leading-tight text-steel-blue-Gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed tempore
        </p>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xl shrink-0">
          <a href="" target="_blank" className="block hover:text-slate-200">
            <FaGithub className="text-steel-blue-Gray cursor-pointer" />
          </a>
        </li>
        <li className="mr-5 text-xl shrink-0">
          <a href="" target="_blank" className="block hover:text-slate-200">
            <FaLinkedin className="text-steel-blue-Gray cursor-pointer" />
          </a>
        </li>
        <li className="mr-5 text-xl shrink-0">
          <a href="" target="_blank" className="block hover:text-slate-200">
            <FaInstagramSquare className="text-steel-blue-Gray cursor-pointer" />
          </a>
        </li>
        <li className="mr-5 text-xl shrink-0">
          <a href="" target="_blank" className="block hover:text-slate-200">
            <FaCodepen className="text-steel-blue-Gray cursor-pointer" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Hero;

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaCodepen,
} from "react-icons/fa";
import displayPicture from "../assets/DP I.png";
import { MdEmail, MdLocalPhone } from "react-icons/md";

function Hero() {
  return (
    <section>
      <div>
        <div className="mb-10">
          <img
            src={displayPicture}
            alt="Display Picture"
            className="h-72 w-72 rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-pale-olive sm:text-5xl">
          Rishika Kalita
        </h1>
        <h3 className="text-2xl pt-4 font-semibold text-pale-olive sm:text-xl">
          Senior Frontend Engineer
        </h3>
        <p className="text-lg pt-4 max-w-xs leading-tight text-steel-blue-Gray flex items-center">
          <MdEmail />
          <span className="pl-3">rishika.kjobs@gmail.com</span>
        </p>

        <p className="text-lg pt-4 max-w-xs leading-tight text-steel-blue-Gray flex items-center">
          <MdLocalPhone />
          <span className="pl-3">+91-9008107065</span>
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

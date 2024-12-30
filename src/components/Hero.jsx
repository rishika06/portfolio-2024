import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import displayPicture from "../assets/DP I.png";
import { MdLocalPhone } from "react-icons/md";
import EmailComponent from "./ui/EmailComponent";

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
        <EmailComponent />

        <p className="text-lg pt-4 max-w-xs leading-tight text-steel-blue-Gray flex items-center">
          <MdLocalPhone />
          <span className="pl-3">+91-9008107065</span>
        </p>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xl shrink-0">
          <a
            href="https://github.com/rishika06"
            target="_blank"
            className="block hover:scale-150 transition duration-300"
          >
            <FaGithub className="text-steel-blue-Gray cursor-pointer hover:text-teal-300 " />
          </a>
        </li>
        <li className="mr-5 text-xl shrink-0">
          <a
            href="https://www.linkedin.com/in/rishika-kalita-ab3963134/"
            target="_blank"
            className="block hover:scale-150 transition duration-300"
          >
            <FaLinkedin className="text-steel-blue-Gray cursor-pointer hover:text-teal-300 " />
          </a>
        </li>
        <li className="mr-5 text-xl shrink-0">
          <a
            href="https://www.instagram.com/inspect_to_dev/"
            target="_blank"
            className="block  hover:scale-150 transition duration-300"
          >
            <FaInstagramSquare className="text-steel-blue-Gray cursor-pointer hover:text-teal-300 " />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Hero;

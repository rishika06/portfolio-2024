import React from "react";
import AboutMeAudio from "../assets/aboutMe 2.mp3";
import AudioPlayer from "../components/ui/AudioPlayer";

function About() {
  return (
    <section className="mt-10 md:mt-0">
      <h4 className="text-pale-olive pt-4 text-3xl">
        Let Me Introduce Myself – Press Play!
      </h4>

      <AudioPlayer src={AboutMeAudio} />
    </section>
  );
}

export default About;

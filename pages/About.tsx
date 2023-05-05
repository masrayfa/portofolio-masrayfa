import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="mx-auto mt-32 flex flex-col lg:flex-row space-x-16 w-[70vw]">
          <img
            src="https://storage.googleapis.com/profile-dicoding/rayfa.jpg"
            alt="profile"
            className="w-[80vw] rounded-xl grayscale mx-auto mb-11 sm:w-[60vw] h-fit md:w-[50vw] lg:w-[30vw]"
          />
          <div className="space-y-5 text-white">
            <h1 className=" text-4xl font-serif">
              Hello There! My name is{" "}
              <span className="underline ">Mas Rayfa</span>. I'm a college
              student and mostly messing around with frontend dev.
            </h1>
            <div className="space-y-5 text-white/70">
              <h2 className=" text-lg">
                My journey to this tech stuff started with my favorite tv show
                during high school which is Sillicon Valley :D
              </h2>
              <p>
                I decided to jump into computer science due to my curiosity how
                we can build products using technologies and help other in need.
              </p>
              <p>
                So I started to learn mobile development using flutter and dart,
                it is probably the first thing that enlightening me about
                frontend and backend. So now I'm currently in love with nextJs
                and typescript!
              </p>
              <p>
                Anyways I also enjoy playing sports like basketball and
                badminton HEHE. Other than that and techy stuff, I like to kill
                time watching tv shows or series, movies, K-drama, anime and
                create music if I'm in the mood HAHA.
              </p>
              <p>
                NOTE! Yes shout out to Seán Halpin for the inspo for my porto
                web design. This simple yet nice to see design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

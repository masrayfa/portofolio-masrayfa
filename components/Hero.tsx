import next from "next";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" lg:flex p-3 lg:p-14 ">
      <div className="text-white lg:px-14 px-5 bg-[#191919] lg:space-y-7 space-y-3 p-11 xl:p-20 rounded-xl md:w-[55vw] sm:w-[80vw] mx-auto ">
        <div className=" text-xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent">
          <h1>
            <span className="bg-gradient-to-r  from-[#EDC886] to-[#F095AF] bg-clip-text text-transparent">
              Hi. I'm{" "}
            </span>
            <span className="bg-gradient-to-r  from-[#DA86B6] to-[#A363E6] bg-clip-text text-transparent">
              Mas{" "}
            </span>
            <span className="from-[#A363E6] to-[#A0E9FF] bg-clip-text text-transparent bg-gradient-to-r">
              Rayfa.
            </span>
          </h1>
          <h1>
            <span className="bg-gradient-to-r  from-[#EDC886] to-[#F095AF] bg-clip-text text-transparent">
              A Tech{" "}
            </span>
            <span className="bg-gradient-to-r  from-[#DA86B6] to-[#A363E6] bg-clip-text text-transparent">
              Enth
            </span>
            <span className="from-[#A363E6] to-[#A0E9FF] bg-clip-text text-transparent bg-gradient-to-r">
              usiast.
            </span>
          </h1>
        </div>

        <p className="xl:text-xl text-sm font-roboto font-extra-light text-white">
          Computer science student who likes to build stuff like web and mobile
          application. <br />
          Mostly software engineering thingy.. for sure.
        </p>
      </div>
      <div className="lg:px-11 px-7 mt-7 flex flex-col">
        <div className="mx-auto">
          <div className="rounded-full bg-white hover:bg-[#191919] w-20 h-20 hover:scale-110 transition  items-center flex justify-center">
            <Image
              src={"/../public/assets/typescript.png"}
              width="60"
              height="60"
            />
          </div>
          <div className="rounded-full bg-white hover:bg-[#191919] w-12 h-12 mt-11 hover:scale-110 transition  items-center flex justify-center">
            <Image
              src={"/../public/assets/flutter.png"}
              width="30"
              height="30"
            />
          </div>
          <div className="rounded-full bg-white hover:bg-[#191919] w-11 h-11 ml-36 hover:scale-110 transition  items-center flex justify-center">
            <Image
              src={"/../public/assets/nodejs.webp"}
              width="30"
              height="30"
            />
          </div>
          <div className="rounded-full bg-white hover:bg-[#191919] w-28 h-28 lg:ml-96 ml-60 hover:scale-110 transition  items-center flex justify-center">
            <Image src={"/../public/assets/react.png"} width="88" height="80" />
          </div>
          <div className="rounded-full bg-white hover:bg-[#191919] w-36 h-36 ml-36 lg:mt-7 hover:scale-110 transition  items-center flex justify-center">
            <Image
              src={"/../public/assets/nextjs.png"}
              width="120"
              height="120"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

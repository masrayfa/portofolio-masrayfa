import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRecoilState } from "recoil";
import { navbarState } from "../atoms/navbarAtom";

const Projects = () => {
  // useEffect(() => {
  //   const [navTitle, setNavTitle] = useRecoilState(navbarState);
  // }, []);

  return (
    <div>
      <Navbar />
      <section className=" flex flex-col px-7 lg:my-28">
        <div className="space-y-3 mx-7 sm:mx-24 md:mx-28 lg:mx-36 xl:mx-48 mt-28 ">
          <h1 className="text-4xl text-white font-bold font-sans lg:text-5xl ">
            Netflix Clone
          </h1>
          <h2 className="text-white">
            NextJs • Typescript • Firebase • TailwindCSS
          </h2>
        </div>
        <div className="rounded-xl w-[68vw] h-[80vh] mt-16 mx-auto mb-40">
          <img
            src="../assets/netflix-porto.png"
            alt="netflix"
            className="w-fit rounded-xl"
          />
          <div className="mx-3 my-11 space-y-3 xl:mx-36">
            <h2 className="text-white text-2xl md:text-4xl xl:text-5xl">
              Explanation
            </h2>
            <p className="text-white lg:text-lg">
              So here i made netflix clone using authentication that works with
              firebase and using react context inside. It can SignIn, SignOut,
              and Register. You can watch the trailers of its movie. The movies
              are also grouped based on its genre.
            </p>
          </div>
        </div>
      </section>
      <section className=" flex flex-col px-7">
        <div className="space-y-3 mx-7 sm:mx-24 md:mx-28 lg:mx-36 xl:mx-48">
          <h1 className="text-4xl text-white font-bold font-sans lg:text-5xl ">
            Mern Recipe App (Collaboration Project)
          </h1>
          <h2 className="text-white">
            MongoDB • ExpressJs • ReactJs • NodeJs • TailwindCSS
          </h2>
        </div>
        <div className="rounded-xl w-[68vw] h-[80vh] mt-16 mx-auto mb-40">
          <img
            src="../assets/mern-porto.png"
            alt="netflix"
            className="w-fit rounded-2xl"
          />
          <div className="mx-3 my-11 space-y-3 xl:mx-36">
            <h2 className="text-white text-2xl md:text-4xl xl:text-5xl">
              Explanation
            </h2>
            <p className="text-white lg:text-lg">
              I worked with my college team to finish this mini project as a
              school assignment. It can upload, register user, and signIn user
              that connected to the server using nodeJs and MongoDB as the
              database. The backend using ExpressJs and it can create user,
              update user, delete user, get user. And for the post it can get
              specific post using id, create post, delete post, and update post.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#191919] pt-11">
        <div className="space-y-3 mx-7 sm:mx-24 md:mx-28 lg:mx-36 xl:mx-48 ">
          <h1 className="text-4xl text-white font-bold font-sans lg:text-5xl ">
            Simple Weather App
          </h1>
          <h2 className="text-white">Flutter • Dart • Open Weather API</h2>
        </div>
        <div className="rounded-xl w-[68vw] h-[80vh] mt-16 mx-auto mb-40">
          <img
            src="../assets/flutter-porto.png"
            alt="netflix"
            className="w-fit rounded-2xl mx-auto"
          />
          <div className="mx-3 my-11 space-y-3 xl:mx-36">
            <h2 className="text-white text-2xl md:text-4xl xl:text-5xl">
              Explanation
            </h2>
            <p className="text-white lg:text-lg">
              This is a simple weather app that is currently shows a weather in
              Bandung. Using open weather API. It shows common weather
              characteristics like humidity and temperature.
            </p>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Projects;

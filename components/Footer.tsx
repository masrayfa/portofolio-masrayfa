import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-48 w-full items-center justify-center text-white text-xl">
      <a className="group cursor-pointer" href="#">
        Hire?{" "}
        <span className="rounded-md p-2 transition text-[#191919] group-hover:text-white">
          Contact Me!
        </span>
      </a>
    </footer>
  );
};

export default Footer;

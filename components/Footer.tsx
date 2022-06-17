import React from "react";

const Footer = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/mas-rayfa/");
  };
  return (
    <footer className="flex h-48 w-full items-center justify-center text-white text-xl ">
      <button className="group cursor-pointer" onClick={handleClick}>
        Hire?{" "}
        <span className="rounded-md p-2 transition text-[#191919] group-hover:text-white">
          Contact Me!
        </span>
      </button>
    </footer>
  );
};

export default Footer;

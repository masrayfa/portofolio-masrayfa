import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-white bg-[#111111] ">
      <div className="flex py-7 items-center rounded-b-lg">
        <ul className="flex space-x-5 lg:space-x-20 mx-auto text-center">
          <Link href="/Projects">
            <li className="cursor-pointer font-sans font-bold hover:rounded-lg hover:outline outline-1 p-3 ">
              My Projects
            </li>
          </Link>
          <Link href="/">
            <li className="font-sans cursor-pointer font-bold hover:rounded-lg  hover:outline outline-1 py-3 px-5 outline-[#A363E6]">
              <span className="bg-gradient-to-r  from-[#DA86B6] to-[#A363E6] bg-clip-text text-transparent">
                Mas{" "}
              </span>
              <span className="from-[#A363E6] to-[#A0E9FF] bg-clip-text text-transparent bg-gradient-to-r">
                Rayfa
              </span>
            </li>
          </Link>
          <Link href="/About">
            <li className="cursor-pointer font-sans font-bold hover:rounded-lg hover:outline outline-1 py-3 px-7 ">
              About
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

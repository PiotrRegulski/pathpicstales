import React from "react";
import Image from "next/image";
import { licorice } from "../fonts";
const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="grid justify-items-left p-1 bg-gradient-to-r from-lime-500 from-10% via-lime-500 via-30% to-lime-600 to-90% ">
        <h1
          className={`${licorice.className} text-xl text-gray-800 md:text-4xl md:leading-normal`}
        >
          PathPicsTales
        </h1>
      </div>
    </header>
  );
};

export default Header;

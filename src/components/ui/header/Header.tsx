import React from "react";
import Image from "next/image";
import { licorice } from "../fonts";
const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="grid justify-items-left p-1 bg-lime-950   ">
        <h1
          className={`${licorice.className} text-xl text-white md:text-6xl md:leading-normal p-2`}
        >
          PathPicsTales
        </h1>
      </div>
    </header>
  );
};

export default Header;

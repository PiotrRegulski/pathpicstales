import React from "react";
import Link from "next/link";
import Image from "next/image";
import { licorice,rowdies } from "../fonts";
const Header = () => {
  return (
    <header className="flex  items-center justify-between bg-lime-950 ">
      <Link href="/" className="grid justify-items-left p-1  pointer ">
        <h1
          className={`${licorice.className} text-xl text-white md:text-6xl md:leading-normal p-2`}
        >
          PathPicsTales
        </h1>
      </Link>
      <nav
        className={`${licorice.className}  flex gap-4 text-2xl text-white md:text-4xl md:leading-normal p-4 tracking-widest `}
      >
        <Link href={""}>Home</Link>
        <Link href={""}>Link 1</Link>
        <Link href={""}>Link 2</Link>
        <Link href={""}>Link 4</Link>
        <Link href={""} className={`${rowdies.className}  text-primary text-xl ml-4`} >Zaloguj</Link>
      </nav>
    </header>
  );
};

export default Header;

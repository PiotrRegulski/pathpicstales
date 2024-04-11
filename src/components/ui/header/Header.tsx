import React from "react";
import Link from "next/link";
import Image from "next/image";
import { licorice,rowdies } from "../fonts";
import Hamburger from "@/components/icons/Hamburger";
const Header = () => {
  return (
    <header className="flex  items-center justify-between bg-lime-950 ">
      <Link href="/" className="grid justify-items-left p-1  pointer ">
        <span
          className={`${licorice.className}  lg:px-6  text-2xl text-white lg:text-6xl lg:leading-normal p-2`}
        >
          PathPicsTales
        </span>
      </Link>
      <nav
        className={`${licorice.className} hidden lg:flex gap-8 text-2xl text-white lg:text-4xl lg:leading-normal p-4 tracking-widest `}
      >
        <Link href={""}>Home</Link>
        <Link href={""}>Link 1</Link>
        <Link href={""}>Link 2</Link>
        <Link href={""}>Link 4</Link>
        <Link href={""} className={`${rowdies.className}  bg-primary lg:leading-normal text-xl  rounded-full px-6 py-3`} >Login</Link>
      </nav>
      <nav className="block lg:hidden"><button className="p-2 text-white px-4 py-2"><Hamburger/></button></nav>
    </header>
  );
};

export default Header;

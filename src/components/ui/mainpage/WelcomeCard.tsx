import React from "react";
import Image from "next/image";
import { licorice, rowdies } from "../fonts";
const WelcomeCard = () => {
  return (
    <div
      className={`${rowdies.className} flex flex-row w w-full bg-lime-950  md:bg-gradient-to-b md:from-lime-950 md:to-lime-600      h-2/4 `}
    >
      <div className="md:basis-1/2  grid justify-items-end ">
        <div></div>
        <h1 className=" text-2xl font-bold lg:text-4xl text-center uppercase  text-white tracking-wide ml-12 m-4 mr-8 lg:ml-24 md:mt-24">
          Kochasz naturę <br></br>
          <span className="text-primary ">
           Aktywność na świeżym powietrzu
          </span>{" "}
          <br></br>
          Chcesz odkrywać nowe miejsca ?
        </h1>
        <p className=" font-normal  md:text-xl  md:text-left uppercase text-justify   tracking-wide md:ml-32 text-primary px-6">
          to jesteś we właściwym miejscu. Nasza strona jest poświęcona pięknym
          trasom spacerowym i rowerowym, które czekają na Ciebie w różnych
          zakątkach Polski.
        </p>
        <span
          className={`${licorice.className} hidden md:block text-xl  md:text-4xl md:leading-normal text-white`}
        >
          PathPicsTales
        </span>
      </div>
      <div className="hidden md:basis-1/2 md:grid justify-items-center md:py-16  ">
        <Image
          src="/mainpageimg/kolo.png"
          width={454}
          height={454}
          className="hidden md:block justify-center border-8 border-lime-500 rounded-full"
          alt="Screenshots of the dashboard project showing desktop version"
          priority={true}
        />
      </div>
    </div>
  );
};

export default WelcomeCard;

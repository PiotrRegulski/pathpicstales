import React from "react";
import Image from "next/image";
import { licorice, rowdies } from "../fonts";
const WelcomeCard = () => {
  return (
    <div
      className={`${rowdies.className} flex flex-row w-full bg-lime-950  bg-gradient-to-b from-lime-950 to-lime-700 h-screen  lg:h-2/4 `}
    >
      <div className="lg:basis-1/2  lg:grid lg:justify-items-end ">
        <h1 className=" h-max text-2xl font-bold lg:text-4xl text-center uppercase  text-white  tracking-wide  lg:ml-24 lg:mt-24 py-6 px-2">
          Kochasz naturę <br></br>
          <span className="text-primary ">
            Aktywność na świeżym powietrzu
          </span>{" "}
          <br></br>
          Chcesz odkrywać nowe miejsca ?
        </h1>

        <p className=" h-max  font-normal  mt-12 lg:text-xl  text-justify tracking-wide text-primary px-6 lg:ml-24  ">
          ...to jesteś we właściwym miejscu. Nasza strona jest poświęcona
          pięknym trasom spacerowym i rowerowym, które czekają na Ciebie w
          różnych zakątkach Polski.
        </p>
        <span
          className={`${licorice.className} hidden lg:block text-xl  lg:text-4xl lg:leading-normal text-white`}
        >
          PathPicsTales
        </span>
        <div className=" grid  gap-5 grid-cols-1 lg:hidden mt-24 mx-4">
          <button className={`${rowdies.className} text-white  bg-primary lg:leading-normal text-xl  rounded-full px-6 py-6 `}>
            Zobacz dalej
          </button>
          <button className={`${rowdies.className} text-primary bg-white lg:leading-normal text-xl  rounded-full px-6 py-6 `}>Utworz konto</button>
        </div>
      </div>
      <div className="hidden lg:basis-1/2 lg:grid justify-items-center lg:py-16  ">
        <Image
          src="/mainpageimg/kolo.png"
          width={454}
          height={454}
          className="justify-center border-8 border-lime-500 rounded-full"
          alt="Screenshots of the dashboard project showing desktop version"
          priority={true}
        />
      </div>
    </div>
  );
};

export default WelcomeCard;

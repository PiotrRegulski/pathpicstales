import React from "react";
import Image from "next/image";
import { licorice, rowdies } from "../fonts";
const WelcomeCard = () => {
  return (
    <div
      className={`${rowdies.className} flex flex-row w w-full bg-gradient-to-r from-lime-500 from-10% via-lime-500 via-30% to-lime-600 to-90%    bg-lime-400  h-2/4 `}
    >
      <div className="basis-1/2  grid justify-items-end ">
        <div>1</div>
        <h2 className="font-bold text-4xl text-left uppercase  text-white tracking-wide ml-24 mt-24">
          Kochasz naturę <br></br>
          <span className="text-red-600">
            Aktywność na świeżym powietrzu
          </span>{" "}
          <br></br>
          Chcesz odkrywać nowe miejsca ?
        </h2>
        <p className=" text-xl text-left uppercase   tracking-wide ml-32 text-red-600">
          to jesteś we właściwym miejscu. Nasza strona jest poświęcona pięknym
          trasom spacerowym i rowerowym, które czekają na Ciebie w różnych
          zakątkach Polski.
        </p>
        <span
          className={`${licorice.className} text-xl text-gray-800 md:text-4xl md:leading-normal`}
        >
          PathPicTales
        </span>
      </div>
      <div className="basis-1/2 grid justify-items-center py-16 ">
        <Image
          src="/mainpageimg/kolo.png"
          width={454}
          height={454}
          className="hidden md:block justify-center border-8 border-lime-500 rounded-full"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;

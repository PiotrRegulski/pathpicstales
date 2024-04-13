import React from "react";
import Image from "next/image";

const NewPleaceCard = () => {
  return (
    <section id="NewPleace" className="h-screen" >
      <div className="flex flex-col gap-2 items-center lg:justify-center h-[100%]">
        <h3 className="text-black font-semibold text-xl py-4 pl-4 tracking-wide">
          Ostatnio dodane miejsca:
        </h3>

        <div  className="flex gap-2 flex-nowrap w-[120%] h-48 lg:h-max">
          <div className="flex-none relative w-1/4 h-48 lg:h-96 lg:py-12 shadow-xl shadow-lime-500/50">
            <Image
              src="/NewPleaceImg/zamekwarszawa.png"
              // width={681}
              // height={681}
              className="justify-center  "
              alt="zamek Warszawa"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className="grow  relative w-full h-[1000] shadow-xl shadow-lime-500/50 ">
            
            <Image
              src="/NewPleaceImg/zamekwarszawa.png"
              // width={681}
              // height={681}
              className="justify-centershadow-xl "
              alt="Screenshots of the dashboard project showing desktop version"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className="flex-none relative w-1/4 h-48 lg:h-96 py-12 shadow-xl shadow-lime-500/50" >
            {" "}
            <Image
              src="/NewPleaceImg/zamekwarszawa.png"
              // width={681}
              // height={681}
              className="justify-center  "
              alt="Screenshots of the dashboard project showing desktop version"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPleaceCard;

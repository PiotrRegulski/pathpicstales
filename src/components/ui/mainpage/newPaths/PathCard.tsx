import React from "react";
import Image from "next/image";
import RatingStar from "@/components/icons/RatingStar";

import { IoMdBicycle } from "react-icons/io";
type PathCardProps = {
  src: string;
};
const PathCard: React.FC<PathCardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-between h-96 mb-2 shadow-xl shadow-lime-700/50 py-4 ">
      <div className="relative w-full ">
        <div className="absolute -z-10 w-full h-96 px-2 py-1 ">
          <Image
            src={props.src}
            alt="bacground image"
            className="w-full h-full rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 content-between h-96 px-3 ">
          <div className="py-2 flex ">
            <IoMdBicycle className="w-12 h-12 border-2 rounded-full px-2 py-2" />
          </div>
          <div className="  text-white max-w-max span-2 mb-3 ml-2">
            <p className="bg-black bg-opacity-75  text-white mb-2 text-lg">
              Super wycieczka<br></br>Piękne krajobrazy i super miejsca na
              piknik
            </p>

            <div className="flex  bg-white rounded-xl text-black max-w-max ">
              <RatingStar className="ml-2 w-8 h-8" />
              <p className="pt-1 px-3">5.5/6</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathCard;

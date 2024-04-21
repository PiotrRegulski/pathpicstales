import React from "react";
import PathCard from "./PathCard";

const CardWithPath = () => {
  return (
    <section className="flex flex-col">
      <h3 className="text-black bg-white text-center  font-semibold text-xl py-4 px-4 tracking-wide rounded-xl">
        Nowe Trasy
      </h3>
      <div className="  grid grid-cols-4 h-1/2">
        <div className=" h-full">
          <PathCard />
        </div>
        <div>
          <PathCard />
        </div>
        <div>
          <PathCard />
        </div>
        <div>
          <PathCard />
        </div>
      </div>
    </section>
  );
};

export default CardWithPath;

import React from "react";
import PathCard from "./PathCard";

const CardWithPath = () => {

  const newPathsImages=[]
  return (
    <section className="flex flex-col lg:mx-10">
      <h3 className="text-black bg-white text-center  font-semibold text-xl py-4 px-4 tracking-wide rounded-xl mb-12 mt-10">
        Nowe Trasy
      </h3>
      <div className="  grid grid-cols-1 lg:grid-cols-3 h-1/4">
        <div>
          <PathCard src={'/NewPleaceImg/zamekwarszawasm.png'} />
        </div>
        <div>
          <PathCard  src={'/NewPleaceImg/niegocingiżycko.png'}/>
        </div>
        <div>
          <PathCard src={'/NewPleaceImg/zamekwarszawasm.png'}/>
        </div>
        <div>
          <PathCard src={'/NewPleaceImg/zamekwarszawasm.png'}/>
        </div>
        <div>
          <PathCard src={'/NewPleaceImg/zamekwarszawasm.png'} />
        </div>
        <div>
          <PathCard  src={'/NewPleaceImg/niegocingiżycko.png'}/>
        </div>
        <div>
          <PathCard src={'/NewPleaceImg/zamekwarszawasm.png'}/>
        </div>
        <div>
          <PathCard src={'/NewPleaceImg/zamekwarszawasm.png'}/>
        </div>
      </div>
    </section>
  );
};

export default CardWithPath;

import React from "react";
import Image from "next/image";
const images = [
  { id: 1, path: "niegocingiżycko.png" },
  { id: 2, path: "wisławarszawa.png" },
  { id: 3, path: "zamekwarszawasm.png" },
  { id: 4, path: "zamekwarszawasm.png" },
  { id: 5, path: "zamekwarszawasm.png" },
  { id: 6, path: "zamekwarszawasm.png" },
  { id: 7, path: "zamekwarszawasm.png" },
  // Dodaj więcej obiektów z informacjami o obrazach
];
const NewPleaceCard = () => {
  return (
    <section id="NewPleace" className="h-screen  overscroll-x-none">
      <div className="flex flex-col gap-2   h-[100%]">
        <h3 className="text-black bg-white text-center  font-semibold text-xl py-4 px-4 tracking-wide rounded-xl">
          Ostatnio dodane miejsca
        </h3>

        <div className="flex gap-2  h-48 lg:h-max overflow-x-auto shadow-xl shadow-lime-500/50  px-1">
          <div className=" flex gap-2  lg:w-1/4 h-84 lg:h-96 lg:py-12 ">
            {images.map(({ id, path }) => (
              <Image
              className='shadow-xl shadow-lime-700/50  hover:shadow-primary  hover:brightness-50'
                key={id}
                src={`/NewPleaceImg/${path}`}
                alt={`Image ${id}`}
                width={500}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPleaceCard;

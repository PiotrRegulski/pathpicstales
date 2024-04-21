import React from "react";
import Image from "next/image";


const PathCard = () => {
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
  return (
    <div className="flex flex-col items-center justify-between h-96">
      <div className="relative w-full ">
        <div className="absolute -z-10 w-full h-96 px-2 ">
          <Image
            src={`/NewPleaceImg/zamekwarszawasm.png`}
            alt="bacground image"
            className="w-full h-full rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
        <div className="px-3"><p>Coś tam</p></div>

      </div>
    </div>
  );
};

export default PathCard;

import React from "react";
import Link from "next/link";
import { MdModeOfTravel, MdOutlineTravelExplore } from "react-icons/md";
import { LiaPhotoVideoSolid } from "react-icons/lia";
const Register = () => {
  return (
    <div className="flex lg:w-full flex-col items-center justify-between p-2 lg:p-24  ">
      <div className="bg-lime-700 p-8 rounded-xl shadow-md lg:w-1/3 h-full ">
        <h1 className="text-center text-white py-3 text-xl">Zarejestruj się, żeby:</h1>
        <div>
          <ul className="flex flex-row border-2 bg-lime-300 py-3 px-3 my-2 rounded-full text-sm">
            <li className="flex flex-col items-center  text-center lg:w-1/3 ">
              <MdModeOfTravel className="w-10 h-10" />
              Tworzyć nowe trasy
            </li>
            <li className="flex flex-col items-center mx-4 text-center  lg:w-1/3 ">     
              <MdOutlineTravelExplore className="w-10 h-10" />
              Oceniać trasy innych
            </li>
            <li className="flex flex-col items-center  text-center lg:w-1/3  ">
              <LiaPhotoVideoSolid className="w-10 h-10" />
              Zapisać ulubione miejsca
            </li>
          </ul>
        </div>
        <form className="flex flex-col bg-lime-300 items-center border-4 border-primary rounded-xl py-4 px-4 mt-10">
        <input type="text" className=" text-xl rounded-xl pl-2 " placeholder="nazwa użytkownika" required />
          <input type="text" className="my-5 text-xl rounded-xl pl-2 " placeholder="email" required />
          <input type="password" className="text-xl rounded-xl pl-2" placeholder="hasło" required />
          <button type="submit" className=" flex items-center justify-center text-xl gap-4 text-primary bg-white rounded-full hover:text-white hover:bg-primary px-4 py-3 mx-2 my-4">Stwórz profil</button>
        </form>
        <div className="flex flex-col bg-lime-300 items-center border-4 border-primary rounded-xl py-4 px-4 mt-10"><Link href="/">Masz już konto Zaloguj się</Link></div>
        
      </div>
    </div>
  );
};

export default Register;

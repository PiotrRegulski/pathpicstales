import WelcomeCard from "@/components/ui/mainpage/WelcomeCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <WelcomeCard />
      {/* <div className="flex  justify-between  ">
        {" "}
        <div className="grow-0 h-14 ">
          <Image
            src="/mainpageimg/lewy.png"
            width={504}
            height={607}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
       
        <div className="grow-0 h-14 p-2 mt-12">
          <Image
            src="/mainpageimg/prawy.png"
            width={504}
            height={607}
            className="hidden md:block  "
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div> */}
    </main>
  );
}

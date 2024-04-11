import CardWithPath from "@/components/ui/mainpage/CardWithPath";
import WelcomeCard from "@/components/ui/mainpage/WelcomeCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <WelcomeCard />
      <CardWithPath />
    </main>
  );
}

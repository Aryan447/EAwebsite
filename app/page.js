import Image from "next/image";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <body>
        <Navbar />
        <Intro />
      </body>
    </>
  );
}

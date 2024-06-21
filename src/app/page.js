import Image from "next/image";
import Hero from "@/components/hero";
import Why from "@/components/why";
import Apex from "@/components/apex";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-slate-800">
      <Hero />
        <Why />
        <Apex />
    </main>
  );
}

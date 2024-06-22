import Hero from "@/components/hero";
import Courses from "@/components/courses";
import Benefits from "@/components/benefits";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-green-300">
      <Hero />
      <Courses />
        <Benefits />
        <Pricing  />
        <CTA />
    </main>
  );
}

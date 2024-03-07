import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import WhatIKnow from "@/components/What I Know/WhatIKnow";

export default function Home() {
  return (
    <>
    <div className=" max-w-screen-xl w-screen flex flex-col items-center">
      <Hero/>
      <WhatIKnow/>
      <Projects/>
      <Contact/> 
    </div>

    </>
  );
}

import Agents from "../components/home/Agents";
import Closer from "../components/home/Closer";
import Engagement from "../components/home/Engagement";
import Faq from "../components/home/Faq";
import Gap from "../components/home/Gap";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Principles from "../components/home/Principles";
import Sources from "../components/home/Sources";

export default function Home() {
  return (
    <>
      <Hero />
      <Gap />
      <HowItWorks />
      <Sources />
      <Agents />
      <Engagement />
      <Principles />
      <Faq />
      <Closer />
    </>
  );
}

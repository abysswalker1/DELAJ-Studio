import dynamic from "next/dynamic";

// Components
import MainScreen from "@/components/main-screen/MainScreen"
import ForAdult from "@/components/_sections/for-adult/ForAdult";
import ForKids from "@/components/_sections/for-kids/ForKids";
import Section from "@/components/section/Section";
import Landings from "@/components/_sections/_landings/Landings";
import { ISection } from "@/types";
import Scroller from "@/components/scroller/Scroller";
import Menu from "@/components/_sections/menu/Menu";
import About from "@/components/_sections/about/About";
import Career from "@/components/_sections/career/Career";
import Contacts from "@/components/_sections/contacts/Contacts";
import Faq from "@/components/_sections/faq/Faq";
import Ideas from "@/components/_sections/ideas/Ideas";
import KidsButton from "@/components/landing-switch-button/KidsButton";
import AdultButton from "@/components/landing-switch-button/AdultButton";

const Page = () => {
  return (
    <>
    <Scroller>
      <Section id="first-landing">
        <Landings 
          FirstLanding={[<ForKids key="1-kids-page"/>, <KidsButton key="1-kids-btn"/>]}
          SecondLanding={[<ForAdult key="1-adult-page"/>, <AdultButton key="1-adult-btn"/>]}
        />
      </Section>
        
      <Section id="second-landing">
        <Landings 
          FirstLanding={[<ForAdult key="2-kids-page"/>, <AdultButton key="2-kids-btn"/>]}
          SecondLanding={[<ForKids key="2-adult-page"/>, <KidsButton key="2-adu;t-btn"/>]}
        />
      </Section>

      <Section id="menu">
        <Menu />
      </Section>

      <Section id="about">
        <About />
      </Section>

      <Section id="career">
        <Career />
      </Section>

      <Section id="contacts">
        <Contacts />
      </Section>

      <Section id="faq">
        <Faq />
      </Section>

      <Section id="ideas">
        <Ideas />
      </Section>

    </Scroller>
    <MainScreen />
    </>
  )
}

export default Page;
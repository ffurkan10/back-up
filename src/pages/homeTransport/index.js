import React from "react";
import ScrollToTop from "../../components/scrollToTop";
import TopBanner from "../../components/topBanner";
import TextImage from "../../components/textImage";
import TextField from "../../components/textField";
import transportData from "../../locales/pages/home-transport.json";
import ContactForm from "../../components/contactForm";
import Border from "../../components/border";
import TransportSection from "../../components/sections/transportSection";

const HomeTransport = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSectionSecond = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log(id);
  };

  return (
    <>
      <ScrollToTop />

      <TopBanner title={transportData?.topBanner?.title} />

      <TextImage
        title={transportData?.heroData?.title}
        list={transportData?.heroData?.list}
        text={transportData?.heroData?.text}
        text2={transportData?.heroData?.text2}
        transport
      />

      <Border />

      <TransportSection
        scrollToSectionSecond={scrollToSectionSecond}
        scrollToSection={scrollToSection}
        title={transportData?.refArray?.title}
        iconData={transportData?.refArray?.iconCard}
        buttonData={transportData?.refArray?.refButtons}
        featureData={transportData?.refArray?.featureCards}
      />

      <Border />

      <TextField data={transportData?.LongText} loadTop />

      <TextField LoadGiversBot data={transportData?.heroDataBottom} />

      <ContactForm />
    </>
  );
};

export default HomeTransport;

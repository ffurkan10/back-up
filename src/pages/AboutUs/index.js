import React, { useEffect, useState } from "react";
import TopBanner from "../../components/topBanner";
import TextImage from "../../components/textImage";
import IconCard from "../../components/iconCard";
import AboutData from "../../locales/pages/about-us.json";
import AboutCard from "../../components/aboutCard";
import TextField from "../../components/textField";
import TextImage2 from "../../components/textImage2";
import ScrollToTop from "../../components/scrollToTop";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <ScrollToTop />

      <TopBanner title={AboutData?.topBanner?.title} />

      <TextImage2
        about
        title={AboutData?.heroData?.title}
        desc={AboutData?.heroData?.desc}
        text={AboutData?.heroData?.text}
        image={AboutData?.heroData?.image}
      />

      <AboutCard
        data={AboutData?.numberCard?.cards}
        title={AboutData?.numberCard?.title}
        text={AboutData?.numberCard?.text}
        image={AboutData?.numberCard?.image}
        lastCard={AboutData?.numberCard?.lastCard}
      />

      <TextField data={AboutData?.mission} />

      <IconCard
        about
        isMobile={isMobile}
        data={AboutData?.iconCard?.icons}
        title={AboutData?.iconCard?.title}
      />

      <TextImage
        background
        buttonText={AboutData?.heroDataBottom?.buttonText}
        icon={AboutData?.heroDataBottom?.icon}
        image={AboutData?.heroDataBottom?.image}
        title={AboutData?.heroDataBottom?.title}
        desc={AboutData?.heroDataBottom?.desc}
        text={AboutData?.heroDataBottom?.text}
      />

      <TextImage
        gold
        image={AboutData?.lastText?.image}
        title={AboutData?.lastText?.title}
        text={AboutData?.lastText?.text}
      />
    </>
  );
};

export default AboutUs;

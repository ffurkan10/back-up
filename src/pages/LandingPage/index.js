import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import mainData from "../../locales/home.json";
import bannerIcon from "../../assets/icons/right-arrow.svg";
import LandingPageMain from "../../components/sections/landingPageMain";
import SwiperMain from "../../components/sections/swiperMain";
import SectoralNews from "../../components/sections/sectoralNews";
import Icons from "../../locales/pages/icons";
import ScrollToTop from "../../components/scrollToTop";

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth <= 992);
    };
    setIsTablet();
    window.addEventListener("resize", checkIsTablet);
    return () => {
      window.removeEventListener("resize", checkIsTablet);
    };
  }, []);

  return (
    <>
      <ScrollToTop />

      <Banner
        data={mainData?.heroData?.bannerData}
        icon={bannerIcon}
        bannerBottom={Icons}
        isTablet={isTablet}
      />

      <LandingPageMain isTablet={isTablet} data={mainData?.dataHomeMain} />

      <SwiperMain
        isTablet={isTablet}
        isMobile={isMobile}
        title={mainData?.dataAvailable?.title}
        tabletTitle={mainData?.dataAvailable?.mobileTitle}
        image={mainData?.dataAvailable?.image}
        data={mainData?.dataAvailable?.dataHomeSlider}
      />

      <SectoralNews
        isMobile={isMobile}
        data={mainData?.campainSlider?.dataSlider}
        title={mainData?.campainSlider?.title}
        mobileTitle={mainData?.campainSlider?.mobileTitle}
      />
    </>
  );
};

export default LandingPage;

import React, { useEffect, useState } from "react";
import TopBanner from "../../components/topBanner";
import NewsData from "../../locales/pages/sectoral-news.json";
import SectoralSection from "../../components/sections/sectoralSection";
import ScrollToTop from "../../components/scrollToTop";

const SectoralNewsPage = () => {
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

      <TopBanner title={NewsData?.newsSlider?.title} />

      <SectoralSection
        isMobile={isMobile}
        data={NewsData?.newsSlider?.dataSlider}
      />
    </>
  );
};

export default SectoralNewsPage;

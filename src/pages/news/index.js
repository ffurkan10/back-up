import React, { useEffect, useState } from "react";
import NewsSection from "../../components/sections/newsSection";
import { useParams } from "react-router-dom";
import SectoralData from "../../locales/pages/sectoral-news.json";
import TopBanner from "../../components/topBanner";
import TruckBanner from "../../assets/truck-banner.png";
import ScrollToTop from "../../components/scrollToTop";
import TabletBanner from "../../assets/tablet-truck-banner.png";

const News = () => {
  const { id } = useParams();

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
      setIsTablet(window.innerWidth <= 1024);
    };
    checkIsTablet();
    window.addEventListener("resize", checkIsTablet);
    return () => {
      window.removeEventListener("resize", checkIsTablet);
    };
  }, []);

  const allNews = SectoralData?.newsSlider?.dataSlider || [];

  const selectedIndex = allNews.findIndex((item) => item.id === parseInt(id));

  const previousItem = allNews[selectedIndex - 1];
  const nextItem = allNews[selectedIndex + 1];

  const hasPrevious = selectedIndex > 0;
  const hasNext = selectedIndex < allNews.length - 1;

  const previousLink = hasPrevious ? `/haber/${previousItem.id}` : null;
  const nextLink = hasNext ? `/haber/${nextItem.id}` : null;

  const selectedItem = allNews.find((item) => item.id === parseInt(id));
  console.log(SectoralData?.newsSlider?.dataSlider);
  return (
    <>
      <ScrollToTop />

      <TopBanner title={SectoralData?.newsSlider?.title} />

      <NewsSection
        detailImage={selectedItem?.detailImage}
        imageMobile={TruckBanner}
        data={selectedItem?.main}
        nextLink={nextLink}
        previousLink={previousLink}
        nextItem={nextItem}
        previousItem={previousItem}
        isMobile={isMobile}
        isTablet={isTablet}
        TabletBanner={TabletBanner}
        allNews={SectoralData?.newsSlider?.dataSlider}
      />
    </>
  );
};

export default News;

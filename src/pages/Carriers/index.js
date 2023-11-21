import React, { useEffect, useState } from "react";
import TopBanner from "../../components/topBanner";
import TextImage from "../../components/textImage";
import IconCard from "../../components/iconCard";
import CarriersData from "../../locales/pages/carriers.json";
import BannerStore from "../../components/bannerStore";
import TextField from "../../components/textField";
import ScrollToTop from "../../components/scrollToTop";

const Carriers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
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

      <TopBanner title={CarriersData?.topBanner?.title} />

      <TextImage
        title={CarriersData?.heroData?.title}
        desc={CarriersData?.heroData?.desc}
        image={CarriersData?.heroData?.image}
        text={CarriersData?.heroData?.text}
      />

      <IconCard data={CarriersData?.iconCard} />

      {isMobile && (
        <BannerStore
          title={CarriersData?.bannerBottom?.mobileTitle}
          image1={CarriersData?.bannerBottom?.apple}
          image2={CarriersData?.bannerBottom?.store}
        />
      )}

      <TextField
        text={CarriersData?.heroDataBottom?.desc}
        carriers
        data={CarriersData?.LongText}
      />

      {/* <TextImage
        bottom
        desc={CarriersData?.heroDataBottom?.desc}
        storeTitle={CarriersData?.bannerBottom?.title}
        storeImage1={CarriersData?.bannerBottom?.apple}
        storeImage2={CarriersData?.bannerBottom?.store}
        store
      /> */}

      {!isMobile && (
        <BannerStore
          title={CarriersData?.bannerBottom?.title}
          image1={CarriersData?.bannerBottom?.apple}
          image2={CarriersData?.bannerBottom?.store}
        />
      )}
    </>
  );
};

export default Carriers;

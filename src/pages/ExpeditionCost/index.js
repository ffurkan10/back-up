import React from "react";
import TextImage from "../../components/textImage";
import Data from "../../locales/pages/expedition-cost.json";
import TopBanner from "../../components/topBanner";
import ScrollToTop from "../../components/scrollToTop";

const ExpeditionCost = () => {
  return (
    <>
      <ScrollToTop />

      <TopBanner title={Data?.topBanner.title} />

      <TextImage
        normalImage
        title={Data?.heroData?.title}
        text={Data?.heroData?.text}
        image={Data?.heroData?.image}
      />
    </>
  );
};

export default ExpeditionCost;

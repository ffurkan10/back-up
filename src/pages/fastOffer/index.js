import React from "react";
import TopBanner from "../../components/topBanner";
import OfferData from "../../locales/pages/fast-offer.json";
import OfferForm from "../../components/sections/offerForm";
import ScrollToTop from "../../components/scrollToTop";

const FastOffer = () => {
  return (
    <>
      <ScrollToTop />

      <TopBanner title={OfferData?.topBanner?.title} />

      <OfferForm />
    </>
  );
};

export default FastOffer;

import React from "react";
import ContactForm from "../../components/contactForm";
import TopBanner from "../../components/topBanner";
import TextImage from "../../components/textImage";
import IconCard from "../../components/iconCard";
import CooperativeData from "../../locales/pages/cooperative.json";
import ScrollToTop from "../../components/scrollToTop";

const Cooperative = () => {
  return (
    <>
      <ScrollToTop />

      <TopBanner title={CooperativeData?.topBanner?.title} />

      <TextImage
        title={CooperativeData?.heroData?.title}
        desc={CooperativeData?.heroData?.desc}
        image={CooperativeData?.heroData?.image}
        text={CooperativeData?.heroData?.text}
      />

      <IconCard grid={4} data={CooperativeData?.iconCard} />

      <ContactForm />
    </>
  );
};

export default Cooperative;

import React from "react";
import TopBanner from "../../components/topBanner";
import CommissionData from "../../locales/pages/commission.json";
import TextImage from "../../components/textImage";
import IconCard from "../../components/iconCard";
import ContactForm from "../../components/contactForm";
import ScrollToTop from "../../components/scrollToTop";

const Commission = () => {
  return (
    <>
      <ScrollToTop />

      <TopBanner title={CommissionData?.topBanner?.title} />

      <TextImage
        title={CommissionData?.heroData?.title}
        desc={CommissionData?.heroData?.desc}
        image={CommissionData?.heroData?.image}
        text={CommissionData?.heroData?.text}
      />

      <IconCard data={CommissionData?.iconCard} />

      <TextImage
        bottom
        title={CommissionData?.heroDataBottom?.title}
        desc={CommissionData?.heroDataBottom?.desc}
        text={CommissionData?.heroDataBottom?.text}
      />

      <ContactForm />
    </>
  );
};

export default Commission;

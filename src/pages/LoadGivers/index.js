import React from "react";
import TopBanner from "../../components/topBanner";
import TextImage from "../../components/textImage";
import IconCard from "../../components/iconCard";
import ContactForm from "../../components/contactForm";
import LoadData from "../../locales/pages/loadGivers.json";
import TextField from "../../components/textField";
import ScrollToTop from "../../components/scrollToTop";

const LoadGivers = () => {
  return (
    <>
      <ScrollToTop />

      <TopBanner title={LoadData?.topBanner?.title} />

      <TextImage
        title={LoadData?.heroData?.title}
        list={LoadData?.heroData?.list}
        image={LoadData?.heroData?.image}
        text={LoadData?.heroData?.text}
        text2={LoadData?.heroData?.text2}
        load
      />

      <IconCard grid={4} data={LoadData?.iconCard} />

      <TextField data={LoadData?.LongText} loadTop />

      <TextField LoadGiversBot data={LoadData?.heroDataBottom} />

      {/* <TextImage
        bottom
        title={LoadData?.heroDataBottom?.title}
        desc={LoadData?.heroDataBottom?.desc}
        text={LoadData?.heroDataBottom?.text}
      /> */}

      <ContactForm />
    </>
  );
};

export default LoadGivers;

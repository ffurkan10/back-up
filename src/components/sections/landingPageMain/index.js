import React from "react";
import Style from "./style.module.scss";
import Card from "../../card";
import Button from "../../button";

const LandingPageMain = ({ data, isTablet }) => {
  return (
    <section className={Style.allContainer}>
      <div className={Style.navigation}>
        <Button href={"/hizli-teklif"}>Hızlı Teklif Al</Button>
        <Button>Panele Giriş Yap</Button>
      </div>
      <div className="container">
        <div className={Style.top}>
          <h3>{data?.title}</h3>
          <p>{data?.firstDesc}</p>
          <br />
          <p>{data?.secondDesc}</p>
          <br />
          <p>{data?.thirdDesc}</p>
        </div>

        <div className={Style.cardSection}>
          {data?.mainCards?.map((item) => (
            <Card
              isTablet={isTablet}
              title={item?.title}
              tabletText={item?.tabletText}
              desc={item?.text}
              hrefText={item?.hrefText}
              icon={item?.icon}
              isFirst={item?.id === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPageMain;

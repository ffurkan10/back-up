import React from "react";
import Style from "./style.module.scss";
import Button from "../../button";

const TransportSection = ({
  buttonData,
  iconData,
  title,
  featureData,
  scrollToSection,
  scrollToSectionSecond,
}) => {
  return (
    <div className="container">
      <div className={Style.transportContainer}>
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>

        <div className={Style.iconSection}>
          {iconData?.map((icon) => (
            <div
              onClick={() => scrollToSection(`section-${icon.ref}`)}
              key={icon?.id}
              className={Style.card}
            >
              <img src={icon?.icon} alt="" />
              <p dangerouslySetInnerHTML={{ __html: icon?.title }}></p>
            </div>
          ))}
        </div>

        <div className={Style.buttonSection}>
          {buttonData?.map((btn) => (
            <p>{btn?.text}</p>
          ))}
        </div>

        <div className={Style.border}></div>

        <div className={Style.featureContainer}>
          {featureData?.map((feature) => {
            return (
              <div
                id={`section-${feature?.ref}`}
                onClick={() =>
                  scrollToSectionSecond(`subSection-${feature.headId}`)
                }
                className={Style.featureCard}
              >
                <h4>{feature.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: feature?.list }}></p>
                <Button>{feature.button}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransportSection;

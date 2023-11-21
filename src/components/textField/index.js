import React from "react";
import Style from "./style.module.scss";
import cn from "classnames";

const TextField = ({ data, LoadGiversBot, loadTop, carriers, text }) => {
  return (
    <div className="container">
      <div
        className={cn(
          Style.textField,
          LoadGiversBot && Style.LoadGiversBot,
          loadTop && Style.loadTop,
          carriers && Style.carriers
        )}
      >
        {data?.map((item) => {
          return (
            <div
              key={item?.id}
              id={`subSection-${item?.headId}`}
              className={Style.textCard}
            >
              <h1 dangerouslySetInnerHTML={{ __html: item?.title }}></h1>
              <p dangerouslySetInnerHTML={{ __html: item?.desc }}></p>

              {item?.bottom && (
                <div className={Style.textFeature}>
                  {item?.bottom?.map((data) => (
                    <div className={Style.featureCard}>
                      <h2
                        dangerouslySetInnerHTML={{ __html: data?.title }}
                      ></h2>
                      <p dangerouslySetInnerHTML={{ __html: data?.desc }}></p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {text && (
          <p
            className={Style.specialText}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        )}
      </div>
    </div>
  );
};

export default TextField;

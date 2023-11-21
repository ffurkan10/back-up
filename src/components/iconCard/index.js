import React, { useState } from "react";
import Style from "./style.module.scss";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IconCard = ({ data, grid, about, title, isMobile }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (index) => {
    if (hovered === index) {
      setHovered(null);
    } else {
      setHovered(index);
    }
  };

  return (
    <div
      className={cn(
        Style.iconContainer,
        about && Style.aboutContainer,
        isMobile && Style.mobileContainer
      )}
    >
      {data?.length >= 8 ? (
        <div className={Style.container}>
          <h3>{title}</h3>
        </div>
      ) : (
        <div className={cn("container", isMobile && Style.mobile)}>
          {about && <h3>{title}</h3>}

          {about ? (
            <>
              {isMobile ? (
                <Swiper
                  loop
                  grabCursor
                  breakpoints={{
                    560: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    360: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                  }}
                  allowTouchMove={true}
                  className={cn(Style.swipper, Style.swipperAbout)}
                >
                  {data?.map((item, index) => {
                    return (
                      <SwiperSlide key={item?.id}>
                        <div
                          key={index}
                          onClick={() => handleClick(index)}
                          className={cn(
                            Style.iconCard,
                            hovered === index && Style.hoveredDiv
                          )}
                        >
                          <img
                            src={
                              hovered === index ? item?.hoverIcon : item?.icon
                            }
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <div
                  className={cn(Style.iconList, grid === 4 && Style.loadIcons)}
                >
                  {data?.map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(false)}
                      className={cn(
                        Style.iconCard,
                        hovered === index && Style.hoveredDiv
                      )}
                    >
                      <img
                        src={hovered === index ? item?.hoverIcon : item?.icon}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className={cn(Style.iconList, grid === 4 && Style.loadIcons)}>
              {data?.map((item) => (
                <div className={Style.iconCard}>
                  <img src={item?.icon} alt="" />
                  {item?.title && (
                    <p dangerouslySetInnerHTML={{ __html: item?.title }}></p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IconCard;

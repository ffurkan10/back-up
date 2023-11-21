import React, { useEffect, useRef, useState } from "react";
import Style from "./style.module.scss";
import cn from "classnames";
import Button from "../button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Navigation from "../../components/navigation";

const Banner = ({ icon, bannerBottom, data, isTablet }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  const handleBottomClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <div className={Style.banner}>
        {isTablet && <Navigation />}

        <div className={cn(Style.customContainer)}>
          <Swiper
            loop
            grabCursor
            modules={[Autoplay]}
            autoplay={{
              disableOnInteraction: false,
            }}
            speed={1000}
            onSlideChange={handleSlideChange}
            className={Style.swipper}
            pagination={{
              clickable: !isTablet,
              el: ".swiper-pagination",
            }}
            slidesPerView={1}
            spaceBetween={30}
            allowTouchMove={true}
            ref={swiperRef}
          >
            {data?.map((item) => {
              return (
                <SwiperSlide key={item?.id}>
                  <div className={Style.main}>
                    <div className={Style.items}>
                      <p>{item?.heroTopTitle}</p>
                      <h1>{item?.heroTitle}</h1>
                      <p>{item?.desc}</p>
                      {/* <div className={Style.button}>
                      <Button to="/">
                        {item?.button} <img src={icon} alt="arrow" />
                      </Button>
                    </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
         
            <div className={cn(Style.bannerBottom, isTablet && Style.tabletBottom)}>
              {bannerBottom?.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleBottomClick(index)}
                  className={cn(
                    Style.card,
                    index === activeIndex ? Style.active : Style.paginationItem
                  )}
                >
                  {index === activeIndex ? <span></span> : <span></span>}
                </div>
              ))}
            </div>
          
            <div className={cn(Style.bannerBottom,  Style.desktop)}>
              {bannerBottom?.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleBottomClick(index)}
                  className={cn(
                    Style.card,
                    index === activeIndex ? Style.active : Style.paginationItem
                  )}
                >
                  {index === activeIndex ? (
                    React.cloneElement(item.icon, { fill: "white" })
                  ) : (
                    <span>{item?.icon}</span>
                  )}

                  <p dangerouslySetInnerHTML={{ __html: item?.text }}></p>
                </div>
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Banner;

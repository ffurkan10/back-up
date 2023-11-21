import React, { useEffect, useState } from "react";
import data from "../../locales/layout/Navigation.json";
import Style from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import cn from "classnames";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? Style.active : "";
  };

  const isActiveHome = (path) => {
    if (path === "/" && location.pathname === "/") {
      return ` ${Style.anasayfaActive}`;
    }
  };

  const isActiveOffer = (path) => {
    if (
      path === "/hizli-teklif-basari" &&
      location.pathname === "/hizli-teklif-basari"
    ) {
      return ` ${Style.teklifActive}`;
    }
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div
      className={cn(
        Style.navContainer,
        isActiveOffer("/hizli-teklif-basari"),
        isActiveHome("/")
      )}
    >
      <div className={cn("container", Style.customContainer)}>
        {isMobile ? (
          <Swiper
            className={cn("swiper-custom", Style.swipper)}
            // spaceBetween={30}
            // slidesPerView={3}

            breakpoints={{
              1700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              560: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              360: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              260: {
                slidesPerView: 2.5,
                spaceBetween: 15,
              },
            }}
          >
            {data?.dataNavigation?.map((item) => (
              <SwiperSlide key={item.id}>
                <Link className={isActive(item.href)} to={item.href}>
                  {item.text}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul>
            {data?.dataNavigation?.map((item) => (
              <li key={item.id}>
                <Link to={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;

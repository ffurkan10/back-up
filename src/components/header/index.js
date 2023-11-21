import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import Navigation from "../navigation";
import icon from "../../assets/icons/mobile-header.svg";
import { Link, useLocation } from "react-router-dom";
import phone from "../../assets/icons/phone-header.svg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const isActiveHome = (path) => {
    if (path === "/" && location.pathname === "/") {
      return ` ${Style.anasayfaActive}`;
    }
    // return location.pathname === path ? `${Style.active}` : "";
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
    <div className={Style.allContainer}>
      <div className={Style.headerContainer}>
        <div className="container">
          <div className={Style.main}>
            <div className={Style.left}>
              <Link to="/">
                <img className={Style.logo} src={Logo} alt="Header Logo" />
              </Link>
            </div>
            {isMobile ? (
              <div className={Style.mobileNav}>
                <Link to="tel:444 69 85">
                  <img src={phone} alt="" />
                </Link>
              </div>
            ) : (
              <div className={Style.right}>
                <Link to="/hizli-teklif">Hızlı Teklif Al</Link>
                <button>Panele Giriş Yap</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={isActiveHome("/")}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Location from "../../assets/icons/map.svg";
import PhoneDesktop from "../../assets/icons/phone-desktop.svg";
import MailDesktop from "../../assets/icons/mail-desktop.svg";
import LocationDesktop from "../../assets/icons/map-desktop.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import cn from "classnames";

const Footer = () => {
  const handleHaritaYonlendirme = () => {
    const konumAdi = "Yurt Lojistik L1 Belge Kiralama";
    const haritaURL = `https://www.google.com/maps?q=${encodeURIComponent(
      konumAdi
    )}`;
    window.open(haritaURL, "_blank");
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className={Style.footer}>
      <div className={cn("container", Style.customContainer)}>
        <div className={Style.left}>
          <img className={Style.logo} src={Logo} alt="" />
          <ul>
            <li>
              <div className={Style.image}>
                <img src={isMobile ? Phone : PhoneDesktop} alt="" />
              </div>

              <Link to="tel:444 69 85">444 69 85</Link>
            </li>
            <li>
              <div className={Style.image}>
                <img src={isMobile ? Mail : MailDesktop} alt="mail" />
              </div>

              <Link to="mailto:iletisim@kamyoon.com.tr">
                iletisim@kamyoon.com.tr
              </Link>
            </li>
            <li className={Style.list}>
              <div className={Style.image}>
                <img
                  src={isMobile ? Location : LocationDesktop}
                  alt="location"
                />
              </div>

              <a
                className={Style.map}
                href="#"
                onClick={handleHaritaYonlendirme}
              >
                Balıkesir Üniversitesi Çağış Yerleşkesi Teknokent No:3/9
                Altıeylül/Balıkesir
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.right}>
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";

const SectoralSection = ({ data, isMobile }) => {
  return (
    <div className="container">
      <div className={Style.itemName}>
        {data?.map((item) => {
          return (
            <div className={Style.card}>
              <Link
                state={data.filter((item) => item.id === item.id)}
                to={`/haber/${item.id}`}
              >
                <img src={isMobile ? item?.mobileImage : item?.image} alt="" />
                <h3
                  dangerouslySetInnerHTML={{
                    __html: isMobile ? item?.mobileTitle : item?.title,
                  }}
                ></h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectoralSection;

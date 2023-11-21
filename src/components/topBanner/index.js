import React from "react";
import Style from "./style.module.scss";
import cn from "classnames";

const TopBanner = ({ title }) => {
  return (
    <div className={Style.banner}>
      <div className={cn("container", Style.customContainer)}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TopBanner;

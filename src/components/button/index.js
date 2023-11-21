import React from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";

const Button = ({ isFirst, children, href, disabled, onClick, swiper }) => {
  return (
    <>
      {href ? (
        <Link
          className={cn(
            Style.button,
            isFirst && Style.isFirst,
            swiper && Style.swiper
          )}
          to={href}
        >
          <a href={Style.linkHref}>{children}</a>
        </Link>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          className={cn(
            Style.button,
            isFirst && Style.isFirst,
            swiper && Style.swiper,
            disabled && Style.disabled
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

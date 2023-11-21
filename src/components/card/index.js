import React from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";
import Button from "../button";

const Card = ({
  detail,
  title,
  desc,
  hrefText,
  href,
  icon,
  isFirst,
  sector,
  image,
  news,
  isTablet,
  tabletText,
}) => {
  return (
    <div
      className={cn(
        Style.card,
        isFirst && Style.isFirst,
        sector && Style.sector,
        news && Style.news
      )}
    >
      {detail ? (
        <Link state={detail} to={href}>
          {image && <img src={image} alt="" />}
          {title && <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>}
          {desc && <p dangerouslySetInnerHTML={{ __html: desc }}></p>}
          {hrefText && (
            <>
              {isFirst ? (
                <div>
                  <Button isFirst>
                    {hrefText} <img src={icon} alt="" />
                  </Button>
                </div>
              ) : (
                <div>
                  <Button>{hrefText}</Button>
                </div>
              )}
            </>
          )}
        </Link>
      ) : (
        <>
          {image && <img src={image} alt="" />}
          {title && <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>}
          {desc && (
            <p
              dangerouslySetInnerHTML={{ __html: isTablet ? tabletText : desc }}
            ></p>
          )}
          {hrefText && (
            <>
              {isFirst ? (
                <div>
                  <Button isFirst>
                    {hrefText} <img src={icon} alt="" />
                  </Button>
                </div>
              ) : (
                <div>
                  <Button>{hrefText}</Button>
                </div>
              )}
            </>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Card;

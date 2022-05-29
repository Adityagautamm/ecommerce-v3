import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HomeBanner = ({ bannerData }) => {
  return (
    <div className="home-banner-container">
      <img
        src={urlFor(bannerData.image)}
        className="home-banner-container__image"
      />
      <div className="home-banner-container_text">
        <h1>{bannerData.product}</h1>
        <h5 className="home-banner-container_text-h5">{bannerData.midText}</h5>
      </div>
      <button className="home-banner__button">{bannerData.buttonText} </button>
    </div>
  );
};

export default HomeBanner;

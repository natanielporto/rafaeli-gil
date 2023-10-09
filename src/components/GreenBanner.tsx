"use client";
import React from "react";

interface GreenBannerProps {
  title: string;
  cta: string;
  mainInfo: string;
  description: string;
}

export const GreenBanner = ({
  title,
  cta,
  mainInfo,
  description,
}: GreenBannerProps) => {
  const phoneNumber = "+5512996211534";

  const handleClick = () => {
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.location.href = whatsappWebUrl;
  };

  return (
    <div className="bg-lightGreen">
      <div className="flex flex-col justify-center items-center mb-4 p-8">
        <div className="text-2xl uppercase my-4 text-center">{title}</div>
        <button className="p-2 bg-white rounded-3xl mb-4" onClick={handleClick}>
          {cta}
        </button>
        <div className="text-center text-xl">{mainInfo}</div>
        <div className="text-center">{description}</div>
      </div>
    </div>
  );
};

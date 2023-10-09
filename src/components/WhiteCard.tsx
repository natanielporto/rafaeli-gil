"use client";

import React from "react";

interface WhiteCardProps {
  title: string;
  cta: string;
  mainInfo: string;
  description: string;
  orientation: "left" | "right";
}

export const WhiteCard = ({
  title,
  cta,
  mainInfo,
  description,
  orientation,
}: WhiteCardProps) => {
  const phoneNumber = "+5512996211534";

  const handleClick = () => {
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.location.href = whatsappWebUrl;
  };

  return (
    <div className="bg-white p-8 mb-4">
      <div className="uppercase text-xl mb-4">{title}</div>
      <div
        className="bg-lightGreen mb-4 inline-block p-2 text-lg rounded-3xl font-bold"
        onClick={handleClick}
      >
        {cta}
      </div>
      <div className="text-lg mb-4">{mainInfo}</div>
      <div>{description}</div>
    </div>
  );
};

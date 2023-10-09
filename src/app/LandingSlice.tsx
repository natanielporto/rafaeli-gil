import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/rafa-gil-logo-white.png";
import Photo from "../../public/assets/photo.jpg";

export const LandingSlice = () => {
  return (
    <div className="relative">
      <div>
        <Image src={Photo} alt="Foto Rafaeli Gil" />
      </div>
      <div className="h-[87px] bg-cyan-950 flex justify-between p-4">
        <Image
          className="absolute -top-28 -right-28 scale-[.3] pl-4"
          src={Logo}
          alt="Logo Rafaeli Gil, um R e um G"
        />
        <div className="text-lightGreen uppercase flex items-center justify-around text-2xl w-[70%]">
          Sua consultoria para o sucesso
        </div>
      </div>
    </div>
  );
};

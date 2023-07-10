import React from "react";
import Image from "next/image";
import LogoImage from "@/assets/images/petvet-logo.png";

const Logo = ({ image = LogoImage, size = 64 }) => {
  return (
    <Image
      src={image}
      width={size}
      height={size}
      alt="Petvet"
      priority
      unoptimized={true}
      className="inline object-cover mr-1"
    />
  );
};

export default Logo;

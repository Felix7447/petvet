import React from "react";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";

const Shop = ({ children, schedule, title, subtitle, link, logo }) => {
  return (
    <div className="bg-primary my-4 px-2 py-8 lg:p-6 ring-2 ring-text rounded-xl lg:px-24">
      <h1 className="text-2xl text-center mt-2">{schedule}</h1>
      <div className="text-thin-shadow w-full flex flex-col gap-4 items-center lg:flex-row lg:justify-center  mb-4 lg:mb-0">
        <aside className="relative w-48 h-48 lg:w-72 lg:h-72 my-4 rounded-full border-2 border-text flex justify-center items-center shadow-none">
          <Image
            src={logo}
            fill={true}
            alt="logo-image"
            className="rounded-full scale-95"
          />
        </aside>
        <aside className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-2xl mt-2">EN {title}</h1>
          <h3 className="text-xl text-text-secondary">{subtitle}</h3>
          <p className="text-text-secondary text-lg my-4">{children}</p>
          <Link
            className="flex justify-center lg:justify-start"
            href={link}
            target="_blank"
          >
            <button className="w-3/5 text-shadow text-xl text-text-secondary bg-secondary rounded-md border-2 border-text">
              Mas Info <TbExternalLink className="inline" />
            </button>
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Shop;

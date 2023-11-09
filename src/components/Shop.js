import React from "react";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";

import Logo from "./Logo";
import whatsappLogo from "@/assets/images/whatsapp-logo.png";
import Links from "@/utils/links";

const Shop = ({ children, schedule, title, subtitle, link, logo }) => {
  return (
    <section className="bg-primary max-w-xl w-full h-[90vh] my-4 px-2 py-8 lg:p-6 ring-2 ring-text rounded-xl">
      <h1 className="text-2xl text-center mt-2">{schedule}</h1>
      <main className="text-thin-shadow w-full flex flex-col gap-4 items-center lg:justify-center  mb-4 lg:mb-0">
        <aside className="relative w-48 h-48 lg:w-72 lg:h-72 my-4 rounded-full border-2 border-text flex justify-center items-center shadow-none">
          <Image
            src={logo}
            fill={true}
            alt="logo-image"
            className="rounded-full scale-95"
          />
        </aside>
        <aside className="w-full text-center px-4">
          <h1 className="text-2xl mt-2">EN {title}</h1>
          <h3 className="text-xl text-text-secondary">{subtitle}</h3>
          <p className="text-text-secondary text-lg my-4">{children}</p>
          <Link
            className="flex justify-center text-center"
            href={link}
            target="_blank"
          >
            <span className="w-3/5 text-shadow text-xl text-text-secondary bg-secondary rounded-md border-2 border-text">
              Mas Info <TbExternalLink className="inline" />
            </span>
          </Link>
          <Link
            href={Links.whatsappLink}
            className="w-3/5 mx-auto flex justify-center bg-secondary outline ring-3 px-2 py-1 rounded-lg my-3 hover:scale-95 transition-all duration-300"
            target="blank"
          >
            <Logo image={whatsappLogo} size={28} />
            <span className="relative text-thin-shadow text-text-secondary text-base">
              WHATSAPP
            </span>
          </Link>
        </aside>
      </main>
    </section>
  );
};

export default Shop;

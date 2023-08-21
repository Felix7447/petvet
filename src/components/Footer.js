import React from "react";
import Link from "next/link";

import Logo from "./Logo";
import Links from "@/utils/links";
import whatsappLogo from "@/assets/images/whatsapp-logo.png";
import facebookLogo from "@/assets/images/facebook-logo.png";
import instagramLogo from "@/assets/images/instagram-logo.png";

const Footer = () => {
  return (
    <section className="bg-text pt-8">
      <section className="w-full grid grid-cols-12 px-20">
        <div className="md:col-span-6 col-span-full my-4 text-center">
          <Logo size={180} />
        </div>
        <div
          id="contacto"
          className="md:col-span-3 col-span-full my-4 uppercase"
        >
          <h1 className="text-2xl">Contacto</h1>
          <nav className="mt-4">
            <ul className="text-xl">
              <li>
                <Link
                  href={Links.whatsappLink}
                  className="flex rounded-lg my-3 hover:scale-95 transition-all duration-300"
                >
                  <Logo image={whatsappLogo} size={32} />
                  <button className="relative text-shadow text-text-secondary ">
                    WHATSAPP
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={Links.instaLink}
                  className="flex my-3 hover:scale-95 transition-all duration-300"
                >
                  <Logo image={instagramLogo} size={32} />
                  <button className="relative text-shadow text-text-secondary ">
                    INSTAGRAM
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={Links.facebookLink}
                  className="flex my-3 hover:scale-95 transition-all duration-300"
                >
                  <Logo image={facebookLogo} size={30} />
                  <button className="relative text-shadow text-text-secondary ">
                    FACEBOOK
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:col-span-3 col-span-full my-4 uppercase">
          <h1 className="text-2xl">Menú</h1>
          <nav className="mt-4">
            <ul className="text-xl">
              <li>
                <Link
                  href={"/#sobremi"}
                  className="flex  rounded-lg my-3 hover:scale-95 transition-all duration-300"
                >
                  <button className="relative text-shadow text-text-secondary ">
                    SOBRE MÍ
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="/#horarios"
                  className="flex my-3 hover:scale-95 transition-all duration-300"
                >
                  <button className="relative text-shadow text-text-secondary ">
                    HORARIOS
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="flex my-3 hover:scale-95 transition-all duration-300"
                >
                  <button className="relative text-shadow text-text-secondary ">
                    SERVICIOS
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="/#casuistica"
                  className="flex my-3 hover:scale-95 transition-all duration-300"
                >
                  <button className="relative text-shadow text-text-secondary ">
                    CASUÍSTICA
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <h1 className="w-full text-center text-sm uppercase bg-background text-text-secondary py-2">
        <Link href={"https://felix-web-dev.vercel.app/"} target="_blank">
          Web creada por Ing. Felix Reyna
        </Link>
      </h1>
    </section>
  );
};

export default Footer;

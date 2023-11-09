import React from "react";
import Logo from "./Logo";

import Link from "next/link";
import whatsappLogo from "@/assets/images/whatsapp-logo.png";
import Links from "@/utils/links";

const NavBar = () => {
  return (
    <header className="hidden w-full h-24 bg-primary lg:block">
      <nav className="relative px-8 flex justify-between items-center h-full border-b-2 border-text">
        <a href="/">
          <Logo size={80} />
          <h3 className='inline-block text-2xl'>Dra. Marianella Tovar</h3>
        </a>
        <ul className="h-full flex justify-center items-center gap-4 text-xl text-text uppercase">
          <li className="hover:text-text-secondary hover:scale-95 duration-300">
            <a href="/#sobremi">Sobre Mí</a>
          </li>
          <li className="hover:text-text-secondary hover:scale-95 duration-300">
            <a href="/#horarios">horarios</a>
          </li>
          <li className="hover:text-text-secondary hover:scale-95 duration-300">
            <a href="/#servicios">servicios</a>
          </li>
          <li className="hover:text-text-secondary hover:scale-95 duration-300">
            <a href="/#casuistica">casuística</a>
          </li>
          <li className="hover:text-text-secondary hover:scale-95 duration-300">
            <Link
              href={Links.whatsappLink}
              className="flex justify-center bg-secondary outline ring-3 px-2 py-1 rounded-lg my-3 hover:scale-95 transition-all duration-300"
              target="blank"
            >
              <Logo image={whatsappLogo} size={28} />
              <button className="relative text-thin-shadow text-text-secondary text-base">
                WHATSAPP
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

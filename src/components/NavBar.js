import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="hidden w-full h-24 bg-primary lg:block">
      <nav className="relative h-full border-b-2 border-text">
        <a href="/" className="absolute left-6 top-2">
          <Logo size={80} />
        </a>
        <ul className="h-full flex justify-center items-center gap-4 text-2xl text-text uppercase">
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
            <a href="/#contacto">contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

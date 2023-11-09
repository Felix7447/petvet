"use client";
import React from "react";
import Link from "next/link";
import BurgerMenu from "@/components/BurgerMenu";
import Logo from "./Logo";

const MobileNavbar = () => {
  return (
    <header className="w-full h-20 bg-primary flex justify-between items-center px-4 lg:hidden border-b-2 border-text">
      <Link href={"/"} className="relative text-2xl">
        <Logo />
        <h1 className="inline text-3xl shadow-none">PETVET</h1>
      </Link>
      <BurgerMenu />
    </header>
  );
};

export default MobileNavbar;

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";
import Logo from "./Logo";

const MobileMenu = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-[-30%] -top-3 w-72 h-screen z-10 origin-top-right rounded-md rounded-r-none bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col justify-center items-center">
        <Menu.Item>
          <Link href={"/"} className="absolute top-16 p-2 bg-text rounded-full">
            <Logo size={100} />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/#sobremi" className={`my-2`}>
            SOBRE MÍ
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/#horarios" className={`my-2`}>
            HORARIOS
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/#servicios" className={`my-2`}>
            SERVICIOS
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/#casuistica" className={`my-2`}>
            CASUÍSTICA
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/#contacto" className={`my-2`}>
            CONTACTO
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
};

export default MobileMenu;

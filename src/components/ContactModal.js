"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Logo from "./Logo";

import whatsappLogo from "@/assets/images/whatsapp-logo.png";
import facebookLogo from "@/assets/images/facebook-logo.png";
import instagramLogo from "@/assets/images/instagram-logo.png";
import Links from "@/utils/links";

export default function ContactModal() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl uppercase md:text-3xl font-medium"
                  >
                    ¿Quieres ponerte en contacto conmigo? <br />
                    <br />
                  </Dialog.Title>
                  <div className="mt-2 text-lg">
                    <ul className="text-center px-8">
                      <li>
                        <Link
                          href={Links.whatsappLink}
                          className="flex justify-center gap-2 bg-secondary outline ring-3 px-2 py-1 rounded-lg my-3 hover:scale-95 transition-all duration-300"
                          onClick={closeModal}
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
                          className="flex justify-center gap-2 bg-secondary outline ring-3 px-2 py-1 rounded-lg my-3 hover:scale-95 transition-all duration-300"
                          onClick={closeModal}
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
                          className="flex justify-center gap-2 bg-secondary outline ring-3 px-2 py-1 rounded-lg my-3 hover:scale-95 transition-all duration-300"
                          onClick={closeModal}
                        >
                          <Logo image={facebookLogo} size={30} />
                          <button className="relative text-shadow text-text-secondary ">
                            FACEBOOK
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-2.5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border-2 border-text bg-secondary px-4 py-2 text-xl text-text-secondary text-shadow  hover:ring-2 hover:ring-text hover:ring-offset-2 hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

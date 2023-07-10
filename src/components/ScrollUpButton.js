"use client";
import React, { useEffect, useRef } from "react";
import { TbArrowUpCircle } from "react-icons/tb";

const ScrollUpButton = () => {
  const scrollButton = useRef(null);

  const scrollUp = () => {
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  };

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY > 500) {
        scrollButton.current.classList.add("scale-100");
      } else {
        scrollButton.current.classList.remove("scale-100");
      }
    };

    window.addEventListener("scroll", showButton);

    return () => window.removeEventListener("scroll", showButton);
  }, []);

  return (
    <>
      <button
        ref={scrollButton}
        className="fixed z-20 flex justify-center items-center bottom-10 right-8 w-20 h-20 ring-2 ring-black rounded-full shadow-md bg-secondary scale-0 opacity-50 hover:opacity-100 transition duration-300"
        onClick={scrollUp}
      >
        <TbArrowUpCircle size={"100%"} color="black" />
      </button>
    </>
  );
};

export default ScrollUpButton;

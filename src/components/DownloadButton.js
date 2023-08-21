"use client";
import React from "react";
import Link from "next/link";
import { TbFileDownload, TbExternalLink } from "react-icons/tb";

const DownloadButton = () => {
  return (
    <>
      <aside className="text-thin-shadow w-16 h-16 justify-center text-center absolute top-1/4 left-[78%] z-0 animate-[bounce_1.5s_ease-in-out_infinite] lg:hidden">
        <Link
          href={"marianella_tovar.pdf"}
          target="_blank"
          className="flex flex-col items-center"
          download
        >
          <TbFileDownload size={34} color="#fc83a0" />
          <span className="text-sm text-text-secondary">
            Descarga mi Cv{" "}
            <TbExternalLink
              className="inline bg-red-200 rounded-full"
              color="#fc83a0"
              size={18}
            />
          </span>
        </Link>
      </aside>
      <button className="hidden text-shadow bg-secondary p-2 rounded-lg border-2 border-text justify-center text-center z-0 hover:bg-text hover:border-text-secondary duration-300 lg:block">
        <Link
          href={"marianella_tovar.pdf"}
          target="_blank"
          className="flex gap-2 items-center"
          download
        >
          <TbFileDownload size={34} color="#fc83a0" />
          <span className="text-sm text-text-secondary uppercase">
            Descarga mi Cv{" "}
            <TbExternalLink
              className="inline bg-red-200 rounded-full"
              color="#fc83a0"
              size={18}
            />
          </span>
        </Link>
      </button>
    </>
  );
};

export default DownloadButton;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TbDog, TbCat, TbFileDownload, TbExternalLink } from "react-icons/tb";
import profile from "@/assets/images/marianella-tovar.png";

const AboutMe = () => {
  return (
    <section
      id="sobremi"
      className="col-span-12 bg-primary h-auto p-5 ring-2 ring-text rounded-xl w-full grid grid-cols-12"
    >
      <h1 className="text-2xl lg:text-5xl col-span-12 text-center lg:my-4">
        SOBRE Mí
      </h1>
      <div className="relative col-span-12 lg:col-span-4 flex lg:flex-col justify-center items-center gap-8">
        <div className="relative w-32 h-32 lg:w-56 lg:h-56 rounded-full border-2 border-text text-center">
          <Image
            src={profile}
            fill={true}
            sizes="(max-width: 768px) 100vw, (min-width: 1200px) 80vw, 33vw"
            className="rounded-full scale-95"
            alt="Marianella Tovar"
          />
        </div>
        <aside className="w-16 h-16 justify-center text-center absolute top-1/4 left-[78%] z-0 animate-[bounce_1.5s_ease-in-out_infinite] lg:hidden">
          <Link href={"marianella_tovar.pdf"} target="_blank" className="flex flex-col items-center" download>
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
          <Link href={"marianella_tovar.pdf"} target="_blank" className="flex gap-2 items-center" download>
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
      </div>
      <p className="text-text-secondary uppercase col-span-12 flex items-center lg:col-start-5 lg:col-end-12 p-2 lg:text-2xl lg:my-8">
        Mi nombre es Marianella Tovar, soy Médico Veterinario egresada del
        Núcleo Juan José Mora de la UNEFM. INICIÉ MI CARRERA TENIENDO COMO META
        EL AYUDAR A LOS ANIMALES DESDE LA COMPASIÓN, EMPATÍA Y RESPONSABILIDAD.
        ACTUALMENTE VOY APRENDIENDO CADA DÍA MÁS Y ENRIQUECIENDOME DE
        CONOCIMIENTOS PARA OFRECER UN MEJOR SERIVICIO A MIS PACIENTES. SI TU
        MASCOTA NECESITA ALGUNO DE MIS SERVICIOS ¡NO DUDES EN CONTACTARME!
      </p>
      <div className="col-span-12 justify-self-center py-4">
        <h1 className="text-xl mb-2 text-center">Especies</h1>
        <div className="flex gap-3">
          <icon className="flex items-center gap-1 text-text-secondary">
            <TbDog
              size={34}
              color="#fc83a0"
              className="bg-secondary rounded-full p-1 align-middle"
            />
            CANINOS
          </icon>
          <icon className="flex items-center gap-1 text-text-secondary">
            <TbCat
              size={34}
              color="#fc83a0"
              className="bg-secondary rounded-full p-1 align-middle"
            />
            FELINOS
          </icon>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

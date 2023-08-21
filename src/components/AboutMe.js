import React from "react";
import Image from "next/image";
import { TbDog, TbCat } from "react-icons/tb";
import profile from "@/assets/images/marianella-tovar.png";
import DownloadButton from "./DownloadButton";

const AboutMe = () => {
  return (
    <section
      id="sobremi"
      className="col-span-12 max-w-6xl mx-auto mb-4 bg-primary h-auto p-5 ring-2 ring-text rounded-xl w-full grid grid-cols-12"
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
        <DownloadButton />
      </div>
      <p className="text-text-secondary text-thin-shadow uppercase col-span-12 flex items-center lg:col-start-5 lg:col-end-12 p-2 lg:text-2xl lg:my-8">
        Mi nombre es Marianella Tovar, soy Médico Veterinario egresada del
        Núcleo Juan José Mora de la UNEFM. INICIÉ MI CARRERA TENIENDO COMO META
        EL AYUDAR A LOS ANIMALES DESDE LA COMPASIÓN, EMPATÍA Y RESPONSABILIDAD.
        ACTUALMENTE VOY APRENDIENDO CADA DÍA MÁS Y ENRIQUECIENDOME DE
        CONOCIMIENTOS PARA OFRECER UN MEJOR SERIVICIO A MIS PACIENTES. SI TU
        MASCOTA NECESITA ALGUNO DE MIS SERVICIOS ¡NO DUDES EN CONTACTARME!
      </p>
      <div className="col-span-12 justify-self-center py-4">
        <h1 className="text-xl mb-2 text-center lg:text-3xl">Especies</h1>
        <div className="flex gap-3 text-thin-shadow lg:text-xl">
          <icon className="flex items-center gap-1 text-text-secondary lg:gap-2">
            <TbDog
              size={34}
              color="#fc83a0"
              className="bg-secondary rounded-full p-1 align-middle"
            />
            CANINOS
          </icon>
          <icon className="flex items-center gap-1 text-text-secondary lg:gap-2">
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

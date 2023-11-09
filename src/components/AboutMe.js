import React from "react";
import Image from "next/image";
import { TbDog, TbCat } from "react-icons/tb";
import profile from "@/assets/images/marianella-tovar.png";
import DownloadButton from "./DownloadButton";

const AboutMe = () => {
  return (
    <section
      id="sobremi"
      className="col-span-12 w-full h-auto mb-4 bg-about_background bg-no-repeat bg-cover flex justify-center items-center px-8 py-4"
    >
      <main className='max-w-6xl h-screen mx-auto w-full grid grid-cols-12 place-items-center'>
        <h2 className="text-3xl lg:text-5xl col-span-12 text-center self-end lg:my-4">
          SOBRE Mí
        </h2>
        <div className="relative col-span-12 lg:col-start-2 lg:col-span-4 flex lg:flex-col justify-center items-center gap-8">
          <div className="relative my-4 rounded-full border-2 border-text text-center">
            <Image
              src={profile}
              width='300'
              height='300'
              sizes="(max-width: 768px) 100vw, (min-width: 1200px) 80vw, 33vw"
              className="rounded-full scale-95"
              alt="Marianella Tovar"
            />
          </div>
          {/* <DownloadButton /> */}
        </div>
        <p className="text-text-secondary text-thin-shadow uppercase col-span-12 flex items-center lg:col-start-6 lg:col-span-6 p-2 lg:text-2xl lg:my-8">
          Mi nombre es Marianella Tovar, soy Médico Veterinario egresada del
          Núcleo Juan José Mora de la UNEFM. INICIÉ MI CARRERA TENIENDO COMO META
          EL AYUDAR A LOS ANIMALES DESDE LA COMPASIÓN, EMPATÍA Y RESPONSABILIDAD.
          ACTUALMENTE VOY APRENDIENDO CADA DÍA MÁS Y ENRIQUECIENDOME DE
          CONOCIMIENTOS PARA OFRECER UN MEJOR SERIVICIO A MIS PACIENTES. SI TU
          MASCOTA NECESITA ALGUNO DE MIS SERVICIOS ¡NO DUDES EN CONTACTARME!
        </p>
        <div className="col-span-12 justify-self-center self-start py-4 md:py-0">
          <h3 className="text-xl mb-2 text-center lg:text-3xl">Especies</h3>
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
      </main>
    </section>
  );
};

export default AboutMe;

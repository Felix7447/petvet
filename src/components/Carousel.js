"use client";
import React, { useRef } from "react";
import CarouselCard from "./CarouselCard";
import { TbCircleChevronLeft, TbCircleChevronRight } from "react-icons/tb";

import consultaImg from "@/assets/images/consulta.png";
import vacunacionImg from "@/assets/images/vacunacion.png";
import hematologiaImg from "@/assets/images/hematologia.png";
import ecografiaImg from "@/assets/images/ecografia.png";
import cirugiaImg from "@/assets/images/cirugia.png";

const Carousel = () => {
  const carousel = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const handlePrev = () => {
    const position = carousel.current.scrollLeft;
    carousel.current.scrollTo(position - 600, 0);
  };

  const handleNext = () => {
    const position = carousel.current.scrollLeft;
    carousel.current.scrollTo(position + 600, 0);
  };

  return (
    <div
      id="carouselContainer"
      className="w-full max-w-7xl mx-auto flex items-center"
    >
      <button
        ref={prevButton}
        onClick={handlePrev}
        className="relative h-12 m-2 p-0 text-shadow hidden lg:block"
      >
        <TbCircleChevronLeft
          size={48}
          className="bg-secondary ring-2 ring-black rounded-full opacity-70 hover:opacity-100 hover:scale-105 duration-500"
          color="#000000"
        />
      </button>
      <div
        ref={carousel}
        className="w-full py-6 text-center overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar scrollbar-hide"
      >
        <CarouselCard title="Consulta" image={consultaImg.src}>
          ¿QUÉ INCLUYE LA CONSULTA?:
          <br /> AUSCULTACIÓN, PALPACIÓN, REVISIÓN DE OÍDOS, TEMPERATURA Y
          LIMPIEZA DE OÍDOS.
        </CarouselCard>
        <CarouselCard
          title="Vacunación & Desparasitación"
          image={vacunacionImg.src}
        >
          ES IMPORTANTE MANTENER A TU PELUDO AL DÍA CON SUS VACUNAS Y
          DESPARATARLOS CADA 3 MESES
        </CarouselCard>
        <CarouselCard title="Hematología + Química" image={hematologiaImg.src}>
          HEMATOLOGÍA COMPLETA, PLAQUETAS + DIAGNÓSTICO DE HEMOPARÁSITOS. PERFIL
          RENAL Y HEPÁTICO.
        </CarouselCard>
        <CarouselCard title="ECOGRAFÍA" image={ecografiaImg.src}>
          VISUALIZACÍON DE TUMORES, OBSTRUCCIONES, UROLITOS, LÍQUIDO LIBRE,
          ANOMALÍAS EN LOS TEJIDOS, INFECCIONES, ENTRE OTROS.
        </CarouselCard>
        <CarouselCard title="CIRUGÍAS" image={cirugiaImg.src}>
          CIRUGÍAS COMO: ESTERILIZACIONES, EXCERESIS DE TUMORES, OTOHEMATOMAS,
          PIOMETRAS Y MÁS.
        </CarouselCard>
      </div>
      <button
        ref={nextButton}
        onClick={handleNext}
        className="h-12 m-2 text-shadow hidden lg:block"
      >
        <TbCircleChevronRight
          size={48}
          className="bg-secondary ring-2 ring-black rounded-full  opacity-70 hover:opacity-100 hover:scale-105 duration-500"
          color="#000000"
        />
      </button>
    </div>
  );
};

export default Carousel;

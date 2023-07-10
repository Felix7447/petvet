"use client";
import React from "react";
import Patient from "./Patient";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import nick from "@/assets/images/Nick.png";
import zeus from "@/assets/images/Zeus.png";
import rodolfo from "@/assets/images/Rodolfo.png";
import alex from "@/assets/images/alex.png";

const Slider = () => {
  return (
    <Swiper
      className="w-full lg:w-1/2 flex items-center mySwiper text-text cursor-grab"
      pagination={true}
      modules={[Pagination]}
      autoplay={true}
    >
      <SwiperSlide>
        <Patient
          img={nick.src}
          nombre="NICK"
          especie={"CANINO"}
          raza={"MESTIZO"}
          sexo={"MACHO"}
          edad={"4 MESES"}
          info="ES UN MACHO MESTIZO DE 4 MESES. LLEGÓ A CONSULTA CON SÍNTOMAS DIGESTIVOS MUY SIMILARES AL PARVOVIRUS O CORONAVIRUS CANINO."
          recuperacion="SE LE TOMÓ UNA VÍA Y SE LE SUMINISTRÓ TRATAMIENTO ENDOVENOSO POR SEIS DÍAS, LA MEJORA FUE PROGRESIVA, Y A LOS OCHO DÍAS YA ESTABA TOTALMENTE RECUPERADO."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Patient
          img={zeus.src}
          nombre="ZEUS"
          especie={"CANINO"}
          raza={"PITBULL"}
          sexo={"MACHO"}
          edad={"2 MESES"}
          info="ES UN PITBULL MACHO DE 2 MESES. LLEGÓ A SU PRIMERA CONSULTA PRINCIPALMENTE PORQUE PRESENTABA TRES LESIONES LOCALIZADAS EN LA PIEL, LAS LESIONES ERAN DERMATITIS POR HONGOS."
          recuperacion="UN MES DESPUÉS DES CUMPLIR SU TRATAMIENTO ESTABA TOTALMENTE RECUPERADO."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Patient
          img={rodolfo.src}
          nombre="RODOLFO"
          especie={"CANINO"}
          raza={"MESTIZO"}
          sexo={"MACHO"}
          edad={"5 AÑOS"}
          info="ES UN MACHO MESTIZO DE 5 AÑOS. PRESENTABA UNA TOS RECURRENTE Y DECAIMIENTO, LOS SÍNTOMAS COINCIDÍAN CON TOS DE PERRERAS."
          recuperacion="SE LE ENVIÓ TRATAMIENTO POR UNA SEMANA Y SE RECUPERÓ EXITOSAMENTE."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Patient
          img={alex.src}
          nombre="ALEX"
          especie={"CANINO"}
          raza={"POODLE"}
          sexo={"MACHO"}
          edad={"4 MESES"}
          info="ES UN POODLE MACHO DE 11 AÑOS. VINO A CONSULTA POR UNA FUERTE ENFERMEDAD PERIODONTAL."
          recuperacion="SE LE REALIZÓ UNA LIMPIEZA DENTAL Y SE FUE A CASA CON UNA NUEVA SONRISA."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

import Image from "next/image";
import React from "react";

const Patient = ({
  img,
  nombre = "Nombre de paciente",
  especie,
  sexo,
  raza,
  edad,
  info = "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet, consectetur",
  recuperacion = "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet",
}) => {
  return (
    <div className="bg-primary min-h-[30rem] lg:min-h-[28rem] ring-2 ring-text rounded-xl py-8 px-4 m-2 lg:h-[36rem] lg:py-12 lg:px-12">
      <div className="flex lg:justify-around lg:items-center">
        <div className="relative w-24 h-24 ring-2 ring-text rounded-full mr-4 lg:w-48 lg:h-48">
          <Image
            src={img}
            fill={true}
            alt="Photo"
            className="rounded-full scale-95"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h3 className="text-2xl text-center text-secondary lg:w-full lg:text-3xl lg:text-left">
            {nombre}
          </h3>
          <ul className="w-full text-center lg:text-left capitalize">
            {especie && <li>Especie: {especie}</li>}
            {sexo && <li>sexo: {sexo}</li>}
            {raza && <li>raza: {raza}</li>}
            {edad && <li>edad: {edad}</li>}
          </ul>
        </div>
      </div>
      <div className="my-4 lg:text-xl lg:my-8">
        <p className="text-text-secondary text-thin-shadow">{info}</p>
        <h3 className="text-2xl text-secondary mt-2">Recuperación:</h3>
        <p className="text-text-secondary text-thin-shadow">{recuperacion}</p>
      </div>
    </div>
  );
};

export default Patient;

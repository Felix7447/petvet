import React from "react";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <section
      id="servicios"
      className="col-span-12 w-full place-items-center my-14 p-8"
    >
      <h1 className="w-full text-4xl my-6 text-center uppercase">Servicios</h1>
      <Carousel />
    </section>
  );
};

export default Services;

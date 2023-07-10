import React from "react";
import Slider from "./Slider";

const Cases = () => {
  return (
    <section
      id="casuistica"
      className="col-span-12 w-full place-items-center my-14 flex flex-col"
    >
      <h1 className="w-full text-4xl my-6 text-center uppercase">Casuística</h1>
      <Slider />
    </section>
  );
};

export default Cases;

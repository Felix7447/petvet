import React from "react";
import Shop from "./Shop";
import Links from "@/utils/links";

import bioanimalLogo from "@/assets/images/Bioanimal-logo.png";
import shalom_logo from "@/assets/images/Shalom-logo.png";

const bioanimal = {
  lat: 10.212415828933269,
  lng: -68.00023219517236,
};

const shalom = {
  lat: 10.215748737841876,
  lng: -68.01480678212864,
};

const Schedule = () => {
  return (
    <section
      id="horarios"
      className="col-span-12 p-8 w-full place-items-center my-8 lg:my-16 "
    >
      <h2 className="text-2xl lg:text-5xl text-center my-8">
        HORARIOS DE ATENCIÓN
      </h2>
      <main className="relative w-full max-w-6xl flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:gap-8 lg:max-w-none">
        <Shop
          schedule="LUNES A MIÉRCOLES:"
          title="BIOANIMAL"
          subtitle="(POR CITAS)"
          link={Links.bioanimal}
          logo={bioanimalLogo.src}
        >
          LUNES A MIERCOLES DE 9:30AM A 4:00PM
        </Shop>
        <Shop
          schedule="JUEVES A SÁBADO:"
          title="SHALOM PETS"
          link={Links.shalompets}
          logo={shalom_logo}
        >
          JUEVES A SÁBADO DE 8:30AM A 5:00PM
        </Shop>
      </main>
    </section>
  );
};

export default Schedule;

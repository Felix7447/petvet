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
      className="col-span-12 w-full place-items-center my-8 lg:my-16 "
    >
      <h1 className="text-2xl lg:text-5xl text-center mt-2 lg:mb-8">
        HORARIOS DE ATENCIÓN
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-col">
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
          DE 8:30AM A 5:00PM (JUEVES Y VIERNES) <br />
          DE 8:30AM A 4:00PM (SÁBADOS)
        </Shop>
      </div>
    </section>
  );
};

export default Schedule;

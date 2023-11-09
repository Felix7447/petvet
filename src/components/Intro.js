import React from 'react'
import Image from 'next/image'
import marinella from '@/assets/images/marianella-intro.png'

const Intro = () => {
  return (
    <section className="w-full relative col-span-12 min-h-[90vh] bg-intro_background grid grid-cols-12 place-items-center bg-center bg-no-repeat bg-cover">
      <main className="col-span-12 order-2 w-3/4 mx-auto my-4 text-center self-start flex flex-col md:col-start-3 md:col-end-7 md:w-full md:justify-self-end md:order-1 md:self-center lg:text-left">
        <h1 className="text-primary text-2xl md:text-5xl lg:text-6xl">
          VETERINARIO MARIANELLA TOVAR
        </h1>
        <p className="text-xl my-0 md:text-3xl md:my-4 ps-3">Atiendo a tu mascota a domicilio</p>
      </main>
      <picture className="col-span-12 order-1 self-end md:col-start-7 md:col-end-12 md:order-2 md:justify-self-center md:self-center lg:justify-self-start lg:pl-4">
        <Image 
          src={marinella}
          alt="Marianella Tovar"
          width='350'
          height='350'
          sizes='(max-width: 1160px) 380px, 380px'
          className="bg-primary rounded-full w-[240px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
        />
      </picture>
    </section>
  )
}

export default Intro
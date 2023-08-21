import React from "react";

const CarouselCard = ({ children, title, image, price }) => {
  return (
    <div
      id="card"
      className="group peer lg:peer-hover:translate-x-8 w-[16rem] lg:w-[20rem] h-[24rem] opacity-90 text-center inline-block p-4 mx-2 lg:mx-2 ring-2 ring-text rounded-xl lg:hover:scale-110 lg:hover:opacity-100 duration-500 origin-left cursor-pointer whitespace-normal first:ml-1 last:mr-1 last:origin-right last:hover:scale-95"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative h-full">
        <div className="absolute bottom-8">
          {price ? (
            <h3 className="uppercase text-xl lg:text-2xl">
              {title}: <span className="text-secondary">{price}$</span>
            </h3>
          ) : (
            <h3 className="uppercase text-xl lg:text-2xl">{title}</h3>
          )}
          <p className="text-left text-md text-text-secondary lg:text-xl h-32 my-4 lg:opacity-0 lg:group-hover:opacity-100 duration-500">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

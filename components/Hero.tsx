import React from "react";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen custom-img bg-fixed bg-cover bg-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10"></div>

      <div className="text-white flex flex-col gap-4 items-start z-10 p-5">
        <h2 className="text-5xl">{heading}</h2>
        <p className="">{message}</p>
        <button className="border px-6 py-2">Book</button>
      </div>
    </div>
  );
};

export default Hero;

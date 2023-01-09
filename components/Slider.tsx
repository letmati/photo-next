import Image from "next/image";
import React from "react";
import { SliderData } from "../assets/data/sliderData";

const Slider = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl p-6">Gallery</h2>
      <div>
        {SliderData.map((slide, index) => {
          return (
            <Image
              key={index}
              src={slide.image}
              alt={"Photo"}
              width={100}
              height={100}
              style={{objectFit:"cover"}}
            />
          );
        })}
        {/* <Image src alt="Photo" width="100" height="100" /> */}
      </div>
    </div>
  );
};

export default Slider;

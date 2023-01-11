import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "../assets/data/sliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(SliderData.length);

  const handleSlider = (event: any) => {
    const { id } = event.target;
    if (id == "next") {
      setCurrent(current == length - 1 ? 0 : current + 1);
    }
    if (id == "prev") {
      setCurrent(current == 0 ? length - 1 : current - 1);
    }
  };
  return (
    <div className="flex flex-col items-center max-w-[1240px] mx-auto">
      <h2 className="text-3xl p-6">Gallery</h2>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            current == index && (
              <div>
                <button>
                  <FaArrowCircleLeft
                    onClick={handleSlider}
                    size={50}
                    id="prev"
                    className="absolute top-[50%] cursor-pointer text-white z-10"
                  />
                </button>
                <Image
                  key={index}
                  src={slide.image}
                  alt={"Photo"}
                  width={1440}
                  height={600}
                  style={{ objectFit: "cover" }}
                />
                <button>
                  <FaArrowCircleRight
                    onClick={handleSlider}
                    size={50}
                    id="next"
                    className="absolute top-[50%] right-0 cursor-pointer text-white z-10"
                  />
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

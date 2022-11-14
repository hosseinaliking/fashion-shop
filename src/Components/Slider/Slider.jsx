import React from "react";
import "./Slider.css";

//* Swiper slider *//
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";

//* Icons *//
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = ({ dataImage }) => {
  return (
    <div className="slider-container">
      <Splide
        hasTrack={false}
        options={{ type: "loop", pagination: true, gap: 10, direction: "rtl" }}
      >
        <SplideTrack>
          {dataImage.map((img, index) => {
            return (
              <SplideSlide key={index} >
                <img src={img} alt="Image slide" />
              </SplideSlide>
            );
          })}
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--next">
            <IoIosArrowForward size={"30"} className="arrow-next" />
          </button>
          <button className="splide__arrow splide__arrow--prev">
            <IoIosArrowBack size={"30"} className="arrow-prev" />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Slider;

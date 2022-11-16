import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styled, { css } from "styled-components";

//* Default theme *//
// import "@splidejs/react-splide/css";
import "./BrandSlider.css";

//* Images *//
import BrandOne from "../../asset/Image/Brand/Brand-1.jpg";
import BrandTwo from "../../asset/Image/Brand/Brand-2.jpg";
import BrandThree from "../../asset/Image/Brand/Brand-3.jpg";
import BrandFour from "../../asset/Image/Brand/Brand-4.jpg";
import BrandFive from "../../asset/Image/Brand/Brand-5.jpg";
import BrandSix from "../../asset/Image/Brand/Brand-6.jpg";
import BrandSeven from "../../asset/Image/Brand/Brand-7.jpg";
import BrandEight from "../../asset/Image/Brand/Brand-8.jpg";

//* Icons *//
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BestBrandSlider = () => {
  return (
    <Splide
      className="brand"
      hasTrack={false}
      options={{
        // autoplay: true,
        // interval: 2000,
        type: "loop",
        direction: "rtl",
        perPage: 8,
        perMove: 1,
      }}
    >
      <SplideTrack>
        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandOne} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandTwo} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandThree} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandFour} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandFive} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandSix} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandSeven} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>

        <SplideSlide className="brand">
          <Item>
            <ItemImage>
              <Image src={BrandEight} alt="slider image" />
            </ItemImage>
          </Item>
        </SplideSlide>
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--next brand ">
          <IoIosArrowForward size={"30"} className="arrow-next" />
        </button>
        <button className="splide__arrow splide__arrow--prev brand">
          <IoIosArrowBack size={"30"} className="arrow-prev" />
        </button>
      </div>

      <div className="splide__pagination brand"></div>
    </Splide>
  );
};

export default BestBrandSlider;

//* Styled Components *//

const Item = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  margin: 0 15px;

  &:hover .imageFront {
    opacity: 0;
  }
`;

const ItemImage = styled.div`
  display: flex;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

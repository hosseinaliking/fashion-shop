import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styled, { css } from "styled-components";

//* Default theme *//
// import "@splidejs/react-splide/css";
import "./MagSlider.css";

//* Images *//
import imageOne from '../../asset/Image/MagItem/MagItem-1.jpg'
import imageTwo from '../../asset/Image/MagItem/MagItem-2.jpg'
import imageThree from '../../asset/Image/MagItem/MagItem-3.jpg'
import imageFour from '../../asset/Image/MagItem/MagItem-4.jpg'



//* Icons *//
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const MagSlider = () => {
  return (
    <Splide
      className="mag"
      hasTrack={false}
      options={{
        type: "loop",
        direction: "rtl",
        perPage: 4,
        perMove: 1,
      }}
    >
      <SplideTrack>
        <SplideSlide className="mag">
          <Item>
            <ItemImage>
              <Image
                src={imageOne}
                alt="slider image"

              />
            </ItemImage>

            <ItemContent>
              <MagSlideTitle>
                با کاپشن چرم چی بپوشم
              </MagSlideTitle>
            </ItemContent>

          </Item>
        </SplideSlide>

        <SplideSlide className="mag">
          <Item>
            <ItemImage>
              <Image
                src={imageTwo}
                alt="slider image"
              />
            </ItemImage>

            <ItemContent>
              <MagSlideTitle>
                40 هودی شیک و جذاب
              </MagSlideTitle>
            </ItemContent>

          </Item>
        </SplideSlide>

        <SplideSlide className="mag">
          <Item>
            <ItemImage>
              <Image
                src={imageThree}
                alt="slider image"

              />
            </ItemImage>

            <ItemContent>
              <MagSlideTitle>
                جلسه اول خواستگاری چی بپوشم؟
              </MagSlideTitle>
            </ItemContent>

          </Item>
        </SplideSlide>

        <SplideSlide className="mag">
          <Item>
            <ItemImage>
              <Image
                src={imageFour}
                alt="slider image"

              />
            </ItemImage>

            <ItemContent>
              <MagSlideTitle>
                ست پاییز
              </MagSlideTitle>
            </ItemContent>

          </Item>
        </SplideSlide>
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--next mag">
          <IoIosArrowForward size={"30"} className="arrow-next" />
        </button>
        <button className="splide__arrow splide__arrow--prev mag ">
          <IoIosArrowBack size={"30"} className="arrow-prev" />
        </button>
      </div>

      <div className="splide__pagination mag"></div>
    </Splide>
  );
};

export default MagSlider;

//* Styled Components *//

const Item = styled.div`
  /* width: 250px; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Image = styled.img` 
  width: 275px;
  height: 183px;
  object-fit: cover;
`

const ItemImage = styled.div`
  display: flex;
  overflow: hidden;
`;

const ItemContent = styled.div` 
  padding-top: 30px;
`

const MagSlideTitle = styled.p` 

`

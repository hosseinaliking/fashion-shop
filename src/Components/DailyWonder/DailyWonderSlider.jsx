import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styled, { css } from "styled-components";

//* Default theme *//
// import "@splidejs/react-splide/css";
import "./DailySlider.css";

//* Images *//
import SlideImage from "../../asset/Image/Banner/WonderSlideImage-1.jpg";
import SlideBakcImage from "../../asset/Image/Banner/WonderSlideImage-1-2.jpg";

//* Icons *//
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const DailyWonderSlider = () => {
  return (
    <Splide
      className="wonder"
      hasTrack={false}
      options={{
        autoplay: true,
        interval: 2000,
        type: "loop",
        direction: "rtl",
        perPage: 4,
        perMove: 1,
      }}
    >
      <SplideTrack>
        <SplideSlide className="wonder">
          <Item>
            <ItemImage>
              <Image
                src={SlideImage}
                alt="slider image"
                className="imageFront"
              />
              <Image
                src={SlideBakcImage}
                alt="slider image"
                className="imageBack"
              />

              <OffValue>55%</OffValue>
            </ItemImage>

            <ItemContent>
              <Brand>VPoon</Brand>
              <Price offPrice={"type"}>1,550,000 تومان</Price>
            </ItemContent>

            <ItemContent>
              <Title>هودی مردانه جامه پوش آرا</Title>
              <Price>700,000 تومان</Price>
            </ItemContent>

            <ItemContent justify={"flex-start"}>
              <Size>m</Size>
              <Size>l</Size>
              <Size>xl</Size>
            </ItemContent>
          </Item>
        </SplideSlide>

        <SplideSlide className="wonder">
          <Item>
            <ItemImage>
              <Image
                src={SlideImage}
                alt="slider image"
                className="imageFront"
              />
              <Image
                src={SlideBakcImage}
                alt="slider image"
                className="imageBack"
              />

              <OffValue>55%</OffValue>
            </ItemImage>

            <ItemContent>
              <Brand>VPoon</Brand>
              <Price offPrice={"type"}>1,550,000 تومان</Price>
            </ItemContent>

            <ItemContent>
              <Title>هودی مردانه جامه پوش آرا</Title>
              <Price>700,000 تومان</Price>
            </ItemContent>

            <ItemContent justify={"flex-start"}>
              <Size>m</Size>
              <Size>l</Size>
              <Size>xl</Size>
            </ItemContent>
          </Item>
        </SplideSlide>

        <SplideSlide className="wonder">
          <Item>
            <ItemImage>
              <Image
                src={SlideImage}
                alt="slider image"
                className="imageFront"
              />
              <Image
                src={SlideBakcImage}
                alt="slider image"
                className="imageBack"
              />

              <OffValue>55%</OffValue>
            </ItemImage>

            <ItemContent>
              <Brand>VPoon</Brand>
              <Price offPrice={"type"}>1,550,000 تومان</Price>
            </ItemContent>

            <ItemContent>
              <Title>هودی مردانه جامه پوش آرا</Title>
              <Price>700,000 تومان</Price>
            </ItemContent>

            <ItemContent justify={"flex-start"}>
              <Size>m</Size>
              <Size>l</Size>
              <Size>xl</Size>
            </ItemContent>
          </Item>
        </SplideSlide>

        <SplideSlide className="wonder">
          <Item>
            <ItemImage>
              <Image
                src={SlideImage}
                alt="slider image"
                className="imageFront"
              />
              <Image
                src={SlideBakcImage}
                alt="slider image"
                className="imageBack"
              />

              <OffValue>55%</OffValue>
            </ItemImage>

            <ItemContent>
              <Brand>VPoon</Brand>
              <Price offPrice={"type"}>1,550,000 تومان</Price>
            </ItemContent>

            <ItemContent>
              <Title>هودی مردانه جامه پوش آرا</Title>
              <Price>700,000 تومان</Price>
            </ItemContent>

            <ItemContent justify={"flex-start"}>
              <Size>m</Size>
              <Size>l</Size>
              <Size>xl</Size>
            </ItemContent>
          </Item>
        </SplideSlide>

        <SplideSlide className="wonder">
          <Item>
            <ItemImage>
              <Image
                src={SlideImage}
                alt="slider image"
                className="imageFront"
              />
              <Image
                src={SlideBakcImage}
                alt="slider image"
                className="imageBack"
              />

              <OffValue>55%</OffValue>
            </ItemImage>

            <ItemContent>
              <Brand>VPoon</Brand>
              <Price offPrice={"type"}>1,550,000 تومان</Price>
            </ItemContent>

            <ItemContent>
              <Title>هودی مردانه جامه پوش آرا</Title>
              <Price>700,000 تومان</Price>
            </ItemContent>

            <ItemContent justify={"flex-start"}>
              <Size>m</Size>
              <Size>l</Size>
              <Size>xl</Size>
            </ItemContent>
          </Item>
        </SplideSlide>
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--next">
          <IoIosArrowForward size={"30"} className="arrow-next" />
        </button>
        <button className="splide__arrow splide__arrow--prev">
          <IoIosArrowBack size={"30"} className="arrow-prev" />
        </button>
      </div>

      <div className="splide__pagination wonder"></div>
    </Splide>
  );
};

export default DailyWonderSlider;

//* Styled Components *//

const Item = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover .imageFront {
    opacity: 0;
  }
`;

const ItemContent = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.justify &&
    css`
      justify-content: flex-start;
      gap: 10px;
    `}
`;

const ItemImage = styled.div`
  display: flex;
  overflow: hidden;
  height: 330px;

  position: relative;

  .imageFront {
    position: absolute;
    top: 0;
    left: 0;

    transition: opacity 0.15s ease-in-out;
  }
`;

const OffValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  color: #fff;
  font-weight: 600;
  background-color: orange;
  border-radius: 50%;

  position: absolute;
  top: 10px;
  left: 10px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const Brand = styled.p`
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: green;

  ${(props) =>
    props.offPrice &&
    css`
      font-size: 13px;
      font-weight: 400;
      color: #555;
      text-decoration: line-through;
    `}
`;

const Title = styled.p`
  flex: 0.8;

  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Size = styled.p`
  text-transform: capitalize;
  font-size: 12px;
  border: 0.5px solid #555;
  line-height: 1;
  padding: 5px 10px 2px;
  border-radius: 5px;
`;

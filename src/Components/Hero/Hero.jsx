import React from "react";
import styled from "styled-components";

//* Components *//
import Slider from "../Slider/Slider";

//* Styles *//
import { MainContainer } from "../../UI/container";

//* Images *//
import ImageOne from "../../asset/Image/Banner/Roulette.gif";
import ImageTwo from "../../asset/Image/Banner/BannerTwo.jpg";
import SlideOne from '../../asset/Image/Banner/slideOne-1.jpg'
import SlideTwo from '../../asset/Image/Banner/slideOne-2.jpg'
import SlideThree from '../../asset/Image/Banner/slideTwo-1.jpg'
import SlideFour from '../../asset/Image/Banner/slideTwo-2.jpg'

const Hero = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <TopHero>
          <Slider dataImage={[SlideOne, SlideTwo]} />

          <BannerOne>
            <Image src={ImageOne} />
          </BannerOne>
        </TopHero>

        <BottoHero>
          <BannerOne>
            <Image src={ImageTwo} />
          </BannerOne>
          <Slider dataImage={[SlideThree, SlideFour]} />
        </BottoHero>
      </HeroContainer>
    </MainContainer>
  );
};

export default Hero;

//* Styled Components *//

const HeroContainer = styled.div`
  margin: 30px 0;

  display: flex;
  flex-direction: column;
`;

const TopHero = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 368px;
  gap: 20px;
`;

const BottoHero = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 368px;
  column-gap: 20px;

  margin-top: 20px;
`;

const BannerOne = styled.div`
  flex-basis: 50%;
  max-height: 368px;

  display: flex;
`;

const Image = styled.img`
  border-radius: 20px;

  width: 100%;
  height: 100%;
`;

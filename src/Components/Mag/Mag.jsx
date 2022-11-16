import React from "react";
import styled from "styled-components";

//* Components *//
import MagSlider from "./MagSlider";

//* Styled *//
import { MainContainer } from "../../UI/container";

const Mag = () => {
  return (
    <MainContainer>
      <MagSection>
        <TitleContainer>
          <Title>جدیدترینِ بانی مگ</Title>
        </TitleContainer>

        <MagSlider />

        <MoreContainer>
          <MoreButton>مشاهده بیشتر</MoreButton>
        </MoreContainer>
      </MagSection>
    </MainContainer>
  );
};

export default Mag;

//* Styled Components *//

const MagSection = styled.section`
  margin-block: 4rem;
`;

const Title = styled.h2`
  font-size: 32px;
`;

const TitleContainer = styled.div`
  text-align: center;
`;


const MoreContainer = styled.div` 
  display: flex;
  justify-content: center;
  padding-block: 10px;
`

const MoreButton = styled.button` 
  border: none;
  background: none;

  font-size: 20px;
  color: #00BF6F;
  padding: 10px 60px;
  border-radius: 110px;
  border: 1px solid #b3ecd4;
  cursor: pointer;
`
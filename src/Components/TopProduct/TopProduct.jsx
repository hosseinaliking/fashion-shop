import React from "react";
import styled from "styled-components";

//* Components *//
import TopProductSlider from "./TopProductSlider";

//* Styles *//
import { MainContainer } from "../../UI/container";

const TopProduct = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>محصولات پر فروش</Title>
      </TitleContainer>

      {/* Slider */}
      <TopProductSlider />

      {/* Button */}
      <MoreContainer>
        <MoreButton>مشاهده بیشتر</MoreButton>
      </MoreContainer>
    </MainContainer>
  );
};

export default TopProduct;

//* Styled Components *//

const TitleContainer = styled.div`
  text-align: center;
  padding-block: 1rem;
  margin-top: 32px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
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
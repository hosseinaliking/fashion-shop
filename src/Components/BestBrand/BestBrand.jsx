import React from "react";
import styled from "styled-components";

//* Components *//
import BestBrandSlider from "./BestBrandSlider";

//* Style *//
import { MainContainer } from "../../UI/container";

const BestBrand = () => {
  return (
    <BrandSection>
      <MainContainer>
        <TitleContainer>
          <Title>برترین برندها در بانی مد</Title>
        </TitleContainer>

        <BestBrandSlider />

        <MoreContainer>
          <MoreButton>مشاهده بیشتر</MoreButton>
        </MoreContainer>
      </MainContainer>
    </BrandSection>
  );
};

export default BestBrand;

//* Styled Components *//

const BrandSection = styled.section`
  margin-top: 80px;
  background-color: #f9f9f9;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  padding: 2rem 0 1rem;
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
import React from "react";
import styled from "styled-components";

//* Components *//
import FeatureItem from "./FeatureItem";

//* Styled *//
import { MainContainer } from "../../UI/container";

//* Data *// 
import { featureItems } from "../../constant/featureItems";

const Feature = () => {
  return (
    <MainContainer>
      <FeatureList>
        {featureItems.map((item, index) => {
          return <FeatureItem key={index} data={item} />
        })}
      </FeatureList>
    </MainContainer>
  );
};

export default Feature;

//* Styled Componentws *//

const FeatureList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

  list-style: none;
  margin-top: 48px;
  padding: 0;
`;

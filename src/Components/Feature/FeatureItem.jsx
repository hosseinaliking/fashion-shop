import React from "react";
import styled from "styled-components";

//* Components *//
import FeatureCircle from "./FeatureCircle";

//* Images *//
import ImageOne from "../../asset/Image/Feature/feature-1.jpg";

const FeatureItem = ({ data }) => {
  console.log(data)
  return (
    <Item>
      <ItemImage>
        <Image src={data?.image} alt="feature image" />
      </ItemImage>
      <ItemTitle>{ data?.title }</ItemTitle>
      <ItemText>
        {data?.description}
      </ItemText>

      <CircleContainer>
        <FeatureCircle />
      </CircleContainer>
    </Item>
  );
};

export default FeatureItem;

//* Styled Components *//

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  position: relative;
  user-select: none;

  &:hover .innerCircle {
    opacity: 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 100px;
  height: 96px;
`;

const ItemImage = styled.div``;

const ItemTitle = styled.h3``;

const ItemText = styled.p`
  text-align: center;
  font-size: 13px;
  width: 85%;
  margin-inline: auto;
`;

const CircleContainer = styled.div` 
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: -1000;
`

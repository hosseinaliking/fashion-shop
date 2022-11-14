import React from "react";
import styled from "styled-components";

//* Styles *//
import { MainContainer } from "../../UI/container";

//* Images and Videos *//
import ImageOne from "../../asset/Image/Category/Woman-Under.jpg";
import GifOne from "../../asset/Image/Category/gif.gif";

const Category = () => {
  return (
    <MainContainer>
      <CategoryContainer>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <CategoryItem key={index}>
              <img src={ImageOne} alt="Image for category" className="image" />
              <img src={GifOne} alt="Gif for category" className="gif" />
            </CategoryItem>
          );
        })}
      </CategoryContainer>
    </MainContainer>
  );
};

export default Category;

//* Styled Components *//

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  grid-gap: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 5px;
    border-radius: 11px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 11px;
    background-color: #1fab89;
  }
`;

const CategoryItem = styled.div`
  height: 155px;
  border-radius: 11px;
  overflow: hidden;
  margin-block: 1rem;
  position: relative;

  :hover .gif {
    opacity: 1;
  }

  .gif {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

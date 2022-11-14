import React from "react";
import styled from "styled-components";

//* Components *//
import Counter from "./Counter";
import DailyWonderSlider from "./DailyWonderSlider";

//* Styls *//
import { MainContainer } from "../../UI/container";

//* Images *//
import Logo from "../../asset/Image/Logo/WonderLogo.png";

const DailyWonder = () => {
  return (
    <MainContainer>
      {/* Top */}
      <CounterWonder>
        <WonderLogo src={Logo} alt="wonder counter logo" />
        <Counter />
      </CounterWonder>

      {/* Bottom */}
      <DailyWonderSlider />

      {/* Button */}
      <MoreContainer>
        <MoreButton>مشاهده بیشتر</MoreButton>
      </MoreContainer>
    </MainContainer>
  );
};

export default DailyWonder;

//* Styled Component *//

const CounterWonder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-block: 20px;
`;

const WonderLogo = styled.img`
  width: 310px;
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
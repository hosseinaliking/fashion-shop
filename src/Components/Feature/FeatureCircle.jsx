import React from "react";
import styled from "styled-components";

const FeatureCircle = () => {
  return (
    <OuterCircle >
      <InnerCirlce className="innerCircle" />
      <TransitionCircle />
    </OuterCircle>
  );
};

export default FeatureCircle;

//* Styled Components *//

const OuterCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 1000px;

  background: linear-gradient(
    184deg,
    rgba(255, 255, 255, 1) 36%,
    rgba(220, 220, 220, 1) 96%
  );

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const InnerCirlce = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(
    184deg,
    rgba(255, 255, 255, 1) 36%,
    rgba(245, 245, 245, 1) 96%
  );
  border-radius: 1000px;

  transition: opacity .2s ease;

  position: absolute;
  z-index: 0;
`;

const TransitionCircle = styled.div`
  width: 180px;
  height: 180px;
  background: white;
  border-radius: 1000px;

  position: absolute;
  z-index: 1;
`;

import React from "react";
import styled from "styled-components";
import Countdown, { zeroPad } from "react-countdown";

const Counter = () => {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <CounterTimer>
          <CounterTime>
            <span>{zeroPad(seconds)}</span>
          </CounterTime>
          <CounterTime>
            <span>{zeroPad(minutes)}</span>
          </CounterTime>
          <CounterTime>
            <span>{zeroPad(hours)}</span>
          </CounterTime>
          <CounterTime>
            <span>{zeroPad(days)}</span>
          </CounterTime>
        </CounterTimer>
      );
    }
  };
  return (
    <CounterContainer>
      <CounterText>زمان باقی مانده تا پایان</CounterText>
      <Countdown date={Date.now() + 88000000} renderer={renderer} />
    </CounterContainer>
  );
};

export default Counter;

//* Styled Component *//

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const CounterTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CounterText = styled.p` 
  font-weight: 600;
  font-size: 1.2rem;
  color: #4CBD87;
`

const CounterTime = styled.div`
  background-color: #f69807;
  color: #fff;

  padding: 0.5rem 0.75rem;
  border-radius: 5px;

  span {
    display: inline-block;
    margin-top: 3px;
    font-size: 1.2rem;
  }
`;

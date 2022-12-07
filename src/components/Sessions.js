import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Sessions() {
  //   useEffect(() => {
  //     const promise = axios.get(
  //       `https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`
  //     );
  //     console.log(promise);
  //   }, []);

  return (
    <>
      <StyledSessionDate>Quinta-feira - 24/06/2021</StyledSessionDate>
      <StyledSessionButtonContainer>
        <StyledSessionButton onClick={""}>15:00</StyledSessionButton>
        <StyledSessionButton onClick={""}>15:00</StyledSessionButton>
      </StyledSessionButtonContainer>
    </>
  );
}
const StyledSessionButtonContainer = styled.div`
  width: 100%;
  margin-left: 24px;
  display: flex;
`;
const StyledSessionDate = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;
  color: #293845;
  margin-bottom: 23px;
  margin-left: 24px;
`;
const StyledSessionButton = styled.button`
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  border-style: none;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

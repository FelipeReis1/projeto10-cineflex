import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import Sessions from "./Sessions";
import TopTitle from "./TopTitle";
import MovieSelection from "./MovieSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeatSelection from "./SeatSelection";
import Success from "./Success";

export default function CineflexMain() {
  return (
    <BrowserRouter>
      <StyledContainer>
        <GlobalStyle />
        <TopTitle />
        <Routes>
          <Route path="/" element={<MovieSelection />} />
          <Route path="/sessoes/:idMovie" element={<Sessions />} />
          <Route path="/assentos/:idSeats" element={<SeatSelection />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

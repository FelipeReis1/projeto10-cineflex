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
          <Route path="/sessions/:idMovie" element={<Sessions />} />
          <Route path="/seats/:idSeats" element={<SeatSelection />} />
          <Route path="/success" element={<Success />} />
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

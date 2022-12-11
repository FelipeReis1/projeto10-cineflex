import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";

import Sessions from "./Sessions";
import TopTitle from "./TopTitle";
import MovieSelection from "./MovieSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CineflexMain() {
  return (
    <BrowserRouter>
      <StyledContainer>
        <GlobalStyle />
        <TopTitle />
        <Routes>
          <Route path="/" element={<MovieSelection />} />
          <Route path="/sessions/:idMovie" element={<Sessions />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}

const StyledContainer = styled.div`
  width: 375px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

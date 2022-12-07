import styled from "styled-components";
import Movie from "./Movie";

export default function Selection() {
  return (
    <>
      <StyledSelectionContainer>
        <p>Selecione o filme</p>
      </StyledSelectionContainer>
      <StyledMovieSelection>
        <Movie />
      </StyledMovieSelection>
    </>
  );
}

const StyledSelectionContainer = styled.div`
  width: 100%;
  height: 110px;
  margin-top: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

const StyledMovieSelection = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

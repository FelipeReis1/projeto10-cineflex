import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import Selection from "./Selection";
import Sessions from "./Sessions";
import TopTitle from "./TopTitle";

export default function CineflexMain() {
  return (
    <StyledContainer>
      <GlobalStyle />
      <TopTitle />
      <Selection />
      <Sessions />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 375px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

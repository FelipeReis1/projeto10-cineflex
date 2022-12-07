import styled from "styled-components";

export default function TopTitle() {
  return (
    <StyledTopTitle>
      <p onClick={""}>CINEFLEX</p>
    </StyledTopTitle>
  );
}

const StyledTopTitle = styled.div`
  width: 375px;
  height: 67px;
  background-color: #c3cfd9;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
    &:hover {
      cursor: pointer;
    }
  }
`;

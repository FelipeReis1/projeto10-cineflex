import styled from "styled-components";

export default function FooterSeats({ posterURL, children }) {
  return (
    <StyledFooter>
      <StyledImg>
        <img src={posterURL} alt={""}></img>
      </StyledImg>
      <div>{children}</div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  border-style: none;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  bottom: 0px;
  img {
    width: 48px;
    height: 72px;
  }
  div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const StyledImg = styled.div`
  width: 64px;
  height: 89px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-top: 14px;
  margin-left: 10px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

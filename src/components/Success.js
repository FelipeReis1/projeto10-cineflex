import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  return (
    <StyledSuccess>
      <StyledSelectionContainer>
        <p>
          Pedido feito
          <br /> com sucesso!
        </p>
      </StyledSelectionContainer>
      <StyledLowerContainers>
        <h1>Filme e sessao</h1>
        <p>{location.state.title} </p>
        <p>
          {location.state.day.weekday} {location.state.time}
        </p>
      </StyledLowerContainers>
      <StyledLowerContainers>
        <h1>Ingressos</h1>
        {location.state.seatsNumber.map((s, index) => (
          <p key={index}>Assento: {s} </p>
        ))}
      </StyledLowerContainers>
      <StyledLowerContainers>
        <h1>Comprador</h1>
        <p>Nome: {location.state.userName} </p>
        <p>CPF: {location.state.cpf}</p>
      </StyledLowerContainers>
      <StyledBottomButton>Voltar para home</StyledBottomButton>
    </StyledSuccess>
  );
}

const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSelectionContainer = styled.div`
  width: 100%;
  height: 110px;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247a6b;
  }
`;
const StyledLowerContainers = styled.div`
  margin-bottom: 20px;
  margin-left: 23px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 10px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
const StyledBottomButton = styled.button`
  width: 225px;
  height: 42px;
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
  letter-spacing: 0.04em;
  color: #ffffff;
  border-style: none;
  margin-top: 57px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

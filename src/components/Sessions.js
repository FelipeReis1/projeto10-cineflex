import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function Sessions() {
  const { idMovie } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`
    );
    promise.then((res) => {
      setItems(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <>
      <StyledSelectionContainer>
        <p>Selecione o Horário</p>
      </StyledSelectionContainer>
      {items.days &&
        items.days.map((i) => (
          <div key={i.id}>
            <StyledSessionDate>
              {i.weekday} - {i.date}
            </StyledSessionDate>
            <StyledSessionButtonContainer>
              {i.showtimes.map((s) => (
                <StyledSessionButton key={s.id}>{s.name}</StyledSessionButton>
              ))}
            </StyledSessionButtonContainer>
          </div>
        ))}
      <Footer posterURL={items.posterURL}>
        <div>{`${items.title}`}</div>
      </Footer>
    </>
  );
}

const StyledSessionButtonContainer = styled.div`
  width: 100%;
  margin-left: 24px;
  display: flex;
  margin-bottom: 23px;
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

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  if (items.length === 0) {
    return <p style={{ marginTop: 100 }}>Loading...</p>;
  }
  return (
    <StyledSessionsDiv>
      <StyledSelectionContainer>
        <p>Selecione o Horário</p>
      </StyledSelectionContainer>
      {items.days &&
        items.days.map((i) => (
          <div key={i.id}>
            <StyledSessionDate data-test="movie-day">
              {i.weekday} - {i.date}
            </StyledSessionDate>
            <StyledSessionButtonContainer>
              {i.showtimes.map((s) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={s.id}
                  to={`/assentos/${s.id}`}
                >
                  <StyledSessionButton data-test="showtime" key={s.id}>
                    {s.name}
                  </StyledSessionButton>
                </Link>
              ))}
            </StyledSessionButtonContainer>
          </div>
        ))}
      <Footer posterURL={items.posterURL}>
        <div>{`${items.title}`}</div>
      </Footer>
    </StyledSessionsDiv>
  );
}
const StyledSessionsDiv = styled.div`
  margin-bottom: 140px;
`;

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

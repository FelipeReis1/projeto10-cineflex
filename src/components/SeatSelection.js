import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FooterSeats from "./FooterSeats";
import Seat from "./Seat";
export default function SeatSelection() {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState([]);
  const [day, setDay] = useState([]);
  const [time, setTime] = useState("");
  const [cpf, setCpf] = useState("");
  const [userName, setUserName] = useState("");
  const [seatId, setSeatId] = useState([]);
  const [seatNumber, setSeatNumber] = useState([]);
  const navigate = useNavigate();

  function reserveSeat(event) {
    event.preventDefault();
    if (seatNumber.length > 0) {
      const request = {
        ids: seatId,
        name: userName,
        cpf: cpf,
      };

      const promise = axios.post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        request
      );
      promise.then(() => {
        navigate("/sucesso", {
          state: {
            title: movie.title,
            time,
            cpf,
            userName,
            day,
            seatsNumber: seatNumber,
          },
        });
      });
    } else {
      alert("Você precisa selecionar no mínimo um assento antes de reservar");
    }
  }

  const { idSeats } = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSeats}/seats`
    );
    promise.then((res) => {
      setSeats(res.data.seats);
      setMovie(res.data.movie);
      setDay(res.data.day);
      setTime(res.data.name);
    });
  }, []);
  if (seats.length === 0) {
    return <p style={{ marginTop: 100 }}>Loading...</p>;
  }
  return (
    <StyledSeatSelection>
      <StyledSelectionContainer>
        <p>Selecione o(s) assento(s)</p>
      </StyledSelectionContainer>
      <StyledSeats>
        {seats.map((s) => (
          <Seat
            key={s.id}
            id={s.id}
            name={s.name}
            isAvailable={s.isAvailable}
            seatId={seatId}
            setSeatId={setSeatId}
            seatNumber={seatNumber}
            setSeatNumber={setSeatNumber}
          />
        ))}
      </StyledSeats>
      <StyledAvailability>
        <button></button>
        <button></button>
        <button></button>
      </StyledAvailability>
      <StyledAvailabilityText>
        <p>Selecionado</p>
        <p>Disponível</p>
        <p>Indisponível</p>
      </StyledAvailabilityText>
      <StyledCustomerData>
        <form onSubmit={reserveSeat}>
          <p>Nome do Comprador:</p>
          <input
            required
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Digite seu nome..."
          ></input>
          <p>CPF do comprador:</p>
          <input
            pattern="\d{11,11}"
            title="Digite um CPF no formato: xxxxxxxxxxx"
            required
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF..."
          ></input>
          <StyledBottomButton type="submit">
            Reservar assento(s)
          </StyledBottomButton>
        </form>
      </StyledCustomerData>

      <FooterSeats posterURL={movie.posterURL}>
        <div>{`${movie.title}`}</div>
        <div>{`${day.weekday} - ${day.date}`}</div>
      </FooterSeats>
    </StyledSeatSelection>
  );
}

const StyledSeatSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
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

const StyledSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 24px;
`;
const StyledAvailability = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 5px;
  button {
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    border-radius: 17px;
  }
  button:nth-child(1) {
    background-color: #1aae9e;
    border: 1px solid #0e7d71;
  }
  button:nth-child(2) {
    background-color: #c3cfd9;
    border: 1px solid #7b8b99;
  }
  button:nth-child(3) {
    background-color: #fbe192;
    border: 1px solid #f7c52b;
  }
`;
const StyledAvailabilityText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 50px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;
const StyledCustomerData = styled.div`
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
  }
  input {
    box-sizing: border-box;
    width: 327px;
    height: 51px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    margin-bottom: 7px;
  }
  input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
    padding: 10px;
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
  &:hover {
    cursor: pointer;
  }
`;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieSelection() {
  const [movieImg, setMovieImg] = useState(undefined);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promise.then((res) => {
      setMovieImg(res.data);
    });
    promise.catch((err) => console.log(err.response.data));
  }, []);
  if (movieImg === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StyledSelectionContainer>
        <p>Selecione o filme</p>
      </StyledSelectionContainer>
      <StyledMovieSelection>
        {movieImg.map((m) => (
          <StyledMovie key={m.id}>
            <Link to={`/sessions/${m.id}`}>
              <img src={m.posterURL} alt={m.overview} />
            </Link>
          </StyledMovie>
        ))}
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

const StyledMovie = styled.li`
  width: 145px;
  height: 209px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 129px;
    height: 193px;
    &:hover {
      cursor: pointer;
    }
  }
`;

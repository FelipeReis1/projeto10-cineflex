import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Movie() {
  const [movieImg, setMovieImg] = useState(null);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promise.then((resp) => {
      setMovieImg(resp.data);
    });

    promise.catch((err) => {
      err.alert(
        "Erro ao carregar imagens, atualize a página para tentar novamente"
      );
    });
  }, []);
  if (movieImg === null) {
    return <img src="" alt=""></img>;
  }

  return (
    <>
      {movieImg.map((m) => (
        <StyledMovie key={m.id}>
          <img src={m.posterURL} alt={m.title} />
        </StyledMovie>
      ))}
    </>
  );
}

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

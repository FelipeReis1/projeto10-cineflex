import { useState } from "react";
import styled from "styled-components";

export default function Seat({
  id,
  name,
  isAvailable,
  seatId,
  setSeatId,
  seatNumber,
  setSeatNumber,
}) {
  function availability() {
    if (isAvailable && !selected) {
      setSelected(true);
      setSeatId([...seatId, id]);
      setSeatNumber([...seatNumber, name]);
    } else if (isAvailable && selected) {
      setSelected(false);
      const aux = [...seatId];
      const auxSeatNumber = [...seatNumber];
      setSeatId(aux.filter((a) => a !== id));
      setSeatNumber(auxSeatNumber.filter((a) => a !== name));
    } else {
      alert("Esse assento não está disponível");
    }
  }

  const [selected, setSelected] = useState(false);
  return (
    <StyledButton
      data-test="seat"
      onClick={availability}
      selected={selected}
      isAvailable={isAvailable}
    >
      {name}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 26px;
  height: 26px;
  background-color: ${(props) =>
    (props.isAvailable && !props.selected && "#C3CFD9") ||
    (props.isAvailable && props.selected && "#1AAE9E") ||
    (!props.isAvailable && "#FBE192")};
  border: 1px solid #808f9d;
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #000000;
  margin-right: 7px;
  margin-bottom: 18px;
  &:hover {
    cursor: pointer;
  }
`;

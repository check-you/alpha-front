import styled from "styled-components";

const ButtonStyles = {
  messageNo: {
    width: "90vw",
    height: "5vh",
    borderRadius: "20px",
    background: "white",
    color: "black",
    border: "2px solid #409DFF",
    gap: "16px",
  },
};

export const StyledButton = styled.button`
  ${(props) => ButtonStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }

  ,
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

//

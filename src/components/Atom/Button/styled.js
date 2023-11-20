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
  submitBtn: {
    width: "90vw",
    borderRadius: "10px",
    background: "#BB84E8",
    color: "white",
    gap: "16px",
    padding: "2vh",
  },
  closeBtn: {
    width: "55vw",
    borderRadius: "10px",
    background: "#BB84E8",
    color: "white",
    gap: "16px",
    padding: "1.3vh",
  },
  closeBtnAlert: {
    width: "25vw",
    borderRadius: "10px",
    background: "#BB84E8",
    color: "white",
    gap: "16px",
    padding: "1.3vh",
  },
  loginBtnAlert: {
    width: "25vw",
    borderRadius: "10px",
    background: "#BB84E8",
    color: "white",
    gap: "16px",
    padding: "1.3vh",
  },
};

export const StyledButton = styled.button`
  ${(props) => ButtonStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }

  ,
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    background: #7e4ce180;
  }
`;

//

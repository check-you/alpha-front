import styled from "styled-components";

const textStyles = {
  text1: {
    fontWeight: "bold",
    fontSize: "1vw",
    color: "#333333",
  },
  text2: {
    fontWeight: "bold",
    fontSize: "1.5vw",
    color: "#333333",
  },
  listCategoryText: {
    fontWeight: "bold",
    fontSize: "1.5vw",
    color: "#333333",
    marginBottom: "0.8vw",
  },
  text3: {
    fontWeight: "bold",
    fontSize: "1.7px",
    color: "#333333",
  },
  text4: {
    fontWeight: "normal",
    fontSize: "1.2vw",
    color: "#333333",
  },
  text5: {
    fontWeight: "bold",
    fontSize: "2em",
    color: "#333333",
    margin: "5px",
  },
  transactioninfoTitle: {
    fontWeight: "bold",
    fontSize: "6.5vw",
    color: "white",
  },
  transactioninfoContents: {
    fontWeight: "normal",
    fontSize: "2.5vw",
    color: "white",
    lineHeight: "5vw",
  },
  transactioninfoTax1: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "black",
    lineHeight: "5vw",
  },
};
export const StyledText = styled.p`
  word-break: keep-all;
  ${(props) => textStyles[props.theme]}
`;

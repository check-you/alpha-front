import { right } from "@popperjs/core";
import styled from "styled-components";

const textStyles = {
  text1: {
    fontWeight: "bold",
    fontSize: "1vw",
    color: "#333333",
  },
  textttt: {
    fontWeight: "light",
    fontSize: "2vw",
    color: "#6f1c7e",
    padding: "0px 10px",
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
  transactioninfo1: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "#471AA0",
  },
  transactioninfo2: {
    fontWeight: "bold",
    fontSize: "3vw",
    color: "#471AA0",
  },
  transactionTableTitle: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "white",
  },
  transactionTableContent: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "black",
  },
  transactionUp: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "#FF0000",
  },
  transactionDown: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "#0047FF",
  },
  accountCorp: {
    fontWeight: "normal",
    fontSize: "3.5vw",
    color: "black",
    lineHeight: "5vw",
  },
  accountAddBtn: {
    fontWeight: "normal",
    fontSize: "3.5vw",
    color: "white",
    lineHeight: "5vw",
  },
  accountNum: {
    fontWeight: "normal",
    fontSize: "3vw",
    color: "black",
    lineHeight: "5vw",
  },
  dashBoard: {
    fontWeight: "normal",
    fontSize: "2.5vw",
    color: "black",
    lineHeight: "5vw",
  },
  dashBoardName: {
    fontWeight: "normal",
    fontSize: "6vw",
    color: "black",
    lineHeight: "5vw",
  },
  dashBoardInfo: {
    fontWeight: "normal",
    fontSize: "4vw",
    color: "black",
    lineHeight: "5vw",
  },
  signupTitle: {
    fontWeight: "bold",
    fontSize: "8vw",
    color: "#471AA0",
    lineHeight: "5vw",
  },
  signupContents1: {
    fontWeight: "bold",
    fontSize: "5vw",
    color: "black",
    lineHeight: "10vw",
  },
  signupContents2: {
    fontWeight: "bold",
    fontSize: "3vw",
    color: "black",
    lineHeight: "5vw",
  },
  title: {
    fontWeight: "bold",
    fontSize: "4.5vw",
    color: "black",
    lineHeight: "5vw",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: "6vw",
    color: "#471AA0",
    lineHeight: "5vw",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: "4vw",
    color: "white",
  },
  goToSignup: {
    fontWeight: "bold",
    fontSize: "4vw",
    color: "black",
  },
  dates: {
    fontWeight: "light",
    fontSize: "2vw",
    color: "black",
  },
  emailerror: {
    fontWeight: "light",
    fontSize: "3vw",
    color: "black",
    marginTop: "-1vh",
    marginBottom: "2vh",
  },
  signupSubTitle: {
    fontWeight: "bold",
    fontSize: "4.5vw",
    color: "#471AA0",
  },
};
export const StyledText = styled.p`
  word-break: keep-all;
  ${(props) => textStyles[props.theme]}
`;

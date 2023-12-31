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
};
export const Container = styled.div`
  width: 90 vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2vh;
`;
export const InsideContianer1 = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const InsideContianer2 = styled.div`
  width: 40vw;
  padding-left: 10vw;
  display: flex;
  flex-direction: row;
`;
export const StyledText = styled.p`
  word-break: keep-all;
  ${(props) => textStyles[props.theme]}
`;

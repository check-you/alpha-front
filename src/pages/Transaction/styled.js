import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
export const Image = styled.img``;
export const NumImage = styled.img``;
export const BackImage = styled.img`
  width: 8vw;
  margin-right: 3vw;
`;
export const BackgroundImage = styled.img`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`;
export const SubTitleWraper = styled.div``;
export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 3vh;
`;
export const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5vh;
  justify-content: right;
`;
export const DateWrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5vh;
  margin-right: 1vh;
  padding: 0.5vh 0.5vw;
`;
export const DateWrapper = styled.div`
  background: #d6e1ff;
  width: 30vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 0.5vh;
  padding: 0.5vh 0.5vw;
  border-radius: 5px;
`;

export const CheckPerson = styled.div`
  background: #ded7fc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2vh 0 0 0;
  border-radius: 20px;
  margin-bottom: 5vh;
`;
export const TransactionLists = styled.div`
  overflow-x: auto; /* 가로 스크롤 항상 활성화 */
  overflow-y: hidden; /* 세로 스크롤은 내용이 넘칠 때만 활성화 */
  white-space: nowrap;

  /* 스크롤바 디자인 */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }
`;
export const NumWrapper = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperOut = styled.div`
  position: fixed;
  top: 22vh;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
`;
export const WrapperInput = styled.div``;
export const DashBoard = styled.div`
  width: 50vh;
  background: #bb84e8;
  color: black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90vw;
  height: 8vh;
  margin-bottom: 2vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const SignUpInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 77vw;
  border-radius: 2px;
  height: 4vh;
  font-size: 0.8rem;
  &::placeholder {
    color: #d9d9d9;
    padding-left: 1vw;
  }
`;
export const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #9747ff;
  border-radius: 10px;
  padding: 1vw;
  margin-bottom: 3vh;
`;

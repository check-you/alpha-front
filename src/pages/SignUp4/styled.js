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
export const Image = styled.img`
  width: 20vw;
`;
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
export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 3vh;
`;
export const NumWrapper = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperContent = styled.div`
  position: fixed;
  top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
  height: 40vh;
  background: white;
`;
export const WrapperInner = styled.div``;
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

import styled from "styled-components";

export const Container = styled.div`
  width: 100vh;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90vw;
  margin-bottom: 2vh;
`;
export const Image = styled.img`
10vw`;
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
  width: 80vw;
  border-radius: 2px;
  height: 4vh;
  font-size: 0.8rem;
  &::placeholder {
    color: #d9d9d9;
    padding-left: 15px;
  }
`;
export const SignupWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #9747ff;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 3vh;
`;

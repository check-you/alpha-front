// styled.js 파일

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-bottom: 20px;
`;

export const LinkButton = styled.a`
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  color: #333;
`;

export const ForLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
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

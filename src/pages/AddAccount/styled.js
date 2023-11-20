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
export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* Apply purple color to the first child element */
  & :first-child {
    color: #471aa0;
  }
`;
export const NumWrapper = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperInputOut = styled.div`
  top: 30vh;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
  height: 10vh;
`;
export const WrapperInput = styled.div`
  height: 50vh;
`;

export const SignUpInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 77vw;
  border-radius: 2px;
  height: 7vh;
  font-size: 0.8rem;
  &::placeholder {
    color: #d9d9d9;
    padding-left: 1vw;
  }
`;
export const SignUpSelectBox = styled.select`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 79vw;
  border-radius: 2px;
  height: 7vh;
  font-size: 0.8rem;
  padding-left: 1vw;
`;
export const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #9747ff;
  border-radius: 10px;
  padding: 1vw;
  height: 7vh;
`;

export const Button = styled.button`
  background-color: #9747ff;
  color: white;
  width: 88vw;
  height: 8vh;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export const NoticeWrapper = styled.div`
  text-align: left;
  color: grey;
  font-size: 1rem;
  width: 80vw;
  height: 20vh;
  & > :first-child {
    font-weight: bold;
    color: black; /* You can adjust the color if needed */
    margin: 10px 0px;
  }
`;

export const NoticeWrapper2 = styled.div`
  text-align: center;
  font-size: 1rem;
  width: 80vw;
  height: 20vh;
  font-weight: light;
  color: #471aa0;
  & > :first-child {
    font-weight: bold;
    color: #471aa0;
    margin: 10px 0px;
  }
`;

export const Pink = styled.span`
  color: #ff1abf;
`;

export const ForLayout = styled.span`
  height: 20vh;
`;

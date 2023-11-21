import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../assets/images/logo.svg";
import { Image } from "./styled";
import { HomeAppBar } from "../../components";
import axios from "../../apis/index";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const [successLogin, setSuccessLogin] = useState(true);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(event.target.value)
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordValid(event.target.value.length >= 8);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_PORT}/api/user/login`,
        {
          nickName: nickname,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      // 토큰 값을 가져옴
      const token = response.headers.get("Accesstoken");
      // 토큰을 쿠키에 저장
      //localStorage.setItem("token", token);
      document.cookie = `token=${token}; path=/`;
      // 로그인 성공 처리
      console.log("로그인 성공:", response.data);

      // 인트로로 이동
      navigate("/linkedaccounts");
    } catch (error) {
      // 로그인 실패 처리
      setSuccessLogin(false);
      console.error("로그인 실패:", error.response.data.reason);
    }

  };
   

  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={Logo} alt="로고이미지" />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              error={!isEmailValid && email !== ""}
              helperText={
                !isEmailValid && email !== ""
                  ? "유효한 이메일을 입력하세요."
                  : ""
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              label="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              error={!isPasswordValid && password !== ""}
              helperText={
                !isPasswordValid && password !== ""
                  ? "비밀번호는 8자 이상이어야 합니다."
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 2 }}
              disabled={!isEmailValid || !isPasswordValid}
              >로그인</Button>
              {successLogin ? null : (
                <p className={styles.loginError}>
                  아이디와 비밀번호를 다시 확인해주세요.
                </p>
              )}
            <Grid container justifyContent="center" alignItems="center">
              <Link href="/signup" underline="none" variant="body2">
                {"아직 계정이 없으신가요? 회원가입"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

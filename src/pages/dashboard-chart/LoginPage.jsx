import { Box, Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography, colors } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from "../../assets/index";
const LoginPage = () => {
  const navigate = useNavigate();

  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Box
      position={"relative"}
      height={"100vh"}
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      {/* background box */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "70%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${images.loginBg})`
        }}
      >
      </Box>
      {/* background box */}

      {/* Login Form  */}
      <Box sx={{
        position: "relative",
        left: 0,
        height: "100%",
        width: isLoggedIn ? "100%" : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
        transition: "all 1s ease-in-out",
        bgcolor: colors.common.white,
      }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: isLoggedIn ? 0 : 1,
          transition: "all 0.3s ease-in-out",
          height: "100%",
          "::-webkit-scrollbar": { display: "none" }
        }}
        >
          {/* logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <img src={images.logo} alt="logo" height={60} />
          </Box>
          {/* logo */}

          {/* form  */}
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" }
          }}>
            <Box component={"form"} maxWidth={400} width={"100%"}>
              <Stack spacing={3} >
                <TextField label="username" fullWidth />
                <TextField label="password" type='password' fullWidth />
                <Button
                  variant='contained'
                  type='submit'
                  size='large'
                  color='success'
                >
                  Sign in
                </Button>
                <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={"Remember me"} />
                  </FormGroup>
                  <Typography color="error" fontWeight={"bold"}>
                    <Link to="#">Forgot password ?</Link>
                  </Typography>
                </Stack>
              </Stack>
            </Box >
          </Box>
          {/* form  */}

        </Box>
      </Box>
      {/* Login Form  */}

      {/* footer */}
      <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
        <Typography
          display={"inline"}
          fontWeight={"bold"}
          sx={{ "&>a": { color: colors.red[900], ml: "5px" } }}
        >
          Don't have a account
        </Typography>

      </Box>
      {/* footer */}

    </Box>
  );
};

export default LoginPage;
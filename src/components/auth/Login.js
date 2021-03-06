import {
  Button,
  Dialog,
  FormControl,
  IconButton,
  TextField,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useState } from "react";
import image from "../../images/Group 78.png";
import google from "../../images/image 7.png";
import facebook from "../../images/image 8.png";
import { Redirect } from "react-router-dom";
import Register from "./Register";
import { requestLogin } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import FacebookLogin from "react-facebook-login";
import Axios from "axios";

function Login({ props }) {
  const [open, setOpen] = useState(false);
  const [loginData, setLogData] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const responseFacebook = (response) => {
    Axios.post("https://robin-devc.herokuapp.com/users/facebook", {
      email: response.email,
    })
      .then((res) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert("No data found");
        console.log(error.response);
      });
  };

  const login = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setLogData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(loginData);
    dispatch(requestLogin(loginData));
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (login.loginResponse.success) {
    window.localStorage.setItem("id", login.loginResponse.id);
    window.localStorage.setItem("username", login.loginResponse.username);

    return <Redirect to="/" />;
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="image">
        <img src={image} alt="gg" />
      </div>
      <div className="form">
        <h1
          style={{
            color: "rgba(208, 1, 27, 1)",
            fontFamily: "'Rock Salt',cursive",
            marginBottom: 30,
          }}
        >
          Robin
        </h1>
        <div style={{ padding: "0px 70px", textAlign: "center" }}>
          <FormControl fullWidth style={{ marginBottom: 10 }}>
            <TextField
              label="Tên đăng nhập"
              variant="outlined"
              name="username"
              onChange={handleChange}
            />
          </FormControl>
          <br />
          <FormControl fullWidth style={{ marginBottom: 10 }}>
            <TextField
              label="Mật khẩu"
              name="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
          <Button
            variant="contained"
            style={{
              margin: 30,
              padding: "14px 50px",
              borderRadius: 30,
              textDecoration: "none",
              fontWeight: 600,
              backgroundColor: "#E30813",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Đăng nhập
          </Button>
          <p>
            Bạn chưa có tài khoản?{" "}
            <b
              style={{ color: "rgba(159, 6, 18, 1)", cursor: "pointer" }}
              onClick={handleClickOpen}
            >
              Đăng ký ngay
            </b>
          </p>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            fullWidth={true}
            maxWidth="lg"
            onClose={handleClose}
          >
            <Register handleClose={handleClose} />
          </Dialog>
          <p>Hoặc đăng nhập với:</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FacebookLogin
              appId="370532724120723"
              fields="name,email,picture"
              callback={responseFacebook}
              icon={image}
              textButton="Đăng nhập bằng Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import {
  Button,
  DialogContent,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import google from "../../images/image 7.png";
import facebook from "../../images/image 8.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRegister } from "../redux/actions/auth";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
function Register({ handleClose }) {
  const [registerData, setRegisterData] = useState({});

  useEffect(() => {});

  const register = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(requestRegister(registerData));
    console.log(registerData);
  };

  if (register.registerResponse.success) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            username: registerData.username,
          },
        }}
      />
    );
  }
  //props.location.state
  return (
    <DialogContent>
      <DialogContentText>
        <Typography
          variant="h3"
          style={{
            color: "rgba(208, 1, 27, 1)",
            fontFamily: "'Rock Salt',cursive",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Robin
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Họ tên"
              name="fullname"
              onChange={handleChange}
              style={{ width: "80%" }}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Tuổi"
              variant="outlined"
              name="age"
              type="number"
              onChange={handleChange}
              style={{ width: "40%" }}
            />
            <FormControl component="fieldset" style={{ marginLeft: 20 }}>
              <FormLabel component="legend">Giới tính</FormLabel>
              <RadioGroup
                style={{ display: "flex", flexDirection: "row" }}
                name="gender"
                defaultValue={registerData.gender || "Female"}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />

            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              style={{ width: "80%" }}
              type="email"
              variant="outlined"
            />
            <br />
            <br />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Tên đăng nhập"
              style={{ width: "80%" }}
              name="username"
              onChange={handleChange}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Mật khẩu"
              name="password"
              type="password"
              onChange={handleChange}
              style={{ width: "80%" }}
              variant="outlined"
            />
            <br />
            <br />{" "}
            <TextField
              label="Nhập lại mật khẩu"
              type="password"
              style={{ width: "80%" }}
              variant="outlined"
            />
            <br />
            <br />
          </Grid>
        </Grid>
        <div style={{ textAlign: "center" }}>
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
            Đăng ký
          </Button>
          <p>
            Bạn đã có tài khoản?{" "}
            <b style={{ color: "rgba(159, 6, 18, 1)" }} onClick={handleClose}>
              Đăng nhập ngay
            </b>
          </p>
          <p>Hoặc đăng ký với:</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton>
              <img src={google} alt="google" style={{ margin: 2 }} />
            </IconButton>
            <IconButton>
              <img src={facebook} alt="facebook" style={{ margin: 2 }} />
            </IconButton>{" "}
          </div>
        </div>
      </DialogContentText>
    </DialogContent>
  );
}

export default Register;

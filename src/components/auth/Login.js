import {
  Button,
  Dialog,
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
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useState } from "react";
import image from "../../images/Group 78.png";
import google from "../../images/image 7.png";
import facebook from "../../images/image 8.png";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    setRedirect(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (redirect) {
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
            <TextField label="Tên đăng nhập" variant="outlined" />
          </FormControl>
          <br />
          <FormControl fullWidth style={{ marginBottom: 10 }}>
            <TextField label="Mật khẩu" variant="outlined" />
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
            onClick={() => {
              swal(
                "Oh...no!",
                "Thông tin tài khoản đăng nhập không trùng khớp",
                "error"
              );
            }}
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
                      style={{ width: "80%" }}
                      variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField
                      label="Tuổi"
                      variant="outlined"
                      type="number"
                      style={{ width: "40%" }}
                    />
                    <FormControl
                      component="fieldset"
                      style={{ marginLeft: 20 }}
                    >
                      <FormLabel component="legend">Giới tính</FormLabel>
                      <RadioGroup
                        style={{ display: "flex", flexDirection: "row" }}
                        name="gender"
                        value="female"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                    <br />
                    <br />
                    <TextField
                      label="Số điện thoại"
                      type="text"
                      style={{ width: "80%" }}
                      variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField
                      label="Email"
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
                      variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField
                      label="Mật khẩu"
                      type="password"
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
                    onClick={() => {
                      swal(
                        "Horray!",
                        "Chúc mừng bạn đã đăng ký thành công! Tiếp tục chọn loại phim bạn yêu thích nào!",
                        "success",
                        {
                          buttons: ["Thôi", "Tiếp tục"],
                        }
                      ).then((response) => {
                        if (response === null) {
                          handleRedirect();
                        } else alert("Next Component");
                      });
                    }}
                  >
                    Đăng ký
                  </Button>
                  <p>
                    Bạn đã có tài khoản?{" "}
                    <b
                      style={{ color: "rgba(159, 6, 18, 1)" }}
                      onClick={handleClose}
                    >
                      Đăng nhập ngay
                    </b>
                  </p>
                  <p>Hoặc đăng ký với:</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <IconButton>
                      <img src={google} alt="google" style={{ margin: 2 }} />
                    </IconButton>
                    <IconButton>
                      <img
                        src={facebook}
                        alt="facebook"
                        style={{ margin: 2 }}
                      />
                    </IconButton>{" "}
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <p>Hoặc đăng nhập với:</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton>
              <img src={google} alt="google" style={{ margin: 2 }} />
            </IconButton>
            <IconButton>
              <img src={facebook} alt="facebook" style={{ margin: 2 }} />
            </IconButton>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

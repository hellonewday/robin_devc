import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header({ data, handleLogout, logged }) {
  return (
    <AppBar style={{ backgroundColor: "#000000" }} position="static">
      <Container fixed>
        <Toolbar>
          <Grid spacing={2} container style={{ alignItems: "center" }}>
            <Grid item xs={1}>
              <Typography
                variant="h5"
                style={{
                  color: "rgba(208, 1, 27, 1)",
                  fontFamily: "'Rock Salt',cursive",
                }}
              >
                Robin
              </Typography>
            </Grid>
            <Grid item xs={9} style={{ postition: "relative" }}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Tìm kiếm bộ phim yêu thích"
                style={{
                  backgroundColor: "white",
                  margin: 10,
                  border: "none",
                  borderRadius: 20,
                }}
              />
              <SearchIcon
                style={{
                  color: "black",
                  fontSize: 30,
                  position: "absolute",
                  top: "30%",
                  right: "18.5%",
                }}
              />
            </Grid>
            <Grid item xs={2} style={{ position: "absolute", right: 0 }}>
              {window.localStorage.getItem("id") ? (
                <div>
                  Hello, {window.localStorage.getItem("username")}!{" "}
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    backgroundColor: "red",
                    padding: "10px 20px",
                    fontWeight: "bolder",
                    borderRadius: 20,
                  }}
                >
                  <Link to="/login" className="route-link">
                    Đăng nhập{" "}
                  </Link>
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

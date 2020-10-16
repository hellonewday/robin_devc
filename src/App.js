import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";
import { SearchKit } from "./SearchKit";
import FacebookLogin from "react-facebook-login";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const [data, setData] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    window.localStorage.setItem("logged", true);
    window.location.reload();
  };

  const handleLogout = () => {
    window.localStorage.removeItem("logged");
    window.location.reload();
  };

  const responseFacebook = (response) => {
    let data = {
      email: response.email,
      name: response.name,
    };
    setData(data);
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {Object.keys(data).length > 0 ? (
            <div>
              Hello, {data.name}!{" "}
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
            <FacebookLogin
              appId="370532724120723"
              fields="name,email,id"
              callback={responseFacebook}
              onClick={() => console.log("Hello World")}
              buttonStyle={{
                backgroundColor: "transparent",
                width: 100,
                fontSize: 14,
                padding: 0,
                border: "none",
              }}
              textButton="Đăng nhập"
            />
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <div className="App">
          <Typography variant="h4" style={{ padding: 10 }}>
            Tool tìm kiếm cá nhân hóa
          </Typography>

          <div>
            {Object.keys(data).length > 0 ? (
              <SearchKit />
            ) : (
              <div>
                <Typography variant="h6">
                  Vui lòng đăng nhập để tiếp tục
                </Typography>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

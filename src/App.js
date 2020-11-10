import React from "react";
import "./App.css";
import Header from "./components/home/Header";
import SearchContainer from "./components/home/SearchContainer";
import FilmList from "./components/home/FilmList";
function App() {
  const [data, setData] = React.useState({});

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
  return (
    <div style={{ background: "black" }}>
      <Header
        data={data}
        handleLogout={handleLogout}
        response={responseFacebook}
      />
      <SearchContainer />
      <FilmList />
    </div>
  );
}

export default App;

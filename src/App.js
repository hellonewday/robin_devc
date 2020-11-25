import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/home/Header";
import SearchContainer from "./components/home/SearchContainer";
import FilmList from "./components/home/FilmList";
function App({ props }) {
  const [data, setData] = React.useState({});
  useEffect(() => {
    console.log(props);
  }, []);
  
  const handleLogout = () => {
    window.localStorage.removeItem("id");
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
        logged={""}
        handleLogout={handleLogout}
        response={responseFacebook}
      />
      <SearchContainer />
      <FilmList />
    </div>
  );
}

export default App;

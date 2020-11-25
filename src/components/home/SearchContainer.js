import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import image1 from "../../images/img1.png";
import image2 from "../../images/img2.png";
import image3 from "../../images/img3.png";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchFilms } from "../redux/actions/films";

function SearchContainer(props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const films = useSelector((state) => state.films);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(true);
    dispatch(searchFilms(search));
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <Grid container>
        <Grid item xs={4} lg={4}>
          <img
            src={image1}
            alt="imag1"
            style={{ width: "100%", opacity: 0.5 }}
          />
        </Grid>
        <Grid item xs={4} lg={4}>
          <img
            src={image2}
            alt="imag2"
            style={{ width: "100%", opacity: 0.5 }}
          />
        </Grid>
        <Grid item xs={4} lg={4}>
          <img
            src={image3}
            alt="imag3"
            style={{ width: "100%", opacity: 0.5 }}
          />
        </Grid>
      </Grid>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          width: "60%",
        }}
      >
        <div
          style={{
            padding: "10px 20px",
            backgroundColor: "#D0011B",
            maxWidth: "fit-content",
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "white",
              fontFamily: "'Rock Salt',cursive",
            }}
          >
            Robin
          </Typography>
        </div>
        <div style={{ position: "relative" }}>
          <TextField
            variant="outlined"
            fullWidth
            name="query"
            onChange={handleChange}
            placeholder="Tìm kiếm bộ phim yêu thích"
            style={{
              backgroundColor: "white",
              border: "none",
              marginTop: 10,
              borderRadius: 10,
            }}
          />
          <IconButton
            onClick={handleClick}
            style={{ position: "absolute", right: 20, top: 15 }}
          >
            <SearchIcon style={{ fontSize: 30 }} />
          </IconButton>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid container spacing={2}>
            {films.searchFilms.map((item) => {
              return (
                <Grid
                  item
                  xs={12}
                  lg={2}
                  key={item.id}
                  style={{ margin: "20px 0px" }}
                >
                  <img
                    src={item.images}
                    style={{ width: "100px", height: "123.39px" }}
                    alt={item.Title}
                  />
                  <Typography
                    onClick={() => this.setState({ open: true, id: item.id })}
                    variant="h5"
                    style={{
                      color: "#E35708",
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                    }}
                  >
                    {item.titlesVN}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchContainer;

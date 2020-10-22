import { Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import image1 from "../../images/img1.png";
import image2 from "../../images/img2.png";
import image3 from "../../images/img3.png";
import SearchIcon from "@material-ui/icons/Search";

function SearchContainer(props) {
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
            placeholder="Tìm kiếm bộ phim yêu thích"
            style={{
              backgroundColor: "white",
              border: "none",
              marginTop: 10,
              borderRadius: 10,
            }}
          />
          <SearchIcon  style={{ position: "absolute", right: 20, top: 25, fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;

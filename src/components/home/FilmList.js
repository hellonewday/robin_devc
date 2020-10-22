import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import data from "../../film.json";

export default class FilmList extends React.Component {
  componentDidMount() {
    console.log(data);
  }
  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <Container>
          <Typography variant="h6" style={{ color: "white", fontWeight: 800 }}>
            Most Watched
          </Typography>
          <Grid container spacing={2}>
            {data.map((item) => {
              return (
                <Grid
                  item
                  xs={12}
                  lg={2}
                  key={item.imdbID}
                  style={{ margin: "20px 0px" }}
                >
                  <img
                    src={item.Images[0]}
                    style={{ width: "168px", height: "223.39px" }}
                    alt={item.Title}
                  />
                  <Typography
                    variant="h5"
                    style={{
                      color: "#E35708",
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                    }}
                  >
                    {item.Title.toUpperCase()}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

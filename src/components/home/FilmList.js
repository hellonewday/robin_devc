import { Container, Dialog, Grid, Typography } from "@material-ui/core";
import React from "react";
import { fetchFilms } from "../redux/actions/films";
import { connect } from "react-redux";
import Film from "./Film";
import { getFilmsFromState } from "../redux/selectors/films";
class FilmList extends React.Component {
  state = {
    open: false,
    id: null,
  };
  componentDidMount() {
    this.props.fetchFilms();
  }
  render() {
    if (this.props) {
      console.log("Yes");
    } else console.log("No");
    return (
      <div style={{ paddingTop: 100 }}>
        <Container>
          <Typography variant="h6" style={{ color: "white", fontWeight: 800 }}>
            Most Watched
          </Typography>
          <Grid container spacing={2}>
            {this.props.films ? (
              this.props.films.map((item) => {
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
                      style={{ width: "168px", height: "223.39px" }}
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
              })
            ) : (
              <h1>Loading</h1>
            )}
          </Grid>
        </Container>
        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <Film id={this.state.id} />
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: getFilmsFromState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(fetchFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);

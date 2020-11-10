import React, { Component } from "react";
import { fetchFilms } from "../redux/actions/films";
import { connect } from "react-redux";

class TestComponent extends Component {
  componentDidMount() {
    this.props.fetchFilms();
  }
  render() {
    console.log(this.props.films);
    return (
      <div style={{ color: "white" }}>
        {this.props.films ? <h1>Hello World</h1> : <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(fetchFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

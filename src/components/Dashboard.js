import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class dashboard extends Component {
  state = {
    data: [],
    dogName: "",
  };

  componentDidMount() {
    this.getDogsapi();
  }

  getDogsapi = () => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        console.log(res);

        const a = Object.entries(res.data.message)
          .map((k) => (k[1].length ? k[1].map((i) => i + " " + k[0]) : k[0]))
          .flat();

        this.setState({ data: a });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onChangeApi = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    await this.setState({ dogName: value });
  };

  render() {
    if (this.state.dogName) {
      return <Redirect to={`/dogsPage/${this.state.dogName}`} />;
    }
    return (
      <div>
        <div>
          <h2> Hey! </h2>
          <h3>Here the dogs list and you can select which dog you want.</h3>
        </div>

        <form>
          <ul className="list-unstyled">
            {this.state.data.map((i) => {
              return (
                <li key={i}>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-light"
                    value={i}
                    id={i}
                    onClick={this.onChangeApi}
                  >
                    {i}
                  </button>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

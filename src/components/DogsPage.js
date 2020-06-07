import React, { Component } from "react";
import axios from "axios";

export default class DogsPage extends Component {
  state = {
    dogs: [],
  };

  componentDidMount = () => {
    let dogName = this.props.match.params.dogName;
    let dogsName = dogName.split(" ").reverse().join(" ").replace(" ", "/");

    console.log(dogName.split(" ").reverse().join(" ").replace(" ", "/"));

    axios
      .get(`https://dog.ceo/api/breed/${dogsName}/images/random`)
      .then((response) => {
        console.log(response);

        this.setState({ dogs: response.data.message });
        console.log(this.state.dogs);
      });
  };
  render() {
    return (
      <div>
        <h6 className="ml-3">
          Please refresh the page to get random images of the dog
        </h6>
        <img className="ml-3" src={this.state.dogs} alt="dog" />
        <p className="ml-3">
          Don't you like the dog! then go to dashboard and select another dog
        </p>
      </div>
    );
  }
}

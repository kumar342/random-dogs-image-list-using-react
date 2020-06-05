import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class Dashboard extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        console.log(res.data);
        let x = Object.keys(res.data);
        console.log(x);

        this.setState({ data: x });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
          multiple
        >
          <option>{this.state.data}</option>
        </Input>
      </FormGroup>
    );
  }
}

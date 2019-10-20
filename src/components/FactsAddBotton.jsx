import React, { Component } from "react";
import { Button } from "reactstrap";
//import FactsListPage from "./FactsListPage";

export default class FactsAddBotton extends Component {
  render() {
    return (
      <Button outline color="primary" onClick={this.props.onLimitIncrement}>
        +
      </Button>
    );
  }
}

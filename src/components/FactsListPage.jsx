import React, { Component } from "react";
import ListFacts from "./ListFacts";
//import {facts} from '../data/CatFacts';
import httpservice from "../services/HttpService";
import FactsAddBotton from "./FactsAddBotton";

class FactsListPage extends Component {
  state = {
    facts: null,
    limit: 35,
    length: null
  };

  componentDidMount() {
    const factsUrl = "https://api.myjson.com/bins/1379ng";
    httpservice
      .get(factsUrl)
      .then(facts => this.setState({ facts: facts, length: facts.length }));
  }

  increaseLimit = () => {
    if (this.state.facts.length > this.state.limit) {
      this.setState({
        limit: this.state.limit + 1,
        isDisabled: false
      });
    } else {
      this.setState({
        isDisabled: true
      });
    }

    console.log("Botton clicked");
  };

  decreaseLimit = () => {
    if (this.state.limit !== 0) {
      this.setState({
        limit: this.state.limit - 1,
        isDisabled: false
      });
    } else {
      this.setState({
        isDisabled: false
      });
    }

    console.log("Botton clicked");
  };

  render() {
    const { facts, limit, length } = this.state;
    const headerStyle = { textAlign: "center" };
    if (!this.state.facts) return <h1 style={headerStyle}>Loading ...</h1>;
    return (
      <div>
        <h1 className="text-center">
          Cat Facts ({limit}/{facts.length}){" "}
          {
            <FactsAddBotton
              onLimitIncrement={this.increaseLimit}
              onLimitDecrement={this.decreaseLimit}
              limit={limit}
              length={length}
            />
          }
        </h1>
        <ListFacts limit={limit} facts={facts} />
      </div>
    );
  }
}

export default FactsListPage;

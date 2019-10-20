import React, { Component } from "react";
import ListFacts from "./ListFacts";
//import {facts} from '../data/CatFacts';
import httpservice from "../services/HttpService";
import FactsAddBotton from "./FactsAddBotton";

class FactsListPage extends Component {
  state = {
    facts: null,
    limit: 3
  };

  componentDidMount() {
    const factsUrl = "https://api.myjson.com/bins/bqmaa";
    httpservice.get(factsUrl).then(facts => this.setState({ facts: facts }));
  }

  increaseLimit = () => {
    this.setState({
      limit: this.state.limit + 1
    });
    console.log("Botton clicked");
  };

  render() {
    const { facts, limit } = this.state;
    const headerStyle = { textAlign: "center" };
    if (!this.state.facts) return <h1 style={headerStyle}>Loading ...</h1>;
    return (
      <div>
        <h1 className="text-center">
          Cat Facts ({limit}/{facts.length}){" "}
          <FactsAddBotton onLimitIncrement={this.increaseLimit} />
        </h1>
        <ListFacts limit={limit} facts={facts} />
      </div>
    );
  }
}

export default FactsListPage;

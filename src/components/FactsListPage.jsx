import React,{Component} from 'react';
import {ListFacts} from './ListFacts';
//import {facts} from '../data/CatFacts';
import httpservice from '../services/HttpService';


 class FactsListPage extends Component {
  
    state = {
        facts: null
    };

    componentDidMount() {
        const factsUrl = "https://api.myjson.com/bins/bqmaa"
        httpservice.get(factsUrl)
           .then( facts => this.setState({facts : facts}))
    }
    

    render() {

        const {facts} = this.state;
        const headerStyle = {textAlign : "center"};
        if (!this.state.facts) return <h1 style={headerStyle}>Loading ...</h1>;
        return(
            <div>
                <h1 className="text-center">Cat Facts (3/{facts.length}) </h1>
                <ListFacts limit={3} facts={facts}/>
            </div>
        );
    }
}

export default FactsListPage;
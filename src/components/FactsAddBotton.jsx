import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
//import FactsListPage from "./FactsListPage";

export default class FactsAddBotton extends Component {
  render() {
    // if (this.props.isDisabled === true) {
    //   return (
    //     <Fragment>
    //       <Button outline color="primary" disabled>
    //         +
    //       </Button>
    //       <Button
    //         className="m-2"
    //         outline
    //         color="danger"
    //         onClick={this.props.onLimitDecrement}
    //       >
    //         -
    //       </Button>
    //     </Fragment>
    //   );
    // }
    // return (
    //   <Fragment>
    //     <Button outline color="primary" onClick={this.props.onLimitIncrement}>
    //       +
    //     </Button>
    //     <Button
    //       outline
    //       className="m-2"
    //       color="danger"
    //       onClick={this.props.onLimitDecrement}
    //     >
    //       -
    //     </Button>
    //   </Fragment>
    // );

    return (
      <Fragment>
        {this.props.limit === this.props.length ? (
          <Button
            outline
            color="primary"
            onClick={this.props.onLimitIncrement}
            disabled
          >
            +
          </Button>
        ) : (
          <Button outline color="primary" onClick={this.props.onLimitIncrement}>
            +
          </Button>
        )}
        {this.props.limit !== 0 ? (
          <Button
            outline
            className="m-2"
            color="danger"
            onClick={this.props.onLimitDecrement}
          >
            -
          </Button>
        ) : (
          <Button
            outline
            className="m-2"
            color="danger"
            onClick={this.props.onLimitDecrement}
            disabled
          >
            -
          </Button>
        )}
      </Fragment>
    );
  }
}

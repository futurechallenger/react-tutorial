import React from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
// React.createElement('Square')
import innerFunc, { Square } from "./Square";
import changeColorAction, { requestServer } from "./actions";

function tryProps(name) {
  return `hello ${name}`;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bgColor: "red"
    };
  }

  handleChangeColor = () => {
    console.log("handle change color");
    const currentColor = this.state.bgColor;
    this.setState({
      bgColor: currentColor === "red" ? "blue" : "yellow"
    });
  };

  handleAsyncAction = () => {
    const { asyncAction } = this.props;
    asyncAction && asyncAction();
  };

  displayStatus = () => {
    const { res } = this.props;

    const { loading, msg, ret } = res;
    if (loading === "init") {
      return "hello";
    } else if (loading === "done") {
      return "success";
    } else if (loading === "failure") {
      return `failed message: ${msg}`;
    } else {
      return "loading";
    }
  };

  render() {
    const { color, changeColorAction, res } = this.props;
    return (
      <div className="App">
        {/*[1, 2, 3].map(v => (
          <Square
            key={v}
            name={v}
            times={v}
            changeName={tryProps}
            bgColor={color}
            onChangeColor={changeColorAction}
          />
        ))*/}
        <button onClick={this.handleAsyncAction}>Async Action</button>
        <div>
          <span>{this.displayStatus()}</span>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// function connect111(a, b) {
//   const aa = a;
//   const bb = b;
//   return (component) => {return `${component} is good`};
// }

// connect111(1, 2)('world');

const mapStateToProps = state => {
  return {
    color: state.color.color,
    res: state.request
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeColorAction: color => dispatch(changeColorAction({ color })),
    asyncAction: () => requestServer()(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// <App1>
//  <App color={color}/>>
//</App1>

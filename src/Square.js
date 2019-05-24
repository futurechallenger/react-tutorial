import React from "react";
// ES5 var React = require('react');
// JSX: div => React.createElement("div")

export class Square extends React.Component {
  constructor() {
    super();

    this.state = {
      bgColor: 'red',
    };
  }

  clickHandler = () => {
    // const { changeName, name } = this.props;
    // alert(changeName(name));

    const {onChangeColor} = this.props;
    if (onChangeColor) {
      onChangeColor('blue');
    }
  };

  render() {
    const { name, changeName, times, bgColor, } = this.props;
    return (
      <div
        title="Square"
        onTouchMoveCapture={() => alert(changeName(name))}
        onClick={this.clickHandler}
        style={{ width: 50 * times, height: 10 * times, backgroundColor: bgColor, margin: 10 }}
      />
    );
  }
}

export default function innerFunc() {
  console.log("inner func");
}

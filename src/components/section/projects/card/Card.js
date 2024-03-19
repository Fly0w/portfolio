import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { isClicked, projectName, linkImg } = this.props;
    return (
      <img
        onClick={isClicked}
        className="card"
        alt={projectName}
        src={linkImg}
      />
    );
  }
}
export default Card;

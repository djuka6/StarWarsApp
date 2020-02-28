import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    var divStyle = {
      textAlign: "center",
      boxShadow: "0px 2px 5px black"
    };
    var aStyle = {
      color: "black"
    };
    return (
      <div class="card-body" style={divStyle}>
        <h5 class="card-title">made by djuka6</h5>
        <p class="card-text">Using Star Wars API, React.JS and Bootstrap</p>
        <a
          style={aStyle}
          href="https://swapi.co/"
          target="_blank"
          class="btn btn-primary"
        >
          STAR WARS API
        </a>
      </div>
    );
  }
}

export default Footer;

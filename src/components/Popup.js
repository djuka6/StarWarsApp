import React, { Component } from "react";

class Popup extends Component {
  constructor() {
    super();
  }

  render() {
    var imgStyle = {
      width: "200px",
      height: "230px",
      marginTop: "2%"
    };
    var buttonStyle = {
      backgroundColor: "black",
      color: "white",
      width: "50%"
    };

    return (
      <div
        class="modal fade"
        id={"Example3" + this.props.aid}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="exampleModalLongTitle">
                {this.props.ime}
              </p>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img style={imgStyle} src={this.props.img} />
              <br />
              <h2>
                DIRECTOR :<br /> {this.props.director}{" "}
              </h2>
            </div>
            <div class="modal-footer">
              <button
                style={buttonStyle}
                type="button"
                class="btn btn-dark mx-auto"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Popup;

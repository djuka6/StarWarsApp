import React, { Component } from "react";
import Popup from "./Popup";
import Baza from "./Baza";
class Article extends Component {
  constructor() {
    super();

    this.state = {
      img: "",
      cena: 100,
      addModalShow: false,
      modalShow: true,
      setModalShow: false,
      button: false,
      slika: "",
      slike: Baza
    };

    //this.Funkcija = this.Funkcija.bind(this);
  }

  render() {
    var imgStyle = {
      borderRadius: "30%",
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
      <div class="card mb-4 box-shadow mx-auto" role="alert">
        <img class="mx-auto" style={imgStyle} src={this.props.slidza} />
        <h4>{this.props.ime} </h4>
        <button
          style={buttonStyle}
          type="button"
          class="btn btn-dark mx-auto"
          data-toggle="modal"
          //data-target={"#" + this.props.id}
          data-target={"#Example3" + this.props.id}
        >
          DETAILS
        </button>
        <Popup
          show={this.state.modalShow}
          onHide={() => console.log("hranislav")}
          ime={this.props.ime}
          aid={this.props.id}
          img={this.props.slidza}
          director={this.props.director}
          key={this.props.id}
        />
        <br />
      </div>
    );
  }
}

export default Article;

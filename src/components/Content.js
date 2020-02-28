import React, { Component } from "react";
import Article from "./Article";
import Baza from "./Baza";
import Axios from "axios";
class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModalShow: false,
      isLoaded: false,
      people: [],
      slike: Baza
    };
    this.getPeople = this.getPeople.bind(this);
    this.GenerisanjeSLike = this.GenerisanjeSLike.bind(this);
  }

  getPeople() {
    return Axios.get("https://swapi.co/api/films").then(response => {
      console.log(response.data.results);
      this.setState({
        isLoaded: true,
        people: response.data.results
      });
    });
  }

  componentDidMount() {
    this.getPeople();
  }

  GenerisanjeSLike(id) {
    switch (id) {
      case 0:
        return "./assets/kacket.png";
      case 1:
        return "./assets/the_phantom_menace.jpg";
      case 2:
        return "./assets/attack_of_the_clones.jpg";
      case 3:
        return "./assets/revenge_of_the_sith.jpg";
      case 4:
        return "./assets/new_hope.jpg";
      case 5:
        return "./assets/new_hope.jpg";
      case 6:
        return "./assets/the_empire_strikes_back.jpg";
      case 7:
        return "./assets/the_force_awakens.jpg";
      default:
        return "foo";
    }
  }
  render() {
    var divStyle = {
      textAlign: "center",
      marginTop: "3%"
    };
    const { people } = this.state;
    const { slike } = this.state;

    return (
      <div class="container" style={divStyle}>
        <div class="row">
          {people.map(man => (
            <div className="col-sm">
              <Article
                director={man.director}
                ime={man.title}
                id={man.episode_id}
                key={man.episode_id}
                slidza={this.GenerisanjeSLike(man.episode_id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;

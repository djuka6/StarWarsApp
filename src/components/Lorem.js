import React, { Component } from "react";
import Article from "./Article";

class Lorem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var divStyle = {
      textAlign: "center",
      marginTop: "3%",
      marginBottom: "3%"
    };
    return (
      <div class="container" style={divStyle}>
        <h1> LOREM IPSUM </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        interdum feugiat ipsum, at rhoncus sapien luctus eu. Fusce et aliquam
        lorem. Pellentesque ut ligula placerat, ornare leo non, convallis elit.
        Nam eget arcu et enim porta bibendum. Aenean sit amet rhoncus lectus.
        Nunc eu convallis est. Quisque luctus egestas lectus at semper. Donec id
        cursus mi. Nullam sit amet urna volutpat, auctor lectus non,
        pellentesque erat. Aenean pellentesque, erat sit amet vulputate
        tincidunt, purus lorem rutrum est, vel dictum velit nunc non odio. Donec
        interdum urna mauris, sit amet scelerisque magna vehicula at. Morbi
        rhoncus metus sit amet ipsum gravida efficitur sit amet eu dolor. Nulla
        a mollis urna. Sed dapibus arcu in sodales accumsan. Nam vestibulum
        aliquet suscipit. Nullam mollis sit amet odio sagittis accumsan. Duis
        semper blandit arcu, vel semper mi consectetur quis. Sed in risus magna.
        Quisque dictum ligula eu ante egestas laoreet. Quisque tempus, magna et
        maximus gravida, diam ligula sagittis arcu, malesuada aliquam diam diam
        in arcu. Duis efficitur odio nec metus gravida, eu commodo nisi posuere.
        Nam in gravida metus. Mauris nec facilisis ipsum. Mauris neque massa,
        tempor eu tristique non, interdum gravida risus. Sed lacus tellus,
        suscipit sit amet viverra id, commodo sed metus. Integer ac ex dapibus,
        bibendum lectus et, dignissim ante. Nam egestas viverra ante, eget
        aliquam nisi feugiat finibus. Praesent sed ante luctus, mollis dui eu,
        fringilla dolor. Donec a tristique risus. Nam id ipsum a massa elementum
        efficitur at sed lorem. In sagittis tincidunt pharetra. Duis pretium
        commodo sem, eleifend sagittis nulla hendrerit quis. Quisque
        sollicitudin est arcu, auctor commodo elit elementum a. Pellentesque
        elementum odio ante, hendrerit rutrum risus rutrum nec. Proin
        pellentesque maximus mi, laoreet gravida sem. Sed ut vulputate massa.
        Aenean ornare arcu est, non ultricies risus molestie eget. Fusce odio
        massa, fermentum at sagittis et, cursus id massa. Suspendisse potenti.
        Aenean posuere feugiat quam, et maximus purus. Nunc ullamcorper odio eu
        ipsum tempus pharetra. Integer id risus at tortor laoreet vestibulum eu
        et velit. Phasellus tincidunt mauris id imperdiet rutrum. Maecenas
        pharetra at eros non facilisis. Fusce a luctus odio, ac commodo sem.
        Nullam a tortor a est iaculis venenatis vitae eu nisl. Quisque
        vestibulum, tellus at eleifend lobortis, dolor enim pulvinar urna, vitae
        molestie dui mauris eu urna. Aliquam eu varius neque. Sed sed vehicula
        odio, vel venenatis ipsum. Donec tincidunt libero vel sapien tempus
        tristique sit amet et tellus. Suspendisse erat tortor, posuere sit amet
        lacus vitae, dignissim finibus justo. Nullam posuere odio nisl, ut
        tempor erat accumsan a. Pellentesque fermentum et magna sit amet
        consequat. Phasellus mauris est, iaculis sit amet faucibus suscipit,
        molestie et metus. Quisque sagittis velit egestas leo malesuada, ac
        elementum massa auctor. Vestibulum tortor arcu, pellentesque non elit a,
        suscipit sagittis neque. Sed nec ex et sem condimentum scelerisque sed a
        ligula. Fusce laoreet rutrum quam.
      </div>
    );
  }
}

export default Lorem;

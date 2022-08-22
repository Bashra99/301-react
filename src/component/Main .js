import React from "react";
import HornedBeast from "./HornedBeast";
import cards from "./data";

let hornedData = cards.map((element) => (
  <HornedBeast
    key={element._id}
    title={element.title}
    img={element.image_url}
    description={element.description}
  />
));
class Main extends React.Component {
  render() {
    return hornedData;
  }
}

export default Main;

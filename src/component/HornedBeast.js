import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickNum: 0,
    };
  }

  increaseNum = () => {
    this.setState({
      clickNum: this.state.clickNum + 1,
    });
  };
  render() {
    return (
      <Card style={{ width: "18rem" }} className="beast-card">
        <Card.Img variant="top" src={this.props.img} onClick={this.increaseNum}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text >{this.props.description}</Card.Text>
          <Card.Text c>Votes : </Card.Text>
          <Card.Text>{this.state.clickNum}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;

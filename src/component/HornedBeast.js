import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


class HornedBeast extends React.Component{
  
        constructor(props) {
            super(props);
            this.state = {
                clickNum : 0
            }
        }
    
    
        increaseNum = () => {
            this.setState({
                clickNum : this.state.voteNum + 1
            })
        }
   
    render() {
        return(
           
            <Card style={{ width: '18rem' }} className="beast-card">
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} onClick={this.increaseNum}/>
              <Card.Text className="desc">
              {this.props.description}
              </Card.Text>
              <Card.Text className="vote">
              Votes
              </Card.Text>
              <Card.Text>
              {this.state.onClick}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default HornedBeast;

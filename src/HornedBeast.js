import React from 'react';
import Card from 'react-bootstrap/Card';




class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      states: 0,
    }
  }
  buttonClicked = () => {
  this.setState({states: this.state.states + 1});
  this.props.showModal(this.props.title);
}
  render() {
    
    
    const image = this.props.img;
    const title = this.props.title;
    const description = this.props.description;

    return (
      <div>
        <Card style={{ width: '18rem' }}
          onClick={this.buttonClicked}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Horn Count: {this.props.horns}</Card.Text>
              <Card.Text>❤️ = {this.state.states}</Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeast;
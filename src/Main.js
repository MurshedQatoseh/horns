import HornedBeast from './HornedBeast.js';
import React from 'react';

import Card from 'react-bootstrap/Card'
import HornCount from './Horncount.js';



class Main extends React.Component {  
  render() {
    return (
      <div>
        <HornCount
          presentBeasts={this.props.presentBeasts} 
        />
        <Card> 
          {this.props.beasts.map((thisBeast, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={thisBeast.title}
                  img={thisBeast.image_url}
                  description={thisBeast.description}
                  horns={thisBeast.horns}
                />
              </div>
            )
          })}
        </Card>
      </div>
    )
  }
}

export default Main;
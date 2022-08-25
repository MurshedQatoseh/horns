
import React from 'react';

import Header from './Header.js';

import Main from './Main.js';

import SelectedBeast from './SelectedBeast'
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      databeasts: data,
      selectedBeast: {}
    }
  }
  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }
  hideModal = () => {this.setState({displayModal: false});
  }
  presentBeasts = (databeasts) => {this.setState({databeasts});
  }
  render() {
    return (
      <div>
        <Header />
        
        <Main 
          showModal={this.showModal}
          beasts={this.state.databeasts}
          presentBeasts={this.presentBeasts} 
        />
        <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
       
      </div> 
    )
  }
}

export default App;
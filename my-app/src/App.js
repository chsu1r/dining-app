import React, { Component } from 'react';
import './App.css';
import DiningMenuComponent from './DiningMenuComponent.js';

// var dining_hall_url = "http://m.mit.edu/apis/dining/";
var test_url = "/api/meals";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dining_json: {},
    };
  }
  componentDidMount() {
    fetch(test_url)
      .then(res => res.json())
      .then((data) => {
        this.setState({dining_json:data});
      })
      .catch(console.log)
  }

  render() {
    if (Object.keys(this.state.dining_json).length == 0) return <div>Loading</div>;
    var venues = this.state.dining_json.venues;
    return (
      <div className="App">
        <header className="jumbotron text-center App-header">
          <h2><a
            className="App-link"
            href={this.state.dining_json.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            eat@mit
        </a></h2>
        <p>A better way to figure out food</p>
        </header>
        <div>
        <DiningMenuComponent venues={venues.house}></DiningMenuComponent>
        </div>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import DiningMenuComponent from './DiningMenuComponent.js';

// var dining_hall_url = "http://m.mit.edu/apis/dining/";
var test_dining_menu = { "url": "http:\/\/m.mit.edu\/apis\/dining\/", "links": [{ "name": "Comments for MIT Dining", "url": "http:\/\/dining.mit.edu\/feedback\/form" }, { "name": "Carry Out Meals", "url": "http:\/\/mit.cafebonappetit.com\/carry-out-meals\/" }, { "name": "Full MIT Dining Website", "url": "http:\/\/dining.mit.edu\/" }], "venues": { "house": [{ "id": "402", "url": "http:\/\/m.mit.edu\/apis\/dining\/venues\/house\/402", "name": "Simmons", "short_name": "Simmons", "location": { "longitude": "-71.10246", "latitude": "42.35643", "description": "W79", "street": "229 Vassar Street" }, "payment": ["Meal plan", "Cash", "TechCASH"], "meals_by_day": [{ "date": "1\/29\/2020", "meals": [] }] }, { "id": "401", "url": "http:\/\/m.mit.edu\/apis\/dining\/venues\/house\/401", "name": "Next", "short_name": "Next", "location": { "longitude": "-71.10326", "latitude": "42.36476", "description": "W71", "street": "500 Memorial Drive" }, "payment": ["Meal plan", "Cash", "TechCASH"], "meals_by_day": [{ "date": "1\/29\/2020", "meals": [] }] }, { "id": "400", "url": "http:\/\/m.mit.edu\/apis\/dining\/venues\/house\/400", "name": "McCormick", "short_name": "McCormick", "location": { "longitude": "-71.10326", "latitude": "42.36476", "description": "W4", "street": "320 Memorial Drive" }, "payment": ["Meal plan", "Cash", "TechCASH"], "meals_by_day": [{ "date": "1\/29\/2020", "meals": [] }] }, { "id": "399", "url": "http:\/\/m.mit.edu\/apis\/dining\/venues\/house\/399", "name": "Baker", "short_name": "Baker", "location": { "longitude": "-71.10326", "latitude": "42.36476", "description": "W7", "street": "362 Memorial Drive" }, "payment": ["Meal plan", "Cash", "TechCASH"], "meals_by_day": [{ "date": "1\/29\/2020", "meals": [] }] }, { "id": "398", "url": "http:\/\/m.mit.edu\/apis\/dining\/venues\/house\/398", "name": "Maseeh", "short_name": "Maseeh", "location": { "longitude": "-71.10326", "latitude": "42.36476", "description": "W1", "street": "305 Memorial Drive" }, "payment": ["Meal plan", "Cash", "TechCASH"], "meals_by_day": [{ "date": "1\/29\/2020", "meals": [{ "name": "Brunch", "start_time": null, "end_time": null, "items": [{ "name": "oatmeal", "dietary_flags": ["vegan"], "station": "stockpot", "description": "" }, { "name": "cream of vegetable soup", "dietary_flags": ["vegetarian"], "station": "stockpot", "description": "" }, { "name": "barbecue roasted pork", "dietary_flags": ["made without gluten"], "station": "comfort", "description": "" }, { "name": "roasted sweet potatoes", "dietary_flags": ["vegan", "made without gluten"], "station": "comfort", "description": "" }, { "name": "barbecue tofu and vegetables", "dietary_flags": ["vegan", "made without gluten"], "station": "pure", "description": "" }, { "name": "white rice", "dietary_flags": ["vegan", "made without gluten"], "station": "pure", "description": "" }, { "name": "roasted vegetable medley", "dietary_flags": ["vegan", "made without gluten"], "station": "pure", "description": "" }, { "name": "omelets", "dietary_flags": [], "station": "action", "description": "" }, { "name": "cheese pizza", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }, { "name": "pepperoni pizza", "dietary_flags": [], "station": "ovens", "description": "" }, { "name": "mushroom pizza", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }, { "name": "buffalo chicken pizza", "dietary_flags": [], "station": "ovens", "description": "" }, { "name": "house-made focaccia", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }, { "name": "mushroom quiche", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }, { "name": "tomato and onion quiche", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }, { "name": "broccoli quiche", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }] }, { "name": "Dinner", "start_time": null, "end_time": null, "items": [{ "name": "cream of vegetable soup", "dietary_flags": ["vegetarian"], "station": "stockpot", "description": "" }, { "name": "beef and vegetable soup", "dietary_flags": ["made without gluten"], "station": "stockpot", "description": "" }, { "name": "roasted chicken", "dietary_flags": ["made without gluten"], "station": "comfort", "description": "" }, { "name": "brown rice", "dietary_flags": ["vegan", "made without gluten"], "station": "comfort", "description": "" }, { "name": "roasted vegetable medley", "dietary_flags": ["vegan", "made without gluten"], "station": "comfort", "description": "" }, { "name": "21st century foods tofu and vegetable toss", "dietary_flags": ["vegan", "made without gluten", "locally crafted"], "station": "pure", "description": "" }, { "name": "white rice", "dietary_flags": ["vegan", "made without gluten"], "station": "pure", "description": "" }, { "name": "roasted broccolini", "dietary_flags": ["vegan", "made without gluten"], "station": "pure", "description": "" }, { "name": "korean barbecue chicken", "dietary_flags": [], "station": "action", "description": "chicken\n21st century foods tofu\nassorted fresh cut vegetables\n\nkorean barbecue sauce\ncreamy yogurt curry sauce\n\nwhite rice\nlo mein noodles" }, { "name": "cheese pizza", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }, { "name": "pepperoni pizza", "dietary_flags": [], "station": "ovens", "description": "" }, { "name": "fried chicken and jalapeno pizza", "dietary_flags": [], "station": "ovens", "description": "" }, { "name": "spinach, onion, and roasted red pepper pizza", "dietary_flags": ["vegetarian"], "station": "ovens", "description": "" }] }, { "name": "Breakfast", "start_time": null, "end_time": null, "items": [{ "name": "buttermilk pancakes", "dietary_flags": ["vegetarian"], "station": "breakfast", "description": "" }, { "name": "cage-free scrambled eggs", "dietary_flags": ["vegetarian", "made without gluten", "humane"], "station": "breakfast", "description": "" }, { "name": "cage-free cheesy scrambled eggs", "dietary_flags": ["vegetarian", "made without gluten", "humane"], "station": "breakfast", "description": "" }, { "name": "cage-free hard-boiled eggs", "dietary_flags": ["vegetarian", "made without gluten", "humane"], "station": "breakfast", "description": "" }, { "name": "home fries", "dietary_flags": ["vegan", "made without gluten"], "station": "breakfast", "description": "" }, { "name": "pork sausage", "dietary_flags": ["made without gluten", "humane"], "station": "breakfast", "description": "" }, { "name": "pork bacon", "dietary_flags": ["made without gluten"], "station": "breakfast", "description": "" }, { "name": "turkey bacon", "dietary_flags": ["made without gluten"], "station": "breakfast", "description": "" }, { "name": "turkey sausage", "dietary_flags": [], "station": "breakfast", "description": "" }, { "name": "vegetarian sausage", "dietary_flags": ["vegetarian"], "station": "breakfast", "description": "" }, { "name": "turkey club frittata", "dietary_flags": ["made without gluten"], "station": "breakfast special", "description": "" }] }] }] }], "retail": [] } };
// var test_array = {"url": "https://web.mit.edu/", "name": "Maseeh"}
class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    dining_json: test_dining_menu,
  }
  componentDidMount() {
    // console.log("ready");
    // fetch(dining_hall_url)
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({ dining_json: data })
    //     console.log(this.state.dining_json)
    //   })
    //   .catch(console.log)
    // this.setState({dining_json:test_dining_menu});
  }

  render() {
    var venues = this.state.dining_json.venues;
    // console.log(venues);
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href={this.state.dining_json.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT Website
        </a>
        </header>
        <div>
        <DiningMenuComponent venues={venues.house}></DiningMenuComponent>
        </div>
      </div>
    );
  }
}


export default App;

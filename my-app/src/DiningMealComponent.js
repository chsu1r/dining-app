import React from 'react';
import PropTypes from 'prop-types';
import MealItemComponent from './MealItemComponent';

class DiningMealComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggled: false};
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log("Dining meal ready");
    }

    onClick() {
        this.setState({toggled: !this.state.toggled});
    }

    render() {
        
        return <div id="meal-section" className="card dining-meal">
            <div className="card-header" id={this.props.name + "_header"}><button className="btn btn-link" onClick={this.onClick}><h5 className="card-title">{this.props.name}</h5></button></div>
            <div className="meal-item-list">
                {this.state.toggled ? this.props.items.map ((meal_item) =>
                <MealItemComponent key={meal_item.name} name={meal_item.name} flags={meal_item.dietary_flags}/>) : null}
            </div>
        </div>
    };

  };

  DiningMealComponent.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array,
  }

  
export default DiningMealComponent;
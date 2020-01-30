import React from 'react';
import PropTypes from 'prop-types';

class DiningHallComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggled: false};
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log("Dininghall ready");
    }

    onClick() {
        this.setState({toggled: !this.state.toggled});
    }

    render() {
        return <div className="dining-hall" onClick={this.onClick}> <h1>{this.props.name}</h1>
            {this.state.toggled ? this.props.meals.map((meal) => (
                <div className="dining-hall-meal"> <h2>{meal.name}</h2> </div>
                )) : null}
        </div>
    };

  };

  DiningHallComponent.propTypes = {
    name: PropTypes.string,
    payment_types: PropTypes.array,
    meals: PropTypes.array,
  }

  
export default DiningHallComponent;
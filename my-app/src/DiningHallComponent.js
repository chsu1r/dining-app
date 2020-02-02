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

    // render() {
    //     return <div className="card text-center dining-hall"> 
    //     <div className="card-header" id={this.props.name + "_header"}><button className="btn btn-link" data-toggle="collapse" data-target={this.props.name} aria-expanded="false" aria-controls={this.props.name}>{this.props.name}</button></div>
    //         <div id={this.props.name} className="collapse" aria-labelledby={this.props.name + "_header"} data-parent="#menu-section"> 
    //         <div className="card-body">{this.props.meals.map((meal) =>
    //         <div className="dining-hall-meal"> <h2>{meal.name}</h2> </div>)}</div>
    //     </div></div>
    // };
    render() {
        return <div className="card text-center dining-hall"> 
        <div className="card-header" id={this.props.name + "_header"}><button className="btn btn-link" onClick={this.onClick}><h5 className="card-title">{this.props.name}</h5></button></div>
            {this.state.toggled ? <div className="card-body dining-hall-meals">{this.props.meals.map((meal) =>
            <div className="dining-hall-meal"> <p className="card-text">{meal.name}</p> </div>)}
        </div> : null }</div>
    };

  };

  DiningHallComponent.propTypes = {
    name: PropTypes.string,
    payment_types: PropTypes.array,
    meals: PropTypes.array,
  }

  
export default DiningHallComponent;
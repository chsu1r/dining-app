import React from 'react';
import PropTypes from 'prop-types';

class MealItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggled: false};
        this.translateFlag = this.translateFlag.bind(this);
    }

    componentDidMount() {
        console.log("Dining meal ready");
    }
    
    translateFlag(flag_name) {
        if (flag_name == "made without gluten") {
            return "gluten-free";
        } else if (flag_name == "vegetarian") {
            return "vegetarian";
        } else {
            return flag_name
        }
    }

    render() {
        return <div className="meal-item"><span>{this.props.name}{this.props.flags.map((flag) =>
        <span className="dietary-flag-box">{this.translateFlag(flag)}</span>)}</span></div>
    };

  };

  MealItemComponent.propTypes = {
    name: PropTypes.string,
    flags: PropTypes.array,
  }

  
export default MealItemComponent;
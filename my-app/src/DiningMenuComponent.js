import React from 'react';
import PropTypes from 'prop-types';
import DiningHallComponent from './DiningHallComponent';

class DiningMenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Diningmenu ready");
    }

    render() {
        const sections = [];
        this.props.venues.forEach((place) => {
            console.log(place);
            sections.push(<DiningHallComponent key={place.id} name={place.name} payment_types={place.payment} meals={place.meals_by_day[0].meals} />);
            });
        console.log(sections)
        return <div id="menu-section" className="dining-menu">
            {sections}
        </div>
    };

  };

  DiningMenuComponent.propTypes = {
    venues: PropTypes.array,
  }

  
export default DiningMenuComponent;
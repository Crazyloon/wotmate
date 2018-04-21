import React from 'react';
import Workout from './Workout';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class WorkoutsPage extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log("Loading Page: ", this.props.workouts);
    return (
      <div>
        <div className="col-xs-12 page-workouts__header">
          <Link to="/workout" ><button className="btn btn-primary header__button--add bevel">➕ New Workout</button></Link>
        </div>
        <div className="col-xs-12 workouts__container">
          {this.props.workouts.map(wo => <Workout key={wo.id + wo.name} workout={wo}/>)} 
        </div>
      </div>
    );
  }
}

WorkoutsPage.propTypes = {
  workouts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    workouts: state.workouts
  };
}

export default connect(mapStateToProps)(WorkoutsPage);
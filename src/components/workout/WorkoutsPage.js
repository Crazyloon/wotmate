import React from 'react';
import Workout from './Workout';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router';
import { connect } from "react-redux";

class WorkoutsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="col-xs-12 page-workouts__header">
          <button className="btn btn-primary header__button--add bevel">➕ New Workout</button>
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
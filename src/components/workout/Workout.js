import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';


class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <caption visible="false">{this.props.workout.name}</caption>
          <thead className="thead-light">
            <tr>
              <th>Exercise</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.props.workout.exercises.map((exercise, index) => {
                return(
                <tr key={index}>
                  <td>{exercise.name}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.weight}</td>
                </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Workout.propTypes = {
  workout: PropTypes.object.isRequired
};

Workout.defaultProps = {
  workout: {
    id: '',
    date: '',
    name: '',
    muscles: [],
    exercises: []
  }
};

function mapStateToProps(state, ownprops){
  return{
    workout: state.workouts.workout001
  };
}

export default withRouter(connect(mapStateToProps)(Workout));
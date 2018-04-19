import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';

const Workout = ({workout}) => {

  function formatTime(timestamp){
    return timestamp.toLocaleTimeString([], {month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'});
  }

  return(
    <div className="container workout__container">
      <div className="workout__title">
        {workout.name} - {formatTime(workout.date)}
      </div>
      <table className="table table-striped table-bordered">
        <caption hidden="true">{workout.name}</caption>
        <thead className="thead-light">
          <tr>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {workout.exercises.map((exercise, index) => {
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
      <div className="workout__actions">
          <button className="btn btn-secondary bevel">✍️ Edit</button>
          <button className="btn btn-danger bevel">💣 Delete</button>
      </div>
    </div>
  );
};

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

export default Workout;
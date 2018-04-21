import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatTime } from '../../helpers/formatting';
import Table from '../shared/Table';

const Workout = ({workout}) => {
  return(
    <div className="container workout__container">
      <h5>{workout.name} - {formatTime(workout.date)}</h5>
      <Table title={workout.name}
             exercises={workout.exercises}
      />    
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
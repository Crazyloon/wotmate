import React from 'react';
import { connect } from 'react-redux';
import Header from './shared/Header';
import PropTypes from 'prop-types';
import HomePage from './home/HomePage';
import { withRouter, Route, Switch } from 'react-router';
import About from './about/About';
import NotFoundPage from './error/NotFoundPage';
import Workout from './workout/Workout';
import WorkoutsPage from './workout/WorkoutsPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About}/>
          <Route path="/workouts" component={WorkoutsPage}/>
          <Route path="/workouts/:id" component={Workout}/>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state, ownprops){
  return{
    workouts: state.workouts
  };
}

export default withRouter(connect(mapStateToProps)(App));
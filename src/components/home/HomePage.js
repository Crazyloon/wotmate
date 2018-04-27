import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedList from './FeaturedList';

class HomePage extends React.Component{
    render(){
        return (
          <div>
            <div className="hero">
              <div className="hero__transparent">
                  <h1>Workout Tracker Mate</h1>
                  <p>Track every exercise with a single log, and watch your progress.</p>
                  <Link to="/about" className="btn btn-primary bevel bevel-md">Learn More</Link>
              </div>
            </div>
            <FeaturedList />
          </div>
        );
    }
}

export default HomePage;
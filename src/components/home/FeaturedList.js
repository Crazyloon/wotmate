import React from 'react';

const FeaturedList = () => {
  return (
    <div className="features--list">
      <div className="col-md-4 features--box">
        <i className="fas fa-heartbeat fa-7x color-red"/>
        <div>
          <p className="features-box--p__emphasis">Work.</p>
          <p>
            Get your heat pumping and move that body. You've got fat to burn and muscle to churn!
          </p>
        </div>
      </div>
      <div className="col-md-4 features--box">
        <i className="fab fa-wpforms fa-7x color-purple"/>
        <div>
          <p className="features-box--p__emphasis">Log.</p>
          <p>
            Detail every move quickly and easily. One log to rule them all.
          </p>
        </div>
      </div>
      <div className="col-md-4 features--box">
        <i className="fas fa-signal fa-7x color-green"/>
        <div>
          <p className="features-box--p__emphasis">Track.</p>
          <p>
            View your progress and see how far you've come. You can't be stopped!
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default FeaturedList;
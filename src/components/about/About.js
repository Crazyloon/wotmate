import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>WotMate</h1>
      <em>A personal workout tracking application.</em>
      <div className="mt-5 d-flex flex-column">
        <p style={{textIndent: '40px'}}>
          I went to school to learn how to develop applications about 4 years ago.
          I originally learned how to develop standalone appications using C# and Windows Forms. 
          In June of 2017, I worked as an intern and got tossed into front end web development, 
          I started to enjoy it. The company I interned for offered to hire me, and I accepted. 
          One problem. The job would be working as a consultant and I needed to have some portfolio 
          pieces to show in order to get staffed on a project. This application is the first of those portfolio pieces.
        </p>
        <p style={{textIndent: '40px'}}>
          The idea for this project came about when I noticed people at the gym 
          using journals to track their workouts. I wanted to be able to log workouts quickly
          but also be able to track my progress graphically.
        </p>
        <em className="ml-auto p2">- Russell Dow</em>
      </div>
    </div>
  );
}; 

export default About;
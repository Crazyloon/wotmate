import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>WotMate</h1>
      <em>A personal workout tracking application.</em>
      <div className="mt-5 d-flex flex-column">
        <p style={{textIndent: '40px'}}>
          I went to school to learn how to develop applications about 4 years ago.
          I originally learned how to develop standalone appications using C#, but after
          I took an internship and was tossed into front end web development, I started to enjoy
          it. The company I interned for offered to hire me, and I accepted. One problem. The job
          would be working as a consultant and I needed to have some portfolio pieces to show in
          order to get staffed on a project. This application is the first of those portfolio pieces.
        </p>
        <p style={{textIndent: '40px'}}>
          The idea for this project came about while I was at the gym. I noticed a few people
          using journals to track their lifts and at the time I was still in school learning
          Android development. The first toy-app I made for Andriod was a workout tracking
          application I named WotMate. It was absolute trash. The interface was ugly and 
          unwieldy. 
        </p>
        <em className="ml-auto p2">- Russell Dow</em>
      </div>
    </div>
  );
}; 

export default About;
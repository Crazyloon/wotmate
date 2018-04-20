import 'babel-polyfill';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import Workout from '../Workout';

describe('Workout', () =>{
  // arrange
  const testWorkout = {
    id: 'workout0001',
    date: new Date('2018/04/15 13:00'),
    name: 'Legs',
    muscles: [
      'Glutes',
      'Quads'
    ],
    exercises: [
      {
        set: 1,
        name: 'Squat',
        reps: 8,
        weight: 145
      },
      {
        set: 1,
        name: 'Lunge',
        reps: 8,
        weight: 80
      }
    ]
  };

  // act
  const wrapper = mount(<Workout workout={testWorkout}/>);
  
  // assert
  it('renders a formatted workout title', ()=>{
    expect(wrapper.find('h5').text()).toEqual('Legs - April 15, 2018, 1:00 PM');
  });

  it('renders a Table component', ()=>{
    expect(wrapper.find('Table').length).toBe(1);
  });
  
  it('renders two buttons: one edit, one delete', ()=>{
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('button').get(0).props.children).toEqual('✍️ Edit');
    expect(wrapper.find('button').get(1).props.children).toEqual('💣 Delete');
  });

  it('matches last snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
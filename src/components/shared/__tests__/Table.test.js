import 'babel-polyfill';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import Table from '../Table';
import { workoutTypes, workoutIntensity } from '../../../data/api/workoutApi';

describe('Table Test', () =>{
  // arange
  const testProps = {
    containerClass: 'col-md-8',
    id: 'workout0001',
    date: new Date('2018/04/15 14:00'),
    name: 'Table Title',
    exercises: [
      {
        type: workoutTypes.cardio,
        sets: [
          {
            name: 'Sprint',
            duration: 30,
            distance: 100
          }
        ]
      },
      {
        type: workoutTypes.lift,
        sets: [
          {
            name: 'Lunges',
            reps: 6,
            weight: 100
          }
        ]
      },
      {
        type: workoutTypes.activity,
        sets: [
          {
            name: 'Yoga',
            duration: 30,
            intensity: workoutIntensity.heavy
          }
        ]
      }
    ]
  };

  it('renders with headings for each type of exercise and exercises under each heading', () => {
    // act
    const wrapper = mount(<Table {...testProps} />); 

    const headings = wrapper.find('th');
    const definitions = wrapper.find('td');
    
    // assert
    expect(headings).toHaveLength(9); // 9 headings
    expect(definitions).toHaveLength(9); // 9 definitions
    expect(wrapper).toMatchSnapshot();
  });

});
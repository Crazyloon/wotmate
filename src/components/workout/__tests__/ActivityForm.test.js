import 'babel-polyfill';
import sinon from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import ActivityForm from '../subforms/ActivityForm';

// Arrange
const initialData = {
  workout: {
    id: '',
    date: '',
    name: '',
    muscles: [],
    exercises: []
  },
  exercise: {
    tag: '',
    type: {},
    sets: []
  },
  newSet: {
    name: '',
    duration: {
      value: 30,
      scale: 'min'
    },
    intensity: 'variable'
  },
  errors: {},
  customWorkout: '',
  durationOptions: ['sec', 'min'],
  durationScale: 'sec',
};

const spy = sinon.spy();

const wrapper = shallow(<ActivityForm 
  {...initialData}
  onActivityChange={spy}
  onAddSet={spy}
  onScaleChange={spy}
  durationOptions={initialData.durationOptions}
  durationScale={initialData.durationScale}
/>);

describe('Activity Form', () =>{
  it('calls onActivityChange', ()=>{
    const simulatedInput = {target: {value: 'Yoga'}};
    wrapper.find('SelectInput').first().simulate('change', simulatedInput);
    sinon.assert.calledWith(spy, simulatedInput);
    sinon.assert.calledOnce(spy);
  });

  it('calls onAddSet', () =>{
    spy.resetHistory();
    wrapper.find('.btn-primary').first().simulate('click');
    sinon.assert.calledWith(spy);
    sinon.assert.calledOnce(spy);    
  });
});

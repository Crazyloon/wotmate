<<<<<<< HEAD
import 'babel-polyfill';
import sinon from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import CardioForm from '../subforms/CardioForm';

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
      scale: 'sec'
    },
    distance: {
      value: 100,
      scale: 'yrds'
    }
  },
  errors: {},
  customWorkout: '',
  durationOptions: ['sec', 'min'],
  distanceOptions: ['yd', 'mi'],
  durationScale: 'sec',
  distanceScale: 'yd'
};

const spy = sinon.spy();

const wrapper = shallow(<CardioForm 
  {...initialData}
  onCardioChange={spy}
  onAddSet={spy}
  onScaleChange={spy}
  durationOptions={initialData.durationOptions}
  distanceOptions={initialData.distanceOptions}
  durationScale={initialData.durationScale}
  distanceScale={initialData.distanceScale}
/>);

describe('Cardio Form', () =>{
  it('calls onCardioChange', ()=>{
    const simulatedInput = {target: {value: 'Jog'}};
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
=======
import 'babel-polyfill';
import sinon from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import CardioForm from '../subforms/CardioForm';

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
      scale: 'sec'
    },
    distance: {
      value: 100,
      scale: 'yrds'
    }
  },
  errors: {},
  customWorkout: '',
  durationOptions: ['sec', 'min'],
  distanceOptions: ['yd', 'mi'],
  durationScale: 'sec',
  distanceScale: 'yd'
};

const spy = sinon.spy();

const wrapper = shallow(<CardioForm 
  {...initialData}
  onCardioChange={spy}
  onAddSet={spy}
  onScaleChange={spy}
  durationOptions={initialData.durationOptions}
  distanceOptions={initialData.distanceOptions}
  durationScale={initialData.durationScale}
  distanceScale={initialData.distanceScale}
/>);

describe('Cardio Form', () =>{
  it('calls onCardioChange', ()=>{
    const simulatedInput = {target: {value: 'Jog'}};
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
>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532

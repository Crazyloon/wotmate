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
    name: ''
  },
  errors: {},
  customWorkout: ''
};

const spy = sinon.spy();

const wrapper = shallow(<CardioForm 
  {...initialData}
  onCardioChange={spy}
  onAddSet={spy}
/>);

describe('Cardio Form', () =>{
  it('calls onCardioChange', ()=>{
    const simulatedInput = {target: {value: 'Jog'}};
    wrapper.find('SelectInput').first().simulate('change', simulatedInput);
    sinon.assert.calledWith(spy, simulatedInput);
    sinon.assert.calledOnce(spy);
  });
  
  it('calls onAddSet', () =>{
    spy.reset();
    wrapper.find('.btn-primary').first().simulate('click');
    sinon.assert.calledWith(spy);
    sinon.assert.calledOnce(spy);    
  });
});
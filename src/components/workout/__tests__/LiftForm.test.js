import 'babel-polyfill';
import sinon from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import LiftForm from '../subforms/LiftForm';

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

const wrapper = shallow(<LiftForm 
  {...initialData}
  onLiftChange={spy}
  onAddSet={spy}
/>);

describe('Lift Form', () =>{
  it('calls onLiftChange', ()=>{
    const simput = {target: {value: 'Bench Press'}};
    wrapper.find('SelectInput').first().simulate('change', simput);
    sinon.assert.calledWith(spy, simput);
    sinon.assert.calledOnce(spy);
  });

  it('calls onAddSet', () =>{
    spy.reset();
    wrapper.find('.btn-primary').first().simulate('click');
    sinon.assert.calledWith(spy);
    sinon.assert.calledOnce(spy);    
  });
  
  describe('Custom Lift Type', () =>{
    it('calls onCustomLiftChange', () =>{
      spy.reset();

      const mountedWrapper = mount(<LiftForm 
        {...initialData}
        onLiftChange={spy}
        onAddSet={spy}
      />);
      const componentSpy = sinon.spy(mountedWrapper.instance(), 'onCustomLiftChange');
      let event = {};
      event.target = mountedWrapper.find('TextInput').first();
      event.target.name = "lift";
      event.target.value = "Dead Lift";

      mountedWrapper.instance().onCustomLiftChange(event);
      sinon.assert.calledOnce(componentSpy);
           
      const liftOptions = [{value: "Dead Lift", text: "Dead Lift"}];
      mountedWrapper.setState(
        {liftOptions: liftOptions}
      );
      
      expect(mountedWrapper.find('select').children().find('option').at(1).props().value).toBe('Dead Lift');
    });
  });
});

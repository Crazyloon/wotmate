import 'babel-polyfill';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import WorkoutForm from '../WorkoutForm';
import ActivityForm from '../subforms/ActivityForm';
import CardioForm from '../subforms/CardioForm';
import LiftForm from '../subforms/LiftForm';
import { workoutTypes, workoutIntensity } from '../../../data/api/workoutApi';

describe('Workout Form', () => {
  // arrange
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
    saving: false,
    errors: {},
    customWorkout: ''
  };

  const onChangeMock = jest.fn();
  //const onClickMock = jest.fn();

  const wrapper = mount(<WorkoutForm 
    workout={initialData.workout}
    exercise={initialData.exercise}
    newSet={initialData.newSet}
    customWorkout={initialData.customWorkout} 
    onNameChange={onChangeMock} 
    onExerciseChange={onChangeMock} 
    onLiftChange={onChangeMock} 
    onCardioChange={onChangeMock} 
    onActivityChange={onChangeMock} 
    onAddSet={onChangeMock}
    onSave={onChangeMock} 
    errors={initialData.errors}
    saving={initialData.saving}
  />);
  describe('initial form state', () =>{
    it('has a name text input', ()=>{
      expect(wrapper.find('TextInput').length).toBe(1);
    });
    it('has a type select input', ()=>{
      expect(wrapper.find('SelectInput').length).toBe(1);
    });
  });

  describe('selecting "Lift"', ()=>{
    it('presents the LiftForm', ()=>{
      wrapper.setProps({
        exercise: {tag: 'lift', type: {}, sets: []}
      }, () => {wrapper.update();});
      
      const WorkoutType_SelectInput = wrapper.find('SelectInput').first();      
      
      expect(wrapper.find('LiftForm').length).toBe(1);
      expect(wrapper.find('TextInput').length).toBe(2);
      expect(wrapper.find('SelectInput').length).toBe(2);
      expect(wrapper.find('NumberInput').length).toBe(2);
      expect(wrapper.find('.btn').length).toBe(2);
      

      WorkoutType_SelectInput.simulate('change', {target: {value: 'lift'}});
      expect(WorkoutType_SelectInput.props().value).toBe('lift');
      
      
    });
  });
});
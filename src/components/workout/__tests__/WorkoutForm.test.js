import 'babel-polyfill';
import sinon from 'sinon';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import WorkoutForm from '../WorkoutForm'; 

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

const mountedWrapper = mount(<WorkoutForm 
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

describe('Workout Form', () => {

  describe('initial form state', () =>{
    it('has a name text input', ()=>{
      expect(mountedWrapper.find('TextInput').length).toBe(1);
    });

    it('has a type select input', ()=>{
      expect(mountedWrapper.find('SelectInput').length).toBe(1);
    });

    it('simulates exercise type select correctly', ()=>{
      const onChangeSpy = sinon.spy();
      const shallowWrapper = shallow(<WorkoutForm 
        workout={initialData.workout}
        exercise={initialData.exercise}
        newSet={initialData.newSet}
        customWorkout={initialData.customWorkout} 
        onNameChange={onChangeMock} 
        onExerciseChange={onChangeSpy} 
        onLiftChange={onChangeMock} 
        onCardioChange={onChangeMock} 
        onActivityChange={onChangeMock} 
        onAddSet={onChangeMock}
        onSave={onChangeMock} 
        errors={initialData.errors}
        saving={initialData.saving}
      />);

      const simulatedInput = {target: {value: 'lift'}};
      shallowWrapper.find('SelectInput').first().simulate('change', simulatedInput);      
      sinon.assert.calledWith(onChangeSpy, simulatedInput);
      sinon.assert.calledOnce(onChangeSpy);
      expect(shallowWrapper).toMatchSnapshot();
    });
  });

  describe('selecting "Lift"', ()=>{
    it('presents the LiftForm', ()=>{
      mountedWrapper.setProps({
        exercise: {tag: 'lift', type: {}, sets: []},
        newSet: {
          name: 'Bench Press',
          reps: 8,
          weight: {
            value: 100,
            scale: 'lbs'
          }
        }
      }, () => {mountedWrapper.update();});
    
      expect(mountedWrapper.find('SelectInput').first().props().value).toBe('lift');      
      expect(mountedWrapper.find('LiftForm').length).toBe(1);
      expect(mountedWrapper.find('TextInput').length).toBe(2);
      expect(mountedWrapper.find('SelectInput').length).toBe(2);
      expect(mountedWrapper.find('NumberInput').length).toBe(2);
      expect(mountedWrapper.find('.btn').length).toBe(2);      
    });    
  });

  describe('selecting "Cardio"', ()=>{
    it('presents the CardioForm', ()=>{
      mountedWrapper.setProps({
        exercise: {tag: 'cardio', type: {}, sets: []},
        newSet: {
          name: 'Sprint',
          duration: {
            value: 30,
            scale: 'sec'
          },
          distance: {
            value: 100,
            scale: 'yrds'
          }
        }
      }, () => {mountedWrapper.update();});
     
      expect(mountedWrapper.find('SelectInput').first().props().value).toBe('cardio');      
      expect(mountedWrapper.find('CardioForm').length).toBe(1);
      expect(mountedWrapper.find('TextInput').length).toBe(2);
      expect(mountedWrapper.find('SelectInput').length).toBe(2);
      expect(mountedWrapper.find('NumberInput').length).toBe(2);
      expect(mountedWrapper.find('.btn').length).toBe(2);           
    });    
  });

  describe('selecting "Activity"', ()=>{
    it('presents the ActivityForm', ()=>{
      mountedWrapper.setProps({
        exercise: {tag: 'activity', type: {}, sets: []},
        newSet: {
          name: 'Sprint',
          duration: {
            value: 30,
            scale: 'min'
          },
          intensity: 'Variable'
        }
      }, () => {mountedWrapper.update();});
    
      expect(mountedWrapper.find('SelectInput').first().props().value).toBe('activity');      
      expect(mountedWrapper.find('ActivityForm').length).toBe(1);
      expect(mountedWrapper.find('TextInput').length).toBe(2);
      expect(mountedWrapper.find('SelectInput').length).toBe(3);
      expect(mountedWrapper.find('NumberInput').length).toBe(1);
      expect(mountedWrapper.find('.btn').length).toBe(2);        
    });    
  });
});
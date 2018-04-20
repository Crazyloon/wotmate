import 'babel-polyfill';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});

import Table from '../Table';

describe('Table', () =>{
  // arange
  const testProps = {
    title: 'Table Title',
    headingData: ['h1', 'h2', 'h3'],
    rowData: [{a: 'one', b: 'two', c: 'three'}, 
              {a: 'four', b: 'five', c: 'six'}, 
              {a: 'seven', b: 'eight', c: 'nine'}],
    rowKeys: ['a', 'b', 'c']
  };

  it('renders with headingData and rowData under each heading', () => {
    // act
    const wrapper = mount(<Table {...testProps} />); 

    const headings = wrapper.find('th');
    const definitions = wrapper.find('td');
    
    // assert
    expect(headings).toHaveLength(3); // 3 headings
    expect(definitions).toHaveLength(9); // 9 definitions
    expect(wrapper).toMatchSnapshot();
  });

});
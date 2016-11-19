import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header.js';
import {shallow} from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('contains a Header child', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.contains(<Header/>)).toBe(true);
});

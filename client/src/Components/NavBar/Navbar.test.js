import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Navbar from './Navbar';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it('Should render Four <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('The Link should have the text "Videogames!" and change the path to "/".', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
    expect(wrapper.find(Link).at(0).text()).toEqual('Videogames!');
  });
  it('The Link should have the text "Home" and change the path to "/home".', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');
    expect(wrapper.find(Link).at(1).text()).toEqual('Home');
  });
  it('The Link should have the text "Create Videogame" and change the path to "/create."', () => {
    expect(wrapper.find(Link).at(2).prop('to')).toEqual('/create');
    expect(wrapper.find(Link).at(2).text()).toEqual('Create VideoGame');
  });
  it('Should render one Search Bar', () => {
    expect(wrapper.find(NavLink)).toHaveLength(1);
  });
})

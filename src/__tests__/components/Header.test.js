import React from 'react';
import Header from '../../components/Header';
import { shallow } from "enzyme";
const clickFn = jest.fn();

const enzymeWrapper = shallow(<Header />);

describe("<Header />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  test("should have heading", () => {
    const text = enzymeWrapper.find('h1');
    expect(text.text()).toBe('UMT Cafe Fusion');
  });
  test("should have username in form state", () => {
    const component = shallow(<Header />);
    component.find('Input #username');
    expect(component).toBeDefined();
  });
  test("should have 2 button in header", () => {
    const component = shallow(<Header />);
    expect(component.find("Button").length).toEqual(2);
  });
  test("should have open modal when click on login button", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('isModalOpen')).toBe(false);
    wrapper.find('#login').simulate('click',{isModalOpen: true});
    expect(wrapper.state('isModalOpen')).toBe(true);
  });
  test("should have 1 navbartoggler in header", () => {
    const component = shallow(<Header />);
    expect(component.find("NavbarToggler").length).toEqual(1);
  });
  test("should have open navbar when click on navbar", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('isNavOpen')).toBe(false);
    wrapper.find('NavbarToggler').simulate('click',{isNavOpen: true});
    expect(wrapper.state('isNavOpen')).toEqual(true);
  });

});
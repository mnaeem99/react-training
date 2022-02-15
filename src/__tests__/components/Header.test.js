import React from 'react';
import Header from '../../components/Header';
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<Header />);

describe("<Header />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  test("should check heading", () => {
    const text = enzymeWrapper.find('h1');
    expect(text.text()).toBe('UMT Cafe Fusion');
  });
  
});
import React from 'react';
import About from '../../components/About';
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<About />);

describe("<About />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
});
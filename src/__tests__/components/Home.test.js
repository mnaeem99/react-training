import React from 'react';
import Home from '../../components/Home';
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<Home />);

describe("<Home />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
});
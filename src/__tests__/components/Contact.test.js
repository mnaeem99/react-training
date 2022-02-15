import React from 'react';
import Contact from '../../components/Contact';
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<Contact />);

describe("<Contact />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
});
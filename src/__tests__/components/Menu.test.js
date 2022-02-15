import React from 'react';
import { shallow } from "enzyme";
import Menu from '../../components/Menu';

const enzymeWrapper = shallow(<Menu />);

describe("<Menu />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
});
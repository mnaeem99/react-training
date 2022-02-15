import React from 'react';
import { shallow } from "enzyme";
import DishesDetail from '../../components/DishesDetail';

const enzymeWrapper = shallow(<DishesDetail />);

describe("<DishDetail />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
});
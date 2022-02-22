import React from 'react';
import { shallow } from "enzyme";
import Footer from '../../components/Footer';
const enzymeWrapper = shallow(<Footer />);

describe("<Footer />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  // test("should render div element", () => {
  //   const component = shallow(<Footer />);
  //   expect(component.getElements()).toMatchSnapshot();
  // });
  
});

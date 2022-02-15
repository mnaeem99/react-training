import React from 'react';
import Header from '../../components/Footer';
import { shallow } from "enzyme";
import Footer from '../../components/Footer';

const enzymeWrapper = shallow(<Footer />);

describe("<Footer />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
});
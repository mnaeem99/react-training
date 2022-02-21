import React from 'react';
import Contact from '../../components/Contact';
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<Contact />);

describe("<Contact />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  it("should have equal value input state", () => {
    const component = shallow(<Contact />);
    const form = component.find('input');
    form.props().onChange({target: {
      name: 'number',
      value: 'myvalue'
    }});
    expect(component.state('input')).toEqual('myvalue');
  });
  it("should have firstname validator", () => {
    const component = shallow(<Contact />);
    component.find('Control.text #firstname');
    expect(component).toBeDefined();
  });
});
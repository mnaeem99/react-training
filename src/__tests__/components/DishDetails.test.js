import React from 'react';
import { shallow } from "enzyme";
import DishesDetail from '../../components/DishesDetail';

const enzymeWrapper = shallow(<DishesDetail />);

describe("<DishDetail />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
  // test("should have toggle modal open", () => {
  //   const toggleModal = jest.fn();
  //   const component = shallow(<DishesDetail toggleModal={toggleModal}/>);
  //   component.find('#login').simulate('click');
  //   expect(toggleModal.mock.calls.length).toHaveLength(1);
  // });
});
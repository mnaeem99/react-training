import React from 'react';
import { shallow } from "enzyme";
import CommentForm from '../../components/CommentForm';

const enzymeWrapper = shallow(<CommentForm />);

describe("<CommentForm/>", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  test("should have 2 button in commentForm", () => {
    expect(enzymeWrapper.find("Button").length).toEqual(2);
  });
  
  test("should have toggle modal open", () => {
    const openModal = jest.fn();
    const wrapper = shallow(<CommentForm onClick={openModal} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(modal => [modal, openModal]);
    wrapper.find("#openModal").simulate("click");
    expect(handleClick.length).toEqual(0);
  });
});
import { shallow, mount } from 'enzyme';
import React from 'react';

import FormModalBody from './FormModalBody';
import SubmitButton from '../forms/SubmitButton';

describe('components/modal/FormModalBody', () => {
  it('renders customizable content', () => {
    const modal = mount(
      <FormModalBody
        buttonText="OK button text"
        onSubmit={() => {}}
        onCancel={() => {}}
      >
        <span className="bodytext">a child element</span>
      </FormModalBody>
    );
    // Has a submit button/
    expect(modal.find(SubmitButton).length).toBe(1);
    expect(modal.find('.bodytext').length).toBe(1);
  });

  it('calls onSubmit when confirm button is pressed', () => {
    const onSubmit = jest.fn();

    const modal = shallow(
      <FormModalBody
        buttonText="OK button text"
        onSubmit={onSubmit}
        onCancel={() => {}}
      >
        Some text
      </FormModalBody>
    );

    modal.find('Form').props().onSubmit({ preventDefault() {} });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when cancel button is pressed', () => {
    const onCancel = jest.fn();

    const modal = shallow(
      <FormModalBody
        buttonText="OK button text"
        onSubmit={() => {}}
        onCancel={onCancel}
      >
        <span className="bodytext">a child element</span>
      </FormModalBody>
    );

    modal.find('CancelButton').simulate('click');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
  render(<NewBoxForm />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
  const addBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBox} />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'blue' } });

  fireEvent.click(getByText('Add Box'));

  expect(addBox).toHaveBeenCalledWith({
    width: '100',
    height: '100',
    backgroundColor: 'blue',
    id: expect.any(Number)
  });
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'blue' } });

  fireEvent.click(getByText('Add Box'));

  expect(queryByText('X')).toBeInTheDocument();
});

it('can remove a box', () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const backgroundColorInput = getByLabelText('Background Color:');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'blue' } });

  fireEvent.click(getByText('Add Box'));

  expect(queryByText('X')).toBeInTheDocument();

  fireEvent.click(getByText('X'));

  expect(queryByText('X')).not.toBeInTheDocument();
});
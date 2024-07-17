import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', () => {
  render(<Box />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls removeBox function when X is clicked', () => {
  const removeBox = jest.fn();
  const { getByText } = render(<Box id={1} width={100} height={100} backgroundColor="blue" removeBox={removeBox} />);
  
  fireEvent.click(getByText('X'));

  expect(removeBox).toHaveBeenCalledWith(1);
});
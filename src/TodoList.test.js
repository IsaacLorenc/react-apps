import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders without crashing', () => {
  render(<TodoList />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test('can add a new todo', () => {
  const { getByPlaceholderText, getByText, getByRole } = render(<TodoList />);
  const input = getByPlaceholderText('New Todo');
  const button = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);

  expect(getByRole('listitem')).toHaveTextContent('Test Todo');
});

test('can remove a todo', () => {
  const { getByPlaceholderText, getByText, getByRole, queryByRole } = render(<TodoList />);
  const input = getByPlaceholderText('New Todo');
  const button = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);

  const removeButton = getByText('X');
  fireEvent.click(removeButton);

  expect(queryByRole('listitem')).toBeNull();
});
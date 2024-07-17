import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test('can submit form and call addTodo', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NewTodoForm addTodo={addTodoMock} />);
  const input = getByPlaceholderText('New Todo');
  const button = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);

  expect(addTodoMock).toHaveBeenCalledWith('Test Todo');
});
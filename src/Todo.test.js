import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders without crashing', () => {
  render(<Todo id={1} task="Test Todo" removeTodo={() => {}} editTodo={() => {}} />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<Todo id={1} task="Test Todo" removeTodo={() => {}} editTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test('can remove todo', () => {
  const removeTodoMock = jest.fn();
  const { getByText } = render(<Todo id={1} task="Test Todo" removeTodo={removeTodoMock} editTodo={() => {}} />);
  const removeButton = getByText('X');

  fireEvent.click(removeButton);

  expect(removeTodoMock).toHaveBeenCalledWith(1);
});
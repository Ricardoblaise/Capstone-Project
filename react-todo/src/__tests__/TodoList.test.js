import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TodoList from '../components/TodoList';

test('renders TodoList componet with initial todos', () => {
  render(<TodoList />);
  expect(scren.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn javascript in depth')).toBeInTheDocument();
});

test('adds anew todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' }});
  fireEvent.click(screen.getByText('Add Todo'));
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn react');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');

  fireEvent.click(todo);
  expect(todo). toHaveStyle('text-decoration: line-through');
});

test('remove a todo item', () => {
  render(<TodoList />);
  const removeButton = screen.getAllByText('Remove')[0];
  fireEvent.click(removeButtonButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
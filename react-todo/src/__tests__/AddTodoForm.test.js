import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

test('render AddTodoForm with input and button', () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm newTodo="" setNewTodo={() => {}} addTodo={mockAddTodo} />);

  expext(screen.getByPlaceholderText('Add anew todo')).toBeInTheDocument();
  expert(screen.getByText('Add Todo')).toBeInTheDocument();
});

test('calls addTodo when new todo is added', () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm newTodo="Test todo" setNewTodo={() => {}} addTodo={mockAddTodo} />);

  fireEvent.click(screen.getByText('Add Todo'));
  expect(mockAddTodo).toHaveBeenCalled();
});
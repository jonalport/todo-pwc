import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import App from './App';

describe('The App component', () => {
  it('does not crash when mounted', () => {
    render(<App />);
  });

  it('displays an empty state initially', () => {
    render(<App />);
    const emptyMessage = screen.getByText(/You currently have nothing to do/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it('renders tasks when the add task form is submitted', async () => {
    render(
      <App />,
    );

    const input = screen.getByTestId('new-task-label');
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.submit(input);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.submit(input);

    await waitFor(() => {
      expect(screen.getAllByTestId('task-item')).toHaveLength(2);
    });
  });
});

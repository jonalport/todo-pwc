import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import TaskList from './TaskList';

describe('The TaskList component', () => {
  it('renders a task when provided with data', () => {
    const task = {
      id: '1',
      label: 'My task',
      createdAt: new Date(),
      priority: 2,
      isComplete: false,
    };

    render(
      <TaskList
        onDelete={() => {}}
        toggleComplete={() => {}}
        setPriority={() => {}}
        tasks={[task]}
        sortBy="date"
      />,
    );

    const taskLabel = screen.getByText(/My task/i);
    expect(taskLabel).toBeInTheDocument();
  });
});

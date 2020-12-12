import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => (
  <div className="TaskList">
    <ul className="TaskList__list">
      {props.tasks.map((task) => (
        <li
          className="TaskList__item"
          key={task.id}
          data-testid="task-item"
        >
          <Task
            id={task.id}
            label={task.label}
            isComplete={task.isComplete}
            priority={task.priority}
            toggleComplete={props.toggleComplete}
            onDelete={props.onDelete}
            setPriority={props.setPriority}
          />
        </li>
      ))}
    </ul>
  </div>
);

TaskList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  setPriority: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    isComplete: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  })).isRequired,
};

export default TaskList;

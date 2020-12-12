/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH } from '../lib/helpers';
import './Task.css';

const Task = (props) => {
  const toggleComplete = () => {
    props.toggleComplete(props.id);
  };

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const getPriorityClassName = (priority) => {
    let className = 'Task__priority';

    if (props.priority === priority) {
      className += ' Task__priority--selected';
    }

    return className;
  };

  const setPriority = (priority) => () => {
    props.setPriority(props.id, priority);
  };

  return (
    <div className="Task">
      <span
        role="button"
        tabIndex={0}
        className="Task__complete"
        onClick={toggleComplete}
      >
        <FontAwesomeIcon
          color={props.isComplete ? '#006400' : '#999'}
          icon={props.isComplete ? faCheckSquare : faSquare}
          size="lg"
        />
      </span>

      <span className="Task__label">
        {props.label}
      </span>

      <span
        role="button"
        tabIndex={0}
        className={getPriorityClassName(PRIORITY_LOW)}
        onClick={setPriority(PRIORITY_LOW)}
      >
        low
      </span>

      <span
        role="button"
        tabIndex={0}
        className={getPriorityClassName(PRIORITY_NORMAL)}
        onClick={setPriority(PRIORITY_NORMAL)}
      >
        med
      </span>

      <span
        role="button"
        tabIndex={0}
        className={getPriorityClassName(PRIORITY_HIGH)}
        onClick={setPriority(PRIORITY_HIGH)}
      >
        high
      </span>

      <span
        role="button"
        tabIndex={0}
        className="Task__delete"
        onClick={handleDelete}
        data-testid={`delete-task-${props.id}`}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          size="lg"
        />
      </span>
    </div>
  );
};

Task.propTypes = {
  onDelete: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  setPriority: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;

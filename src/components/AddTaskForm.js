import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTask } from '../lib/helpers';
import './AddTaskForm.css';

const AddTaskForm = (props) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const label = value.trim();

    if (label) {
      const task = createTask(label);
      props.addTask(task);
      setValue('');
    }
  };

  return (
    <div className="AddTaskForm">
      <form onSubmit={onFormSubmit} className="AddTaskForm__form">
        <input
          name="label"
          className="AddTaskForm__input"
          value={value}
          onChange={onChange}
          placeholder="Type here to add a new task, hit enter when done..."
          maxLength="75"
          data-testid="new-task-label"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTaskForm;

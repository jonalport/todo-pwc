import React from 'react';
import PropTypes from 'prop-types';
import './Count.css';

const Count = (props) => {
  const numTasks = props.tasks.length;
  const numCompletedTasks = props.tasks.filter((t) => t.isComplete).length;

  return (
    <div className="Count">
      <div>
        <span className="Count__num">{numCompletedTasks}</span>

        <span className="Count__of">/</span>

        <span className="Count__num">{numTasks}</span>
      </div>

      <div className="Count__label">complete</div>
    </div>
  );
};

Count.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    isComplete: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  })).isRequired,
};

export default Count;

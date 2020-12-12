/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import './Sorter.css';

const Sorter = (props) => {
  const setSortBy = (sortBy) => () => {
    props.setSortBy(sortBy);
  };

  const getSortByClassName = (sortBy) => {
    let className = 'Sorter__sortBy';

    if (props.sortBy === sortBy) {
      className += ' Sorter__sortBy--selected';
    }

    return className;
  };

  return (
    <div className="Sorter">
      <span className="Sorter__col">
        <span className="Sorter__label">Sort by</span>
      </span>

      <span className="Sorter__col">
        <span
          role="button"
          tabIndex={0}
          onClick={setSortBy('date')}
          className={getSortByClassName('date')}
        >
          Created
        </span>
      </span>

      <span className="Sorter__col">
        <span
          role="button"
          tabIndex={0}
          onClick={setSortBy('priority')}
          className={getSortByClassName('priority')}
        >
          Priority
        </span>
      </span>

      <span className="Sorter__col">
        <span
          role="button"
          tabIndex={0}
          onClick={setSortBy('name')}
          className={getSortByClassName('name')}
        >
          Name
        </span>
      </span>
    </div>
  );
};

Sorter.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default Sorter;

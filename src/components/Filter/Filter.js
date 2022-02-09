import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filterValue, change }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.filter_input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filterValue}
        onChange={change}
      />
    </label>
  );
};
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;

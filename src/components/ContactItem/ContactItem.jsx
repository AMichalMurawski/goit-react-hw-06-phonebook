import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  
  return (
    <>
      <p className={css.contact}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.button}
        type="button"
      >
        Delete
      </button>
    </>
  );
}


ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
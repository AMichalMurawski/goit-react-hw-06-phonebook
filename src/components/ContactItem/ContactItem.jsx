import React from 'react';
import css from './ContactItem.module.css';

export function ContactItem() {

  return (
    <li className={css.item} key={1}>
      <p className={css.contact}>
        name: number
      </p>
      <button
        className={css.button}
        type="button"
        // onClick={}
      >
        Delete
      </button>
    </li>
  );
}

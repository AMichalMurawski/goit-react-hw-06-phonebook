import css from './ContactList.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getFilterContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.includes(filter))
}

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getFilterContacts(contacts, filter)

  return (
    <ul className={css.list}>
    {!!visibleContacts && visibleContacts.map(contact => (
      <li className={css.item} key={contact.id}>
        <p className={css.contact}>
          {contact.name}: {contact.number}
        </p>
        <button
          className={css.button}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
    </ul>
  )
}


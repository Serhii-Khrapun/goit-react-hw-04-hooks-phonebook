import React from 'react';
import styles from './ContactItem.module.css';
const ContactItem = ({ contact, onDelete }) => {
  return (
    <li key={contact.id} className={styles.list_item}>
      <span>
        {contact.name} {contact.number}
      </span>
      <button
        className={styles.list_btn}
        type="button"
        onClick={() => {
          onDelete(contact);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

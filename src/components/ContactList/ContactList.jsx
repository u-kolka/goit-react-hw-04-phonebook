import React from 'react';
import PropTypes from "prop-types";
import ContactListItem from './ContactListItem'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(item =>
        <ContactListItem key={item.id} name={item.name} number={item.number} onDeleteContact={() => onDeleteContact(item.id)} />)}
    </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
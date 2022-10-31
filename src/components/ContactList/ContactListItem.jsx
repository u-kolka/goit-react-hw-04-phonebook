import React from 'react';
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

const ContactListItem = ({ name, number, onDeleteContact } ) => {
    return (
        <li className={css.contact__item}>
            <p>{name}: {number}</p>
            <button className={css.contact__btn} onClick={() => onDeleteContact()}>Удалить</button>
        </li>
    );
};

ContactListItem.propTypes = {
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
}


export default ContactListItem;
import { useState } from "react";
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import css from './ContactForm.module.css'

function ContactForm({ onFormSubmit }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const contact = {
        name,
        number,
    }

    const nameInputId = nanoid(7);
    const numberInputId = nanoid(7);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'name') {
            setName(value)
        }
        if (name === 'number') {
            setNumber(value)
        }
    };

    const handleSabmit = event => {
        event.preventDefault();
        onFormSubmit(contact)
        reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <form onSubmit={handleSabmit}>
            
        <label className={css.form__label} htmlFor={nameInputId}> Name
          <input onChange={handleChange} 
                type="text"
                name="name"
                value={name}
                id={nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
      />
        </label>
        <label className={css.form__label} htmlFor={numberInputId}> Number
            <input onChange={handleChange}
                type="tel"
                name="number"
                value={number}
                id={numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                ></input>
        </label>
        <button className={css.form__btn} type='submit'>Add contact</button>
      </form>
    )
}
ContactForm.propTypes = {
 onFormSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
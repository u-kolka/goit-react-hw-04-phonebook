import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

class ContactForm extends Component {
      
    state = {
    name: '',
    number: '',
    };

    nameInputId = nanoid(7);
    numberInputId = nanoid(7);

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    };
  
    handleSabmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    };

    
    render() {

    return (
        <form onSubmit={this.handleSabmit}>
            
        <label className={css.form__label} htmlFor={this.nameInputId}> Name
          <input onChange={this.handleChange} 
                type="text"
                name="name"
                value={this.state.name}
                id={this.nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
      />
        </label>
        <label className={css.form__label} htmlFor={this.numberInputId}> Number
            <input onChange={this.handleChange}
                type="tel"
                name="number"
                value={this.state.number}
                id={this.numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                ></input>
        </label>
        <button className={css.form__btn} type='submit'>Add contact</button>
      </form>
    )}
}
ContactForm.propTypes = {
 onFormSubmit: PropTypes.func.isRequired,
}


export default ContactForm;
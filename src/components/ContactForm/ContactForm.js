import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';


class ContactForm extends Component {
    inputNameId = nanoid();
    inputPhoneId = nanoid();
        state = {
        name: '',
        number: '',
        };

    static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    };
    
    handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };

    reset = () => {
    this.setState({ name: '', number: '' });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(!this.state.name, !this.state.number);
        this.props.onSubmit(this.state);
        this.setState({
        name: '',
        number: '',
        });
    this.reset();
    };


    render() {

        const { name, number } = this.state;
        return (
            <form className={s.section}
                onSubmit={this.handleSubmit}>
                <label className={s.section_label}
                    htmlFor={this.inputNameId}>Name</label>
                <input className={s.section_input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.handleChange}
                    id={this.inputNameId}
                    value={name}
                    required
                />
                <label className={s.section_label}
                    htmlFor={this.inputPhoneId}>Number</label>
                <input className={s.section_input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.handleChange}
                    id={this.inputPhoneId}
                    value={number}
                    required
                />
                <button
                    className={s.section_btn}
                    type="submit">Add contact</button>
            </form>
        )
    }
};

export default ContactForm;


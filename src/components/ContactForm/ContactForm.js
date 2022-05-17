import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';


export class ContactForm extends Component {

    state = {
        name: '',
        // id: nanoid(),
        number: '',
    };
    static propTypes = {
        onSubmitForm: PropTypes.func.isRequired,
        array: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    handleChangeName = e => {
        this.setState({ name: e.currentTarget.value });
    };

    handleChangeNumber = e => {
        this.setState({ number: e.currentTarget.value });
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        console.log(!this.state.name, !this.state.number);
const sameName = this.props.array.find(arr => arr.name === name);
    if (sameName) {
        return alert(`${name} is already in contacts`);
        }
        const nameObj = {
        id: nanoid(),
        name: name,
        number: number,
        };
        this.props.onSubmit(nameObj);
        this.reset();
    };


    render() {
        return (
            <>
                <form className={s.section}
                    // onSubmit={this.handleSubmit}
                >
                    <label className={s.section_label}>Name</label>
                    <input
                        className={s.section_input}
                        onChange={this.handleChangeName}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label className={s.section_label}>Number</label>
                    <input
                        className={s.section_input}
                        onChange={this.handleChangeNumber}
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button
                        className={s.section_btn}
                        type="submit" onClick={this.handleSubmit}>Add contact</button>
                </form></>
        );
    }
};



export default ContactForm;
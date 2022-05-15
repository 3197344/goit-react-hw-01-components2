import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';


export class ContactForm extends Component {
    // inputNameId = nanoid();
    // inputPhoneId = nanoid();
        state = {
            name: '',
            id: nanoid(),
        number: '',
        };

    // static propTypes = {
    // handleSubmit: PropTypes.func.isRequired,
    // };
    
    handleChangeName = e => {
    // const { name, value } = e.target;
    // this.setState({ [name]: value });
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
        console.log(!this.state.name, !this.state.number);

        // this.setState({
        // name: '',
        // number: '',
        // });
    this.props.onSubmit(this.state);
    this.reset();
    };


    render() {
        return (
            <>
                <form className={s.section}
                    onSubmit={this.handleSubmit}>
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
                        type="submit">Add contact</button>
                </form></>
        );
    }
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};


export default ContactForm;
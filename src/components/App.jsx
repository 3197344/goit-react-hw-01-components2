import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (e) => {
  e.preventDefault();
  this.addNewContact();
    this.deleteContact();
  }
delContact = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };

  deleteContact = () => {
    this.setState(() => ({
      filter: '',
      name: '',
      number: '',
    }
    ))
  }
  filterContacts() {
    if (this.state.filter === '') {
      return this.state.contacts;
    }
    const filteredArray = this.state.contacts.filter((item) => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return filteredArray;
  }

  addNewContact = () => {
    const { contacts, name, number } = this.state;
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`Sorry, ${name} already exists`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    
    return (
      <div >
        <Section title="Phonebook">
          <ContactForm
            options={this.state}
            onChangeInput={this.handleChange}
            onSubmitForm={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter
            options={this.state}
            onChangeInput={this.handleChange} />

          <ContactList
          contacts={this.filterContacts()}
          delContact={this.delContact}/>
        </Section>
      </div>
    );
  }
}

export default App;
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
}

delContact = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };

  addNewContact = ({ id, name, number }) => {
    const { contacts} = this.state;
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`Sorry, ${name} already exists`);
      return;
    }

  this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id, name, number }] };
    });
  };
  

onFilter = filter => {
    console.log('filter', filter);
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div >
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.addNewContact} />
        </Section>

        <Section title="Contacts">
          <Filter
            options={this.state}
            filter={filter} onFilter={this.onFilter}
            onChangeInput={this.handleChange}
          />

          <ContactList
          
            contacts={visibleContacts}
          delContact={this.delContact}/>
        </Section>
      </div>
    );
  }
}

export default App;
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { AppContainer, AppTitle } from "./App.styled";

// {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
// {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
// {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
// {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
    ) {
      alert(`${name} is already in contacts`)
    } else {
      setContacts(prevContacts =>[contact, ...prevContacts])
    }
  };

  const filterInput = e => {
    setFilter(e.target.value)
  };

  const findContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact =>
        contact.id !== id)
    );
  };

    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={formSubmit} />

        <AppTitle>Contacts</AppTitle>
        <Filter
          filter={filter}
          filterInput={filterInput}
        />

        <ContactList
          contacts={findContact()}
          deleteContact={deleteContact}
        />
      </AppContainer>
    );
};

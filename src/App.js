import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactName = () => {
    return contacts.map(contact => contact.name.toLowerCase().trim());
  };
  const formSubmitHandler = data => {
    if (contactName().includes(data.name.toLowerCase().trim())) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prev => [data, ...prev]);
    }
  };

  const searchFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  const searchInputChange = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = data => {
    setContacts(prev => prev.filter(prev => prev.id !== data.id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={formSubmitHandler} />
      <h2>Contacts list</h2>
      <Filter filterValue={filter} change={searchInputChange} />
      <ContactList contacts={searchFilter()} onDelete={deleteContact} />
    </div>
  );
};
export default App;

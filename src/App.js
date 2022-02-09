import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
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

  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

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

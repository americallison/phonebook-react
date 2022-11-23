import React, { useState, useContext, createContext } from 'react';


import SearchResults from './Contacts/Search.js';
import ContactList from './Contacts/Lists.js';
import { getContacts } from '../utils/firestore-helper.js';

export default function Container(props) {
  const [searching, setSearching] = useState({
    isSearching: false,
    val: '',
  });

  const [contacts, setContacts] = useState([]);

  React.useEffect(() => {
    return async () => {
      const data = await getContacts();
      setContacts(data);
    };
  }, [setContacts]);

  const [displayContacts, setDisplayContact] = useState(contacts);

  function searchContactsByName(e) {
    const value = e.target.value;

    const filteredResult = [...contacts].filter((contact) => {
      const jb = contact.name.toLowerCase().includes(value.toLowerCase());
      return jb;
    });

    console.log({ filteredResult });

    setDisplayContact(filteredResult);

    // console.log({ contact2: contacts });

    setSearching({
      isSearching: true,
      val: value,
    });
  }

  // useEffect(() => {
  //   setContacts(contacts);
  // }, [contacts]);

  return (
    <div className="container">
      <h2 id="project-title">Phonebook App</h2>

      <div className="search-container">
        <input onChange={searchContactsByName} type="text" />
      </div>

      {searching.isSearching && searching.val.length > 0 ? (
        <SearchResults contacts={displayContacts} />
      ) : (
        <ContactList contactsArray={contacts} />
      )}
    </div>
  );
}

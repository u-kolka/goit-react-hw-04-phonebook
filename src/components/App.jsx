import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';



// class App extends React.Component {

//   state = {
//     contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
//   };

//     componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
    
//     if (parsedContacts) {
//       this.setState({contacts: parsedContacts})
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     newContact.id = nanoid(7);
//     for (const contact of this.state.contacts) {
//       if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {

//         alert(newContact.name + ' is already in contacts')
//         return
//       }
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   }

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }

//   render() {

//     const { filter } = this.state;
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onFormSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter}  />
//         <ContactList contacts={filteredContacts}  onDeleteContact={this.deleteContact}/>
//       </div>
//     )
//   };
// }

// export default App;

export const App = () => {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ]);
  const [filterField, setFilterField] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const addContact = newContact => {
    newContact.id = nanoid(7);
    if (newContact.name === '') {
      return
    }

    for (let contact of contacts) {
      if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
        return toast.info(newContact.name + ' is already in contacts!', {
          icon: "🚀"
        });
      }
    }
    setContacts(prevContacts => ([newContact, ...prevContacts]));
  }

    const deleteContact = contactId => {
      setContacts(prevContacts => (
        prevContacts.filter(contact => contact.id !== contactId)
      ));
    };

    const changeFilterField = event => {
      setFilterField(event.currentTarget.value);
    }
  
  const normalizedFilter = filterField.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filterField} onChange={changeFilterField} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
        <ToastContainer autoClose={3000} theme={"light"} icon={false} />
      </div>
    )
}

export default App;

import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';


class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  
  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

  };
 

  render() {
    return (
     <div>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.formSubmitHandler}/>
  
  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  {/* <ContactList ... /> */}
</div>
  )
  }
  
}

export default App;

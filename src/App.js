import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    name: ''
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
  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={ this.formSubmitHandler}/> 
        
      
        
    </div>
  )
  }
  
}

export default App;

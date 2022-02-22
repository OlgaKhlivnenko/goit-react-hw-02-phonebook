import React, { Component} from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };
 
  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <div className="App">
        {/* <Form onSubmit={ this.formSubmitHandler}/>  */}
        <h1>Phonebook</h1>
        <form>
          <label>Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label> 
        <button type='submit'>Add contact</button>
        </form>
        
    </div>
  )
  }
  
}

export default App;

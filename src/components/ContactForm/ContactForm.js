import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({[name]: value,});
  };

  handelSubmit = evt => {
    evt.preventDefault();
    
    this.props.onSubmit(this.state);

    this.reset()
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      
      <form onSubmit={this.handelSubmit}>
        <label>Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
         <label>Number
            <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </label>
        <button type='submit'>Add contact</button>
      </form>
    )
  }
}
export default ContactForm;
import React, { Component } from 'react';

class Form extends Component{
  state = {
    name: '',
    nick: '',
    experience: 'junior',
    licence: 'false',
    };

     handleChange = event => {
    const { name, value } = event.currentTarget;
    
    console.log(name);
    console.log(value);
    this.setState({ [name]: value })
    };

     handelSubmit = event => {
        event.preventDefault();
         console.log(this.state);
         this.props.onSubmit(this.state);
         this.reset();
    };
    handelLicenceChange = event  => {
      console.log(event.currentTarget.checked)

      this.setState({licence: event.currentTarget.checked})
    }
    reset = () => {
        this.setState({
            name: '',
            nick: ''
        });
    }
    render() {
        return (
        <form onSubmit={this.handelSubmit}>
          <label >
            Name <input type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
           />
          </label>
           <label >
            Nick <input type="text"
              name="nick"
              value={this.state.nick}
              onChange={this.handleChange}
           />
            </label>
            <p>your level</p>
            <label><input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />junior
            </label>
            <label>
              <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
              />middle
            </label>
              <label>
                <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />senior
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="licence"
                checked={this.state.licence}
                onChange={this.handelLicenceChange}
              />Agree licence
            </label>
            
          <button type='submit' disabled={!this.state.licence}>Sent</button>
        </form>)
    };
}
export default Form;
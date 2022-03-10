import React, { Component } from 'react';

class Form extends Component{
  state = {
    name: '',
    // nick: '',
    // experience: 'junior',
    // licence: 'false',
    };

  handleChange = event => {
       this.setState({ name: event.currentTarget.value });
    };

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    
    this.setState({message:''})
    };
    // handelLicenceChange = event  => {
    //   console.log(event.currentTarget.checked)

    //   this.setState({licence: event.currentTarget.checked})
    // }
    reset = () => {
        this.setState({
            name: '',
            nick: ''
        });
  }
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
        <button type='submit'>Add contact</button>
        </form>
    )
  }
    // render() {
    //     return (
          
    //     // <form onSubmit={this.handelSubmit}>
    //     //   <label >
    //     //     Name <input type="text"
    //     //       name="name"
    //     //       value={this.state.name}
    //     //       onChange={this.handleChange}
    //     //    />
    //     //   </label>
    //        {/* <label >
    //         Nick <input type="text"
    //           name="nick"
    //           value={this.state.nick}
    //           onChange={this.handleChange}
    //        />
    //         </label>
    //         <p>your level</p>
    //         <label><input
    //           type="radio"
    //           name="experience"
    //           value="junior"
    //           onChange={this.handleChange}
    //           checked={this.state.experience === 'junior'}
    //         />junior
    //         </label>
    //         <label>
    //           <input
    //           type="radio"
    //           name="experience"
    //           value="middle"
    //           onChange={this.handleChange}
    //           checked={this.state.experience === 'middle'}
    //           />middle
    //         </label>
    //           <label>
    //             <input
    //           type="radio"
    //           name="experience"
    //           value="senior"
    //           onChange={this.handleChange}
    //           checked={this.state.experience === 'senior'}
    //         />senior
    //         </label>
    //         <br />
    //         <label>
    //           <input
    //             type="checkbox"
    //             name="licence"
    //             checked={this.state.licence}
    //             onChange={this.handelLicenceChange}
    //           />Agree licence
    //         </label> */}
            
    //       {/* <button type='submit'>Sent</button> */}
    //     </form>)
    // };
}
export default Form;
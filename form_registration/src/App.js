import React, { Component } from 'react';
import AddInput from './AddInput';
import './index.css';
class App extends Component {
  state = {
    inputs: [],
    title: '',
    description: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  addinput = form => {
    form.id = Math.random();
    let forms = [...this.state.inputs, form];
    this.setState({
      inputs: forms
    });
  };
  deleteinput = id => {
    let forms = this.state.inputs.filter(form => {
      return form.id !== id;
    });
    this.setState({
      inputs: forms
    });
  };

  handleTitle = e => {
    e.preventDefault();
    e.target.hidden = 'true';
    this.setState({
      title: this.titleInput.value
    });
  };

  handleDesc = e => {
    e.preventDefault();
    e.target.hidden = 'true';
    this.setState({
      description: this.descInput.value
    });
  };

  render() {
    const title = this.state.title;
    const description = this.state.description;
    console.log(this.state);
    return (
      <div className='App container'>
        <div className='card'>
          <label htmlFor='question'>Title:{title}</label>
          <form onSubmit={this.handleTitle}>
            <input
              ref={input => (this.titleInput = input)}
              id='title'
              required
            />
            <button type='submit' className='button'>
              <i class='fas fa-check'></i>
            </button>
          </form>
          <br />
          <label htmlFor='question'>Description:{description}</label>

          <form onSubmit={this.handleDesc}>
            <input
              id='description'
              ref={input => (this.descInput = input)}
              required
            />
            <button type='submit' className='button'>
              <i class='fas fa-check'></i>
            </button>
          </form>
        </div>

        <AddInput
          addinput={this.addinput}
          inputs={this.state.inputs}
          deleteinput={this.deleteinput}
        />
      </div>
    );
  }
}

export default App;

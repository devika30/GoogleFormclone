import React, { Component } from 'react';
import AddInput from './AddInput';
import './index.css';

class App extends Component {
  state = {
    inputs: [],
    title: '',
    description: ''
  };

  addinput = form => {
    form.id = Math.random();
    let forms = [...this.state.inputs, form];
    this.setState({
      inputs: forms
    });
    console.log(this.state);
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
    return (
      <div className='App container'>
        <div className='header-card '>
          <div className='header-card-section'>
            <label htmlFor='question' className='title-label'>
              {title}
            </label>
            <form onSubmit={this.handleTitle}>
              <input
                ref={input => (this.titleInput = input)}
                id='title'
                placeholder='Form Title'
                required
              />
              <button type='submit' className='button'>
                <i className='fas fa-check' style={{ color: '#fff' }}></i>
              </button>
            </form>
            <br />
            <label htmlFor='question' className='description-label'>
              {description}
            </label>

            <form onSubmit={this.handleDesc}>
              <input
                id='description'
                ref={input => (this.descInput = input)}
                placeholder='Form Description'
                required
              />
              <button type='submit' className='button'>
                <i className='fas fa-check' style={{ color: '#fff' }}></i>
              </button>
            </form>
          </div>
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

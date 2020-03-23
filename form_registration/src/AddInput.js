import React, { Component, Fragment } from 'react';
import { Switch, Case, Default } from 'react-if';
import AddRadio from './AddRadio';
import AddCheckbox from './AddCheckbox';
import AddDropdown from './AddDropdown';
class AddInput extends Component {
  state = {
    type: '',
    question: '',
    description_input: '',
    required: false,
    options: []
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  addoption = e => {
    e.preventDefault();
    var option = { value: this.dropdownOption.value };
    option.id = Math.random();
    let choices = [...this.state.options, option];
    this.setState(
      {
        options: choices
      },
      () => console.log(this.state)
    );
    this.dropdownOption.value = ""
  };

  deleteoption = id => {
    let choices = this.state.options.filter(option => {
      return option.id !== id;
    });
    this.setState({
      options: choices
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addinput(this.state);
    this.setState({
      type: '',
      question: '',
      description_input: '',
      required: true    });
  };

  handleCheck = () => {
    this.setState({ required: !this.state.required }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { inputs, deleteinput } = this.props;
    const optionList = this.state.options.map(option => {
      return (
        <Fragment key={option.id}>
          <option value={option.value}>{option.value}</option>
        </Fragment>
      );
    });

    const checkboxList=this.state.options.map(option=>{
      return(
        <div key={option.id}>
           <input type="checkbox" id={option.value} name={option.value} value={option.value}/>
           <label htmlfor={option.value}>{option.value}</label>
           <button
                  className='btn btn-danger'
                  onClick={() => {
                    this.deleteoption(option.id);
                  }}
                  data-toggle='tooltip'
                  data-placement='bottom'
                  title='Delete Option'
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
        </div>
      )
    })

    const radioList=this.state.options.map(option=>{
      return(
        <div key={option.id}>
           <input type="radio" id={option.value} name={option.value} value={option.value}/>
           <label htmlfor={option.value}>{option.value}</label>
           <button
                  className='btn btn-danger'
                  onClick={() => {
                    this.deleteoption(option.id);
                  }}
                  data-toggle='tooltip'
                  data-placement='bottom'
                  title='Delete Option'
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
        </div>
      )
    })




    const inputList = inputs.map(input => {
      return (
        <div key={input.id} className='q-card'>
          <div className='form-group'>
            <label htmlFor='usr' className='question-label'>
              {input.question}
            </label>

            <label htmlFor='usr' className='description-label'>
              {input.description_input}
            </label>
            <div className='row'>
              <div className='col-10'>
                <Switch>
                  <Case condition={input.type === 'textarea'}>
                    <textarea rows='4' cols='50' />
                  </Case>
                  <Case condition={input.type === 'mcq'}>
                  <input type="radio" id={input.options[0].value} name={input.options[0].value} value={input.options[0].value}/>
                   <label htmlfor={input.options[0].value}>{input.options[0].value}</label>
            </Case>
                  <Case condition={input.type === 'checkbox'}>
                    <AddCheckbox 
                      options={this.state.options}
                    />
                  </Case>

                  <Case condition={input.type === 'dropdown'}>
                    <AddDropdown options={this.state.options} />
                  </Case>

                  <Default>
                    <input type={input.type} className='q-input' id='usr' />
                  </Default>
                </Switch>
              </div>
              <div className='col-2'>
                <button
                  className='btn btn-danger d-inline'
                  onClick={() => {
                    deleteinput(input.id);
                  }}
                  data-toggle='tooltip'
                  data-placement='bottom'
                  title='Delete Question'
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        {inputList}
        <div className='q-card q-card1'>
        <form onSubmit={this.handleSubmit} className='container '>
          <div className='row'>
            <div className='form-group col-6'>
              {/* <label htmlFor='question'>Question:</label> */}
              <input
                id='question'
                onChange={this.handleChange}
                value={this.state.question}
                placeholder='Question'
                required
              />
              {/* <label htmlFor='description'>Description:</label> */}
              <input
                id='description_input'
                onChange={this.handleChange}
                placeholder='Description'
                value={this.state.description_input}
              />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='type' id='type'>
                Type
              </label>
              <select
                className='form-control'
                id='type'
                onChange={this.handleChange}
                required
              >
                <option></option>
                <option value='text'>Short Answer</option>
                <option value='textarea'>Paragraph</option>
                <option value='email'>Email</option>
                <option value='number'>Number</option>
                <option value='date'>Date</option>
                <option value='mcq'>Multiple Choice</option>
                <option value='checkbox'>CheckBox</option>
                <option value='dropdown'>Dropdown</option>
              </select>
            </div>
          </div>

          <hr />
          <div className='q-foot'>
            <span id='required-check'>
              <input
                type='checkbox'
                onChange={this.handleCheck}
                defaultChecked={this.state.required}
                className='mr-2'
              />
              Required
            </span>

            <button
              className='button-add'
              data-toggle='tooltip'
              data-placement='bottom'
              title='Add Question'
            >
              <i className='fas fa-plus'></i>&nbsp;Add
            </button>
          </div>
        </form>
        <div className='row'>
          <div className='col-12'>
            {this.state.type === 'dropdown' ? (
                <Fragment>
                   <select id='dropdown-option' className='form-control mb-4 ml-3'>
                 <option value=''>Select an option</option>
                 {optionList}
               </select>
              <form onSubmit={this.addoption}>
                <div className='form-group col-6'>
                  <input
                    className='form-control'
                    id='options'
                    ref={input => (this.dropdownOption = input)}
                    placeholder='Add options to dropdown'
                  />
                  <button className='btn btn-primary' type='submit'>
                    Add
                  </button>
                </div>
              </form>
                </Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            {this.state.type === 'checkbox' ? (
              <Fragment>
                {checkboxList}
              <form onSubmit={this.addoption}>
                <div className='form-group col-6'>
                  <input
                    className='form-control'
                    id='options'
                    ref={input => (this.dropdownOption = input)}
                    placeholder='Add options to checkbox'
                  />
                  <button className='btn btn-primary' type='submit'>
                    Add
                  </button>
                </div>
              </form>
              </Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            {this.state.type === 'mcq' ? (
            <Fragment>
              {radioList}
                <form onSubmit={this.addoption}>
                <div className='form-group col-6'>
                  <input
                    className='form-control'
                    id='options'
                    ref={input => (this.dropdownOption = input)}
                    placeholder='Add options to checkbox'
                  />
                  <button className='btn btn-primary' type='submit'>
                    Add
                  </button>
                </div>
              </form>
            </Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default AddInput;

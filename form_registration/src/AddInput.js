import React, { Component, Fragment } from 'react';
import { Switch, Case, Default } from 'react-if';
// import AddOption from './AddOption';

class AddInput extends Component {
  state = {
    type: '',
    question: '',
    description_input: '',
    required: false
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addinput(this.state);
    this.setState({
      type: '',
      question: '',
      description_input: '',
      required: true
    });
  };

  handleCheck = () => {
    this.setState({ required: !this.state.required }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { inputs, deleteinput } = this.props;
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
                  <Case condition={input.type === 'check_box'}>
                    {/* <AddOption /> */}
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
        <form onSubmit={this.handleSubmit} className='container q-card q-card1'>
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
                <option value='check_box'>Check-Box</option>
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
              <i class='fas fa-plus'></i>&nbsp;Add
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default AddInput;

import React, { Component, Fragment } from 'react';

class AddDropdown extends Component {
  render() {
    const { options } = this.props;
    console.log(options);
    const optionList = options.map(option => {
      return (
        <Fragment key={option.id}>
          <option value={option.value}>{option.value}</option>
        </Fragment>
      );
    });
    return (
      <Fragment>
        <select id='dropdown-option' className='form-control mb-4 ml-3'>
          <option value=''>Select an option</option>
          {optionList}
        </select>
      </Fragment>
    );
  }
}

export default AddDropdown;

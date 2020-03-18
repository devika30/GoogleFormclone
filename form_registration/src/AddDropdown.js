import React,{Component,Fragment} from 'react';

class AddDropdown extends Component{
state={
  name:''
}

handleChange =(e)=>{
  this.setState({
      [e.target.id]:e.target.value
      });
 }

handleSubmit=(e)=>{
  e.preventDefault();
  this.props.addoption(this.state);
  this.setState({
    name:''
  });
}
  render()
  {
    const {options,deleteoption}=this.props;
    console.log(options)
    const optionList=options.map(option=>{
      return(
        <Fragment key={option.id}>
            <option value={option.options}>{option.options}</option>
           
        </Fragment>
      )
    })
    return(
     <Fragment>
          <select id="dropdown-option" className='form-control mb-4 ml-3'>
                <option value="">Select an option</option>
                {optionList}
            </select>
      
     <form onSubmit={this.handleSubmit}>
        <div className="form-group col-6">
        <input className="form-control" id="options" onChange={this.handleChange} placeholder='Add options to dropdown'/>
        <button className="btn btn-primary" type="submit">Add</button>
        </div>
     </form>
     </Fragment>
    )
  }
}

export default AddDropdown;
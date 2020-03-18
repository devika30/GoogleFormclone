import React,{Component,Fragment} from 'react';


class AddRadio extends Component{
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
        <div key={option.id}>
           <input type="radio" id={option.options} name={option.options} value={option.options}/>
           <label htmlfor={option.options}>{option.options}</label>
           <button
                  className='btn btn-danger'
                  onClick={() => {
                    deleteoption(option.id);
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
    return(
     <Fragment>
        {optionList}
     <form onSubmit={this.handleSubmit}>
        <div className="form-group col-6">
        <input className="form-control" id="options" onChange={this.handleChange}/>
        <button className="btn btn-primary" type="submit">Add</button>
        </div>
     </form>
     </Fragment>
    )
  }
}

export default AddRadio;
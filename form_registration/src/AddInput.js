import React,{Component,Fragment} from 'react';
//import AddOption from './AddOption';
//import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Switch, Case, Default } from 'react-if';
// import AddOption from './AddOption';




class AddInput extends Component{
  state={
    type:'',
    question:''
  }
  handleChange =(e)=>{
   this.setState({
       [e.target.id]:e.target.value
       });
  }

  handleSubmit =(e)=>{
      e.preventDefault();
      this.props.addinput(this.state);

  }

  render(){
      const {inputs,deleteinput} = this.props
      console.log(this.props)
      const inputList =  inputs.map(input =>{
        return(
            <div key={input.id} className="ml-3">
                <div className="form-group">
                    <label htmlFor="usr">{input.question}</label>
                   <div className="row">
                       <div className="col-6">
                       <Switch>
                            <Case condition={input.type==='textarea'}>
                            <textarea rows="4" cols="50"/>
                            </Case> 
                            <Case condition={ input.type==='check_box'}>
                             {/* <AddOption /> */}
                            </Case>

                            <Default>
                            <input type={input.type} className="form-control" id="usr"/>
                      </Default>
                          </Switch>
                       </div>
                       <div className="col-6">
                    <button className="btn btn-danger d-inline"  onClick={() => {deleteinput(input.id)}}><i className="fas fa-trash-alt"></i></button>
                    </div>
                   </div>

                </div>
            </div>
        )
    })
    return(
     <Fragment>
         {inputList}
        <form onSubmit={this.handleSubmit} className="container">
        <div className="row">
        <div className="form-group col-6">
          <label htmlFor="question">Question:</label>
           <input className="form-control" id="question" onChange={this.handleChange} value={this.state.question} required/>
           
          </div>
           <div className="form-group col-6">
             <label htmlFor="type">Type</label>
             <select className="form-control" id="type" onChange={this.handleChange}>
               <option></option>
               <option value="text">Text</option>
               <option value="check_box">Check-Box</option>
               <option value="date" >Date</option>
               <option value="number" >Number</option>
               <option value="email" >Email</option>
               <option value="password">Password</option>
               <option value="textarea">TextArea</option>
             </select >
           </div>
        </div>
           <button className="btn btn-primary">Submit</button>
         </form>
     </Fragment>
    )
  }
}

export default AddInput;
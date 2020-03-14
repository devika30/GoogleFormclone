import React,{Component} from 'react';
import AddInput from './AddInput'

class App extends Component{
  state={
    inputs:[],
    title:'',
    description:''
  }
  handleChange =(e)=>{
    this.setState({
        [e.target.id]:e.target.value
        });
   }

  addinput=(form)=>{
    form.id = Math.random();
    let forms = [...this.state.inputs, form];
    this.setState({
      inputs:forms
    });
  }
  deleteinput=(id)=>{
    let forms = this.state.inputs.filter(form => {
      return form.id !== id
    });
    this.setState({
      inputs: forms
    });
  }


  render()
  {
    console.log(this.state)
    return(
      <div className="App container">
         <label htmlFor="question">Title:</label>
      <input  className=" form-control mt-2" id="title" onChange={this.handleChange} value={this.state.title} required/>
      <br/>
      <label htmlFor="question">description:</label>

      <input  className="form-control mt-2" id="description" onChange={this.handleChange} value={this.state.description} required/>

      <AddInput addinput={this.addinput} inputs={this.state.inputs} deleteinput={this.deleteinput}/>
    </div>
    )
  }
}

export default App;

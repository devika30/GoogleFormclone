import React,{Component} from 'react';
import AddInput from './AddInput'

class App extends Component{
  state={
    inputs:[]
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
    return(
      <div className="App container">
      <h1 className="text-center m-4">Form</h1>
      
      <AddInput addinput={this.addinput} inputs={this.state.inputs} deleteinput={this.deleteinput}/>
    </div>
    )
  }
}

export default App;

// import React,{Component,Fragment} from 'react';
// import AddInput from './AddInput';


// class AddOption extends Component{
// state={
//   name:''
// }

// handleChange =(e)=>{
//   this.setState({
//       [e.target.id]:e.target.value
//       });
//  }

// addoption =(choice)=>{
//   choice=Math.random();
//   let choices=[...this.props.state.options,choice]
//   this.setState({
//     options:choices
//   });
// }

// handleSubmit=(e)=>{
//   e.preventDefault();
//   console.log(e.target);
// }
//   render()
//   {
//     console.log(this.state)
//     return(
//      <form onSubmit={this.handleSubmit}>
//         <div className="form-group col-6">
//         <input className="form-control" id="options" onChange={this.handleChange}/>
//         <button className="btn btn-primary" type="submit">Add</button>
//         </div>
//      </form>
//     )
//   }
// }

// export default AddOption;
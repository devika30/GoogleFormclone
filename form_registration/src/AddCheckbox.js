import React,{Component,Fragment} from 'react';


class AddCheckbox extends Component{

  render()
  {
    const {options,deleteoption}=this.props;
    console.log(options)
    const optionList=options.map(option=>{
      return(
        <div key={option.id}>
           <input type="checkbox" id={option.value} name={option.value} value={option.value}/>
           <label htmlfor={option.value}>{option.value}</label>
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
     </Fragment>
    )
  }
}

export default AddCheckbox;
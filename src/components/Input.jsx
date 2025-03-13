


export function Input({id, labelText, type, disabled, value, onChange}){


  return (
    <div className='input-div'>
      <label htmlFor={id}>
        {labelText}
        {':'}
      </label>
      <input type={type} id={id} name={id} value={value} disabled={disabled} onChange={onChange} required/>
    </div>
  )

}

export function CheckBox({id, labelText, disabled, value, onChange}){
  return (
    <div className='checkbox-div'>
      <label htmlFor={id}>
        {labelText}
        {': '}
      </label>
      <input type="checkbox" id={id} name={id} value={value} disabled={disabled} onChange={onChange} required/>
    </div>
  )
}





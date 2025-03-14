


export function Input({id, dataId, name, labelText, type, disabled, value, onChange, }){


  return (
    <div className='input-div'>
      <label htmlFor={id}>
        {labelText}
        {':'}
      </label>
      <input type={type} name={name} id={id} data-id={dataId} value={value} disabled={disabled} onChange={onChange} required/>
    </div>
  )

}






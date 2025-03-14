


export function Input({id, dataId, name, labelText, type, disabled, value, onChange, }){


  return (
    <div className='input-div'>
      <label htmlFor={id}>
        {labelText}
        {':'}
      </label>
      <input id={id} data-id={dataId} value={value} type={type} name={name} disabled={disabled} onChange={onChange} required/>
    </div>
  )

}






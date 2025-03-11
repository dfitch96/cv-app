


export default function Input({id, labelText, type, disabled, value}){

  return (
    <div className='input-div'>
      <label htmlFor={id}>
        {labelText}
        {':'}
      </label>
      <input type={type} id={id} name={id} value={value} disabled={disabled} />
    </div>
  )

}



export function ButtonGroup({disabled, handleEdit, handleSave}){

  return (
    <div className="button-group">
      <button type="button" onClick={handleEdit} disabled={!disabled}>Edit</button>
      <button type="submit" onClick={handleSave} disabled={disabled}>Save</button>
    </div>
  )
}



export function Button({disabled, text}){
  return (
    <div className="button-div">
      <button type="button" disabled={disabled}>{text}</button>
    </div>
  )
}
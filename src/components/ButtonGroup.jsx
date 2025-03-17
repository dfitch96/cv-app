


export function ButtonGroup({disabled, handleEdit, handleSave}){

  return (
    <div className="button-group">
      <button type="button" onClick={handleEdit} disabled={!disabled}>Edit</button>
      <button type="submit" onClick={handleSave} disabled={disabled}>Save</button>
    </div>
  )
}



export function Button({disabled, text, handler, dataId}){
  return (
    <div className="button-div">
      <button data-id={dataId} type="button" disabled={disabled} onClick={handler}>{text}</button>
    </div>
  )
}



export default function ButtonGroup({disabled, handleEdit, handleSave}){

  return (
    <div className="button-group">
      <button type="button" onClick={handleEdit} disabled={!disabled}>Edit</button>
      <button type="submit" onClick={handleSave} disabled={disabled}>Save</button>
    </div>
  )

}
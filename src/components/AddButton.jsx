
import AddIcon from '../assets/add.svg';


export default function AddButton({handler}){
  return (
    <button className="add-btn" onClick={handler}>
      <span>Add Education</span>
      <img src={AddIcon}></img>
    </button>
  )
}
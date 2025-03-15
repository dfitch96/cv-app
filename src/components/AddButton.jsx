
import AddIcon from '../assets/add.svg';


export default function AddButton({text, handler}){
  return (
    <button className="add-btn" onClick={handler}>
      <span>Add {text}</span>
      <img src={AddIcon}></img>
    </button>
  )
}
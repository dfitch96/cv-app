
import CloseIcon from '../assets/close.svg';


export default function DeleteButton({id, handleDelete}){
  return (
    <div className="close-btn">
      <button onClick={handleDelete}>
        <img src={CloseIcon} data-id={id}></img>
      </button>
    </div>
  );
}
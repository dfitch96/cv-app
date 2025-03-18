import DetailsIcon from '../assets/details.svg';


export default function DetailsButton({handler, isCollapsed}){
    
    return (
        <button className="details" onClick={handler} >
            <img src={DetailsIcon} style={{transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}}></img>
        </button>
    )
}
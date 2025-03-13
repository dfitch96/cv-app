
import {Input, CheckBox} from "./Input";
import ButtonGroup from "./ButtonGroup";


export default function EducationCard(){
 
  return (
     <div className="card">
        <h2 className="card-header">Education</h2>
        <form>
          <Input id="education" labelText="Education" type="text"/>
          <Input id="email" labelText="School" type="text"/>
          <Input id="grad-date" labelText="Graduation Date" type="date"/>
          <CheckBox id="enrolled" labelText="Graduated" type="checkbox"/>
          <ButtonGroup/>
        </form>
      </div>
  )
}
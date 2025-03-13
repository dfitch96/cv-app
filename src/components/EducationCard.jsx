
import Input from "./Input";
import ButtonGroup from "./ButtonGroup";


export default function EducationCard(){
 
  return (
     <div className="card">
        <h2 className="card-header">Education</h2>
        <form>
          <Input id="education" labelText="Education" type="text"/>
          <Input id="email" labelText="School" type="text"/>
          <ButtonGroup/>
        </form>
      </div>
  )
}
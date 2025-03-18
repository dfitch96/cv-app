
import { useState } from "react";
import DeleteButton from "./DeleteButton";
import DetailsButton from "./DetailsButton";
import { Input, TextArea } from "./Input";
import {Button, ButtonGroup} from "./ButtonGroup";

export default function SkillsCard({formData, handleInputOnChange, handleAddSkillOnClick, handleSkillOnChange, handleDelete, setCVData, CVData}){

   const [isDisabled, setIsDisabled] = useState(true);
   const[isCollapsed, setIsCollapsed] = useState(true);
  
    function handleEditOnClick(){
      setIsDisabled(false);
    }
  
    function handleSaveOnClick(e){
      e.preventDefault();
      setIsDisabled(true);
      // if this form has already been saved, update it at its current location, otherwise append it to the CVData array
      
    }

    function handleDetailsOnClick(){
      setIsCollapsed(!isCollapsed);
    }

  return (

    <div className="card">
      {!isCollapsed && <DeleteButton id={formData.id} handleDelete={handleDelete} />}
      <h2 className="card-header">{<DetailsButton isCollapsed={isCollapsed} handler={handleDetailsOnClick}/>}Skill</h2>
      {!isCollapsed && 
        <form onSubmit={handleSaveOnClick}>
          <Input id={`name-${formData.id}`} name={'name'} dataId={formData.id} labelText='Skill' type="text" value={formData.name} onChange={handleInputOnChange} disabled={isDisabled}/>
          <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} /> 
        </form>
      
      }
    </div>

  );

}
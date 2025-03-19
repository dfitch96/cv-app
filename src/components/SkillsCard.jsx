
import { useState } from "react";
import DeleteButton from "./DeleteButton";
import DetailsButton from "./DetailsButton";
import { Input, TextArea } from "./Input";
import {Button, ButtonGroup} from "./ButtonGroup";

export default function SkillsCard({formData, handleInputOnChange, handleAddNewSkillOnClick, handleSkillListOnChange, handleDelete, setCVData, CVData}){

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
          <Input id={`category-${formData.id}`} name={'category'} dataId={formData.id} labelText='Skill Category' type="text" value={formData.category} onChange={handleInputOnChange} disabled={isDisabled}/>
          <Button dataId={formData.id} text="Add Skill" disabled={isDisabled} handler={handleAddNewSkillOnClick}/>
          {formData.skillList.map(skill => <Input  key={skill.id} id={skill.id} dataId={formData.id} name={'skill'} labelText={'Skill'} type={'text'} disabled={isDisabled} value={skill.text} onChange={handleSkillListOnChange} />)}
          <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} /> 
        </form>
      
      }
    </div>

  );

}
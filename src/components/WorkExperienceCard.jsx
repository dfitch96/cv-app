
import { useState } from "react";
import DeleteButton from "./DeleteButton";
import { Input, Checkbox, TextArea } from "./Input";
import {Button, ButtonGroup} from "./ButtonGroup";

export default function WorkExperienceCard({formData, handleInputOnChange, handleDelete}){

   const [isDisabled, setIsDisabled] = useState(true);
  
    function handleEditOnClick(){
      setIsDisabled(false);
    }
  
    function handleSaveOnClick(e){
      e.preventDefault();
      setIsDisabled(true);
    }



  return (

    <div className="card">
      <DeleteButton id={formData.id} handleDelete={handleDelete} />
      <h2 className="card-header">Work Experience</h2>
      <form onSubmit={handleSaveOnClick}>
        <Input id={`job-title-${formData.id}`} name={'jobTitle'} dataId={formData.id} labelText='Job Title' type="text" value={formData.jobTitle} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`company-${formData.id}`} name={'company'} dataId={formData.id} labelText='Company' type="text" value={formData.company} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`startDate-${formData.id}`} name={'startDate'} dataId={formData.id} labelText='Start Date' type="date" value={formData.startDate} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`endDate-${formData.id}`} name={'endDate'} dataId={formData.id} labelText='End Date' type="date" value={formData.endDate} onChange={handleInputOnChange} disabled={formData.currentlyEmployed || isDisabled}/>
        <Checkbox id={`currentlyEmployed-${formData.id}`} name={'currentlyEmployed'} dataId={formData.id} labelText='Currently Employed' value={formData.currentlyEmployed} onChange={handleInputOnChange} disabled={isDisabled}/> 
        <Button disabled={isDisabled} text="Add Work Duty"></Button>
        <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} /> 
      </form>
    </div>


  );




}
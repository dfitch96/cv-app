
import { useState } from "react";
import DeleteButton from "./DeleteButton";
import { Input, Checkbox, TextArea } from "./Input";
import {Button, ButtonGroup} from "./ButtonGroup";

export default function WorkExperienceCard({formData, handleInputOnChange, handleAddDutyOnClick, handleDutyOnChange, handleDelete, setCVData, CVData}){

   const [isDisabled, setIsDisabled] = useState(true);
  
    function handleEditOnClick(){
      setIsDisabled(false);
    }
  
    function handleSaveOnClick(e){
      e.preventDefault();
      setIsDisabled(true);
      // if this form has already been saved, update it at its current location, otherwise append it to the CVData array
      if(CVData.findIndex(form => form.id === formData.id) !== -1){
        const newCVData = CVData.map(form => form.id === formData.id ? formData : form);
        setCVData(newCVData);
        console.log("current record found");
      } else{
        setCVData([
          ...CVData,
          formData
        ]);
        console.log("current record not found");
      }
    }

  return (

    <div className="card">
      <DeleteButton id={formData.id} handleDelete={handleDelete} />
      <h2 className="card-header">Work Experience</h2>
      <form onSubmit={handleSaveOnClick}>
        <Input id={`job-title-${formData.id}`} name={'jobTitle'} dataId={formData.id} labelText='Job Title' type="text" value={formData.jobTitle} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`company-${formData.id}`} name={'company'} dataId={formData.id} labelText='Company' type="text" value={formData.company} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`location-${formData.id}`} name={'location'} dataId={formData.id} labelText='Location' type="text" value={formData.location} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`startDate-${formData.id}`} name={'startDate'} dataId={formData.id} labelText='Start Date' type="date" value={formData.startDate} onChange={handleInputOnChange} disabled={isDisabled}/>
        <Input id={`endDate-${formData.id}`} name={'endDate'} dataId={formData.id} labelText='End Date' type="date" value={formData.endDate} onChange={handleInputOnChange} disabled={formData.currentlyEmployed || isDisabled}/>
        <Checkbox id={`currentlyEmployed-${formData.id}`} name={'currentlyEmployed'} dataId={formData.id} labelText='Currently Employed' value={formData.currentlyEmployed} onChange={handleInputOnChange} disabled={isDisabled}/> 
        <Button dataId={formData.id} disabled={isDisabled} text="Add Work Duty" handler={handleAddDutyOnClick} ></Button>
        {formData.duties.map(duty => <TextArea key={duty.id} id={duty.id} dataId={formData.id} name={'duty'} labelText={'Duty'} value={duty.text} disabled={isDisabled} onChange={handleDutyOnChange} />)}
        <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} /> 
      </form>
    </div>

  );

}
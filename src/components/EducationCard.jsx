
import { useState } from "react";
import {Input} from "./Input";
import ButtonGroup from "./ButtonGroup";


export default function EducationCard({formData, handleInputOnChange, setCVData}){
  const [isDisabled, setIsDisabled] = useState(true);

  function handleEditOnClick(){
    setIsDisabled(false);
  }

  function handleSaveOnClick(e){
    e.preventDefault();
    setIsDisabled(true);
    setCVData({
      ...formData
    });
    console.log('education saved');
  }

 
  return (
     <div className="card">
        <h2 className="card-header">Education</h2>
        <form onSubmit={handleSaveOnClick}>
          <Input id="school" labelText="School Name" type="text" disabled={isDisabled} value={formData.school} onChange={handleInputOnChange} />
          <Input id="degree" labelText="Degree" type="text" disabled={isDisabled} value={formData.degree} onChange={handleInputOnChange}/>
          <Input id="gradDate" labelText="Graduation Date" type="date" disabled={isDisabled} value={formData.gradDate} onChange={handleInputOnChange}/>
          <Input id="location" labelText="Location" type="text" disabled={isDisabled} value={formData.location} onChange={handleInputOnChange}/>
          <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} />
        </form>
      </div>
  )
}
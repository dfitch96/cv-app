
import { useState } from "react";
import {Input} from "./Input";
import ButtonGroup from "./ButtonGroup";


export default function EducationCard({formData, handleInputOnChange, setCVData, CVData}){
  const [isDisabled, setIsDisabled] = useState(true);

  function handleEditOnClick(){
    setIsDisabled(false);
  }

  function handleSaveOnClick(e){
    e.preventDefault();
    setIsDisabled(true);
    const newCVData = CVData.filter(form => form.id !== formData.id ? form : null);
    setCVData([
      ...newCVData,
      formData
    ]);
    console.log('education saved');
  }

 
  return (
     <div className="card">
        <h2 className="card-header">Education</h2>
        <form onSubmit={handleSaveOnClick}>
          <Input id={`school-${formData.id}`} name={'school'} dataId={formData.id} labelText="School Name" type="text" disabled={isDisabled} value={formData.school} onChange={handleInputOnChange} />
          <Input id={`degree-${formData.id}`} name={'degree'} dataId={formData.id} labelText="Degree" type="text" disabled={isDisabled} value={formData.degree} onChange={handleInputOnChange} />
          <Input id={`gradDate-${formData.id}`} name={'gradDate'} dataId={formData.id} labelText="Graduation Date" type="date" disabled={isDisabled} value={formData.gradDate} onChange={handleInputOnChange}/>
          <Input id={`location-${formData.id}`} name={'location'} dataId={formData.id} labelText="Location" type="text" disabled={isDisabled} value={formData.location} onChange={handleInputOnChange}/>
          <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} />
        </form>
      </div>
  )
}

import { useState } from "react";
import {Input} from "./Input";
import ButtonGroup from "./ButtonGroup";


export default function EducationCard({id, formData, handleInputOnChange, setCVData}){
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
          <Input id={`school-${id}`} name={'school'} dataId={id} labelText="School Name" type="text" disabled={isDisabled} value={formData.school} onChange={handleInputOnChange} />
          <Input id={`degree-${id}`} name={'degree'} dataId={id} labelText="Degree" type="text" disabled={isDisabled} value={formData.degree} onChange={handleInputOnChange} />
          <Input id={`gradDate-${id}`} name={'gradDate'} dataId={id} labelText="Graduation Date" type="date" disabled={isDisabled} value={formData.gradDate} onChange={handleInputOnChange}/>
          <Input id={`location-${id}`} name={'location'} dataId={id} labelText="Location" type="text" disabled={isDisabled} value={formData.location} onChange={handleInputOnChange}/>
          <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} />
        </form>
      </div>
  )
}
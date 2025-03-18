
import { useState } from "react";
import {Input} from "./Input";
import {ButtonGroup} from "./ButtonGroup";
import DeleteButton from "./DeleteButton";
import DetailsButton from "./DetailsButton";


export default function EducationCard({formData, handleInputOnChange, setCVData, CVData, handleDelete}){
  const [isDisabled, setIsDisabled] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleEditOnClick(){
    setIsDisabled(false);
  }

  function handleSaveOnClick(e){
    e.preventDefault();
    setIsDisabled(true);

    // if form has already been saved, update it. Otherwise insert at the end of the array
    if(CVData.findIndex(form => form.id === formData.id) !== -1){
      const newCVData = CVData.map(form => form.id === formData.id ? formData : form);
      setCVData(newCVData);
    } else{
      setCVData([
        ...CVData,
        formData
      ]);
    }
   
  }

  function handleDetailsOnClick(){
    setIsCollapsed(!isCollapsed);
  }

 
  return (
     <div className="card">
      {!isCollapsed && <DeleteButton id={formData.id} handleDelete={handleDelete} />}
      <h2 className="card-header">{<DetailsButton isCollapsed={isCollapsed} handler={handleDetailsOnClick}/>}Education</h2>
      {!isCollapsed && 
        <form onSubmit={handleSaveOnClick}>
          <Input id={`school-${formData.id}`} name={'school'} dataId={formData.id} labelText="School Name" type="text" disabled={isDisabled} value={formData.school} onChange={handleInputOnChange} />
          <Input id={`degree-${formData.id}`} name={'degree'} dataId={formData.id} labelText="Degree" type="text" disabled={isDisabled} value={formData.degree} onChange={handleInputOnChange} />
          <Input id={`gradDate-${formData.id}`} name={'gradDate'} dataId={formData.id} labelText="Graduation Date" type="date" disabled={isDisabled} value={formData.gradDate} onChange={handleInputOnChange}/>
          <Input id={`location-${formData.id}`} name={'location'} dataId={formData.id} labelText="Location" type="text" disabled={isDisabled} value={formData.location} onChange={handleInputOnChange}/>
          <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} />
        </form>

      }
      
    </div>
  )
}
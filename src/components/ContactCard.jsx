
import {Input} from './Input';
import ButtonGroup from './ButtonGroup';
import '../styles/Input.css';
import { useState } from 'react';


export default function ContactCard({formData, handleInputOnChange, setCVData}){
  const [isDisabled, setIsDisabled] = useState(true);
  

  function handleEditOnClick(){
    setIsDisabled(false);
  }

  function handleSaveOnClick(e){
    e.preventDefault();
    const form = e.target;

    if(!form.checkValidity()){
      form.reportValidity();
    } else{
      setIsDisabled(true);
      setCVData({
        ...formData
      });
      console.log("form saved");
    }

    
  }

  

  return (
    <div id ='contact-info' className="card">
      <h2 className="card-header">Contact</h2>
      <form onSubmit={handleSaveOnClick}>
        <Input id="name" labelText="Name" type="text" disabled={isDisabled} value={formData.name} onChange={handleInputOnChange}/>
        <Input id="email" labelText="Email" type="email" disabled={isDisabled} value={formData.email} onChange={handleInputOnChange}/>
        <Input id="phone" labelText="Phone Number" type="tel" disabled={isDisabled} value={formData.phone} onChange={handleInputOnChange}/>
        <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} />
      </form>
    </div>

  );

}
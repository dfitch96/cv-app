
import Input from './Input';
import ButtonGroup from './ButtonGroup';
import '../styles/Input.css';
import { useState } from 'react';




export default function ContactCard(){
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: 'Your Name',
    email: 'name@email.com',
    phone: '(123) 456-7891'
  });

  function handleEditOnClick(){
    setIsDisabled(false);
  }

  function handleSaveOnClick(e){
    e.preventDefault();
    setIsDisabled(true);
    console.log("form saved");
  }

  function inputOnChange(e){
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  return (
    <div id ='contact-info' className="card">
      <h2 className="card-header">Contact</h2>
      <form>
        <Input id="name" labelText="Name" type="text" disabled={isDisabled} value={formData.name} onChange={inputOnChange}/>
        <Input id="email" labelText="Email" type="email" disabled={isDisabled} value={formData.email} onChange={inputOnChange}/>
        <Input id="phone" labelText="Phone Number" type="tel" disabled={isDisabled} value={formData.phone} onChange={inputOnChange}/>
        <ButtonGroup disabled={isDisabled} handleEdit={handleEditOnClick} handleSave={handleSaveOnClick}/>
      </form>
    </div>

  );

}
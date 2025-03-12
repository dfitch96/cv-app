
import Input from './Input';
import ButtonGroup from './ButtonGroup';
import '../styles/Input.css';

export default function ContactCard(){

  return (
    <div id ='contact-info' className="card">
      <h2 className="card-header">Contact</h2>
      <form>
        <Input id="name" labelText="Name" type="text"/>
        <Input id="email" labelText="Email" type="email"/>
        <Input id="phone" labelText="Phone Number" type="tel"/>
        <ButtonGroup />
      </form>
    </div>

  );

}
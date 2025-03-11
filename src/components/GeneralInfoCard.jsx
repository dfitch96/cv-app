
import Input from './Input'

export default function GeneralInfoCard(){

  return (
    <div id ='general-info' className="card">
      <h2 className="card-header">Contact</h2>
      <form>
        <Input id="name" labelText="Name" type="text"/>
        <Input id="email" labelText="Email" type="email"/>
        <Input id="phone" labelText="Phone Number" type="tel"/>
        
      </form>
    </div>

  );

}
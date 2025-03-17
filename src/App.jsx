import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import WorkExperienceCard from './components/WorkExperienceCard';
import CVHeader from './components/CVHeader';
import CV_Education from './components/CV_Education';
import AddButton from './components/AddButton';


function App() {
  const [contactFormData, setContactFormData] = useState({
    name: 'Your Name',
    email: 'name@email.com',
    phone: '(123) 456-7891'
  });

  const [contactCVData, setContactCVData] = useState({
    ...contactFormData,
  });


  const [educationFormData, setEducationFormData] = useState([
    {
      id: crypto.randomUUID(),
      school: 'Your School',
      degree: 'Bachelor of Science in Computer Science',
      gradDate: new Date().toISOString().split('T')[0],
      location: 'Buffalo, NY'
    }
  ]);

  const [educationCVData, setEducationCVData] = useState([
    ...educationFormData
  ]);


  const [workExperienceFormData, setWorkExperienceFormData] = useState([
    {
      id: crypto.randomUUID(),
      company: 'Google',
      jobTitle: 'Software Engineer',
      currentlyEmployed: true,
      location: 'Mountain View, CA',
      startDate: new Date("1999-01-01").toISOString().split('T')[0],
      endDate: '',
      duties: [{id: crypto.randomUUID(), text: 'Otimpized search algorithm for google search by 50%'},],
    }
  ]);

  const [workExperienceCVData, setWorkExperienceCVData] = useState([
    ...workExperienceFormData
  ]);


  function handleWorkExperienceOnChange(e){
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const newWorkExperienceFormData = workExperienceFormData.map(form => form.id !== e.target.dataset.id ? form : {...form, [e.target.name]: value});
    setWorkExperienceFormData(newWorkExperienceFormData);
  }

  function handleAddWorkDutyOnClick(e){
    const id = e.target.dataset.id;
    const newWorkExperienceFormData = [...workExperienceFormData];
    const currForm = newWorkExperienceFormData.find(form => form.id === id);
    currForm.duties.push({id: crypto.randomUUID(), text: ''});
    setWorkExperienceFormData(newWorkExperienceFormData);
  }

  function handleWorkDutyOnChange(e){
    const formId = e.target.dataset.id;
    const dutyId = e.target.id;
    const newWorkExperienceFormData = [...workExperienceFormData];
    const currForm = newWorkExperienceFormData.find(form => form.id === formId);
    const currDuty = currForm.duties.find(duty => duty.id === dutyId);
    currDuty.text = e.target.value;
    setWorkExperienceFormData(newWorkExperienceFormData);




  }

  
  function handleEducationInputOnChange(e){
    const newEducationFormData = educationFormData.map(form => form.id !== e.target.dataset.id ? form : {...form, [e.target.name]: e.target.value});
    setEducationFormData(newEducationFormData);
  }

  function handleContactInputOnChange(e){
    setContactFormData({
      ...contactFormData,
      [e.target.id]: e.target.value
    });
  }

  function handleAddEducationOnClick(){
    setEducationFormData([
      ...educationFormData,
      {
        id: crypto.randomUUID(),
        school: '',
        degree: '',
        gradDate: '',
        location: '',
      }
    ]);
  }

  function handleAddWorkExperienceOnClick(){
    setWorkExperienceFormData([
      ...workExperienceFormData,
      {
        id: crypto.randomUUID(),
        company: '',
        jobTitle: '',
        currentlyEmployed: false,
        location: '',
        startDate: '',
        endDate: '',
        duties: [],
      }
      
    ])
  }

  function handleDeleteEducationOnClick(e){
    
    const id  = e.target.dataset.id;
    const newFormData = educationFormData.filter(form => form.id !== id ? form : null);
    setEducationFormData([...newFormData]);
    setEducationCVData([...newFormData]);
  }

  function handleDeleteWorkExperienceOnClick(e){
    const id = e.target.dataset.id;
    const newFormData = workExperienceFormData.filter(form => form.id !== id ? form : null);
    setWorkExperienceFormData([...newFormData]);
  }

  return (
    <div className="app-container">
      <div className="input-container">
        <Header />
        <ContactCard formData={contactFormData} handleInputOnChange={handleContactInputOnChange} setCVData={setContactCVData} />
        <AddButton text="Education" handler={handleAddEducationOnClick}/>
        {educationFormData.map(form => {
          return <EducationCard key={form.id} formData={form} handleInputOnChange={handleEducationInputOnChange} setCVData={setEducationCVData} CVData={educationCVData} handleDelete={handleDeleteEducationOnClick}/>
        })}
        <AddButton text="Work Experience" handler={handleAddWorkExperienceOnClick} />
        {workExperienceFormData.map(form => {
          return <WorkExperienceCard key={form.id} formData={form} handleInputOnChange={handleWorkExperienceOnChange} handleAddDutyOnClick={handleAddWorkDutyOnClick} handleDutyOnChange={handleWorkDutyOnChange} handleDelete={handleDeleteWorkExperienceOnClick}/>
        })}
      </div>
      <div className="cv-container">
        <CVHeader formData={contactCVData}/>
        <CV_Education formData={educationCVData} />
      </div>
    </div>
  )
}

export default App

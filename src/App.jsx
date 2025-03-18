import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import WorkExperienceCard from './components/WorkExperienceCard';
import CV_Header from './components/CV_Header';
import CV_Education from './components/CV_Education';
import CV_WorkExperience from './components/CV_WorkExperience';
import AddButton from './components/AddButton';


function App() {

  // CONTACT INFO STATE
  const [contactFormData, setContactFormData] = useState({
    name: 'Your Name',
    email: 'name@email.com',
    phone: '(123) 456-7891'
  });

  const [contactCVData, setContactCVData] = useState({
    ...contactFormData,
  });

  function handleContactInputOnChange(e){
    setContactFormData({
      ...contactFormData,
      [e.target.id]: e.target.value
    });
  }


  // EDUCATION STATE
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


  function handleEducationInputOnChange(e){
    const newEducationFormData = educationFormData.map(form => form.id !== e.target.dataset.id ? form : {...form, [e.target.name]: e.target.value});
    setEducationFormData(newEducationFormData);
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

  function handleDeleteEducationOnClick(e){
    
    const id  = e.target.dataset.id;
    const newFormData = educationFormData.filter(form => form.id !== id ? form : null);
    setEducationFormData([...newFormData]);
    setEducationCVData([...newFormData]);
  }




  // WORK EXPERIENCE STATE
  const [workExperienceFormData, setWorkExperienceFormData] = useState([
    {
      id: crypto.randomUUID(),
      company: 'Google',
      jobTitle: 'Software Engineer',
      currentlyEmployed: true,
      location: 'Mountain View, CA',
      startDate: new Date("2001-01-01").toISOString().split('T')[0],
      endDate: '',
      duties: [
        {id: crypto.randomUUID(), text: 'Designed the first version of Google Maps by walking around with a notepad and a really good sense of direction'},
        {id: crypto.randomUUID(), text: 'Proposed an early version of Google Assistant in 2007—at the time, it was just an intern named Kevin who responded to emails manually'},
        {id: crypto.randomUUID(), text: 'Attempted to replace the Google logo with a picture of my dog for April Fools; accidentally shut down the homepage for three hours'},
        {id: crypto.randomUUID(), text: 'Personally debugged the internet after someone tripped over a cable in 2001'},
        {id: crypto.randomUUID(), text: 'Accidentally invented Google Docs while trying to make a grocery list in Notepad'},
      ],
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

  function handleDeleteWorkExperienceOnClick(e){
    const id = e.target.dataset.id;
    const newFormData = workExperienceFormData.filter(form => form.id !== id ? form : null);
    setWorkExperienceFormData([...newFormData]);
    setWorkExperienceCVData([...newFormData])
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
          return <WorkExperienceCard key={form.id} formData={form} handleInputOnChange={handleWorkExperienceOnChange} handleAddDutyOnClick={handleAddWorkDutyOnClick} handleDutyOnChange={handleWorkDutyOnChange} handleDelete={handleDeleteWorkExperienceOnClick} setCVData={setWorkExperienceCVData} CVData={workExperienceCVData}/>
        })}
      </div>
      <div className="cv-container">
        <CV_Header formData={contactCVData}/>
        <CV_Education formData={educationCVData} />
        <CV_WorkExperience formData={workExperienceCVData}/>
      </div>
    </div>
  )
}

export default App

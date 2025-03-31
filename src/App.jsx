import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import WorkExperienceCard from './components/WorkExperienceCard';
import SkillsCard from './components/SkillsCard';
import CV_Header from './components/CV_Header';
import CV_Education from './components/CV_Education';
import CV_WorkExperience from './components/CV_WorkExperience';
import CV_Skills from './components/CV_Skills';
import AddButton from './components/AddButton';
import { contactObject, educationObject, workExperienceObjects, skillsObjects } from './forms/formData';


function App() {

  // CONTACT INFO STATE
  const [contactFormData, setContactFormData] = useState(contactObject);

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
  const [educationFormData, setEducationFormData] = useState([educationObject]);

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
  const [workExperienceFormData, setWorkExperienceFormData] = useState(workExperienceObjects);

  const [workExperienceCVData, setWorkExperienceCVData] = useState(workExperienceFormData.map(form => {
    return {...form, duties: [...form.duties]};
    
  }));

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


  // SKILLS STATE

  const [skillsFormData, setSkillsFormData] = useState(skillsObjects);

  const [skillsCVData, setSkillsCVData] = useState([
    ...skillsFormData,
  ]);

  function handleSkillsInputOnChange(e){
    const newSkillsFormData = skillsFormData.map(form => form.id !== e.target.dataset.id ? form : {...form, [e.target.name]: e.target.value});
    setSkillsFormData(newSkillsFormData);
  }

  function handleAddSkillOnClick(){
    setSkillsFormData([
      ...skillsFormData,
      {
        id: crypto.randomUUID(),
        category: '',
        skillList: []
      },
    ]);
  }

  function handleDeleteSkillOnClick(e){
    const id = e.target.dataset.id;
    const newSkillsFormData = skillsFormData.filter(form => form.id !== id ? form : null);
    setSkillsFormData([...newSkillsFormData]);
  }

  function handleAddNewSkillOnClick(e){
    const id = e.target.dataset.id;
    const newFormData = [...skillsFormData];
    const currForm = newFormData.find(form => form.id === id);
    currForm.skillList.push({
      id: crypto.randomUUID(),
      text: '',
    });
    setSkillsFormData(newFormData);

  }

  function handleSkillListOnChange(e){
    const formId = e.target.dataset.id;
    const skillId = e.target.id;
    const newFormData = [...skillsFormData];
    const currForm = newFormData.find(form => form.id === formId);
    const skill = currForm.skillList.find(skill => skill.id === skillId);
    skill.text = e.target.value;
    setSkillsFormData(newFormData);

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
        <AddButton text="Skill" handler={handleAddSkillOnClick}/>
        {skillsFormData.map(form => {
          return <SkillsCard key={form.id} formData={form} handleInputOnChange={handleSkillsInputOnChange} handleDelete={handleDeleteSkillOnClick} handleAddNewSkillOnClick={handleAddNewSkillOnClick} handleSkillListOnChange={handleSkillListOnChange} CVData={skillsCVData} setCVData={setSkillsCVData} />
        })}

      </div>
      <div className="cv-container">
        <CV_Header formData={contactCVData}/>
        <CV_Education formData={educationCVData} />
        <CV_WorkExperience formData={workExperienceCVData}/>
        <CV_Skills formData={skillsCVData}/>
      </div>
    </div>
  )
}

export default App

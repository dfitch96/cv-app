import { useState } from 'react';
import './styles/App.css'
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import EducationCard from './components/EducationCard';
import CVHeader from './components/CVHeader';
import CV_Education from './components/CV_Education';


function App() {
  const [contactFormData, setContactFormData] = useState({
    name: 'Your Name',
    email: 'name@email.com',
    phone: '(123) 456-7891'
  });

  const [contactCVData, setContactCVData] = useState({
    ...contactFormData,
  });


  const [educationFormData, setEducationFormData] = useState({
    school: 'Your School',
    degree: 'Bachelor of Science in Computer Science',
    gradDate: new Date().toISOString().split('T')[0],
    location: 'Buffalo, NY'
  });

  const [educationCVData, setEducationCVData] = useState({
    ...educationFormData,
  });

  
  function handleEducationInputOnChange(e){
    setEducationFormData({
      ...educationFormData,
      [e.target.id]: e.target.value
    })
  }

  function handleContactInputOnChange(e){
    setContactFormData({
      ...contactFormData,
      [e.target.id]: e.target.value
    });
  }

  return (
    <div className="app-container">
      <div className="input-container">
        <Header />
        <ContactCard formData={contactFormData} handleInputOnChange={handleContactInputOnChange} setCVData={setContactCVData} />
        <EducationCard formData={educationFormData} handleInputOnChange={handleEducationInputOnChange} setCVData={setEducationCVData} />
      </div>
      <div className="cv-container">
        <CVHeader formData={contactCVData}/>
        <CV_Education formData={educationCVData} />
      </div>
    </div>
  )
}

export default App

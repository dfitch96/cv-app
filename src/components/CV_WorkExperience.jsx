



export default function CV_WorkExperience({formData}){


  return (
    <div className="cv-template-container">
      <div className="cv-template-header">
        WORK EXPERIENCE
      </div>

      {formData.map(form => {
        return (
          <div key={form.id}>
            <div className="cv-template-info">
              <b>{form.jobTitle}</b>
              <div> 
                {form.startDate}
                {' - '}
                {form.currentlyEmployed ? 'Present' : form.endDate}
              </div>
            </div>
            <div className="cv-template-info">
              <i>{form.company}</i>
              <i>{form.location}</i>
            </div>
            <ul className="cv-template-ul">
              {form.duties.map(duty => <li key={duty.id}>{duty.text}</li>)}
            </ul>
          </div>
        );
      })}

    </div>
  )
}
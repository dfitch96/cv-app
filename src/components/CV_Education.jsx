

export default function CV_Education({formData}){

  if(formData.length === 0){
    return null;
  }

  return (
    <div className="cv-template-container">
      <div className="cv-template-header">
        EDUCATION
      </div>

      {formData.map(form => {
        return (
          <div key={form.id}>
            <div className="cv-template-info">
              <b>{form.degree}</b>
              <p>{form.gradDate}</p>
            </div>
            <div className="cv-template-info">
              <i>{form.school}</i>
              <i>{form.location}</i>
            </div>
          </div>
        );
      })}
      
    </div>
  )
}
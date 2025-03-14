

export default function CV_Education({formData}){
  return (
    <div id="cv-education">
      <div id="cv-education-header">
        EDUCATION
      </div>

      {formData.map(form => {
        return (
          <div key={form.id}>
            <div className="cv-education-info">
              <b>{form.degree}</b>
              <p>{form.gradDate}</p>
            </div>
            <div className="cv-education-info">
              <i>{form.school}</i>
              <i>{form.location}</i>
            </div>
          </div>
        );
      })}
      
    </div>
  )
}
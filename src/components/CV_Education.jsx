

export default function CV_Education({formData}){
  return (
    <div id="cv-education">
      <div id="cv-education-header">
        EDUCATION
      </div>

      <div className="cv-education-info">
        <b>{formData.degree}</b>
        <p>{formData.gradDate}</p>
      </div>
      <div className="cv-education-info">
        <i>{formData.school}</i>
        <i>{formData.location}</i>
      </div>
    </div>
  )
}
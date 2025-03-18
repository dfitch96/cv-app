import '../styles/CvStyles.css'



export default function CV_Header({formData}){

  return(
    <div id='cv-header'>
      <h1>
        {formData.name}
      </h1>
      <div className='contact-info'>
        <p>{formData.phone}</p>
        {' | '}
        <p><a href={"mailto:" + formData.email}>{formData.email}</a></p>
      </div>
    </div>
  )

}
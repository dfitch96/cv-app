import '../styles/CvStyles.css'



export default function CVHeader({formData}){

  return(
    <div id='cv-header'>
      <h1>
        {formData.name}
      </h1>
      <div className='contact-info'>
      <p>{formData.phone}</p>
        {' | '}
        <p>{formData.email}</p>
      </div>
    </div>
  )

}
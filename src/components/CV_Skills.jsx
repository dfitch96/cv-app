



export default function CV_Skills({formData}){

    
    function skillsToString(skillList){
        let text = '';
        for(let i = 0; i < skillList.length; i++){
            if (i !== skillList.length - 1){
                text += skillList[i].text + ', ';
            } else{
                text += skillList[i].text;
            }
        }

        return text;
    }

    return (
        <div className="cv-template-container">
            <div className="cv-template-header">
                Skills
            </div>

            {formData.map(form => {
                return (
                    <div className='cv-template-skills' key={form.id}>
                        <span style={{fontWeight: 'bold'}}>{form.category}</span>
                        {': ' + skillsToString(form.skillList)}
                    </div>)
            })}

        </div>
    );

}
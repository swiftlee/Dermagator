import React,{useState} from 'react';
import useAboutPage from '../../views/AdminDashboard/useAboutPage';
const AboutUpdate=()=>{
    let {inputs,handleSubmit,setText,setName,setInfoCardName,setInfoCardPerson,setInfoCardText,handleNewSection,
        handleNewSectionChange,section,handleEmployeeChange,handleNewEmployee,employee,deleteSection,deleteEmployee}=useAboutPage();
    return(
        <div>
            {
                inputs.data.map((stuff,index)=>{
                    if(stuff.type==="section"){
                        return(
                            <form>
                                <h4>Title of Section {index+1}:</h4>
                                <input type="text"
                                placeholder="Name to Update"
                                value={inputs.data[index].name}
                                onChange={event=>setName(index,event.target.value)}
                                required/>
                                <h4>Text of Section {index+1}</h4>
                                <textarea type="text"
                                placeholder="Text to Update"
                                value={inputs.data[index].text}
                                onChange={event=>setText(index,event.target.value)}
                                required/>
                                <button type="submit" onClick={handleSubmit}> Update Section {index+1}</button>
                                <button type="submit" onClick={event=>deleteSection(index,event)}>Delete Section {index+1}</button>
                            </form>
                        )
                    }
                    else{
                        return(
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <h4>Title of Section {index+1}:</h4>
                                    <input type="text"
                                        placeholder="Name to Update"
                                        value={inputs.data[index].name}
                                        onChange={event=>setInfoCardName(index,event.target.value)}
                                    />
                                    {stuff.team.map((information,index2)=>(
                                        <div>
                                        <h4>Person {index2+1} of Section {index+1}</h4>
                                        <input type="text"
                                        placeholder="Name to Update"
                                        value={information.personName}
                                        onChange={event=>setInfoCardPerson(index,index2,event.target.value)}
                                        required/>
                                        <h4>Information of Person {index2+1} Section {index+1}</h4>
                                        <textarea type="text"
                                        placeholder="Information to Update"
                                        value={information.info}
                                        onChange={event=>setInfoCardText(index,index2,event.target.value)}
                                        required/>
                                        <button type="submit" onClick={handleSubmit}> Update Employee</button>
                                        <button type="submit" onClick={event=>deleteEmployee(index2,event)}>Delete Employee</button>
                                        </div>
                                    )
                                        
                                    )}
                                </form>
                            </div>
                        )
                    }
                })
            }
            <h2>Add new section</h2>
            <form onSubmit={handleSubmit}>
                <label>Section Title:</label><p></p>
                <input type="text" placeholder="Name for New Section" name="name" value={section.name} onChange={handleNewSectionChange} required></input>
                <p></p><label>Section Information:</label><p></p>
                <textarea type="text" placeholder="Text for New Section" name="text" value={section.text} onChange={handleNewSectionChange} required></textarea>
                <p></p><label>Section Unique id:</label><p></p>
                <input type="text" placeholder="ID for New Section" name="id" value={section.id} onChange={handleNewSectionChange} required></input>
                <button type="submit" onClick={handleNewSection}>Make new Section</button>
            </form>
            <h2>Add new employee</h2>
            <form onSubmit={handleSubmit}>
                <label>Employee information:</label>
                <input type="text" placeholder="Name for New employee" name="personName" value={employee.personName} onChange={handleEmployeeChange} required></input>
                <p>Employee information:</p>
                <textarea type="text" placeholder="Text for New employee" name="info" value={employee.info} onChange={handleEmployeeChange} required></textarea>
                <button type="submit" onClick={event=>handleNewEmployee(event)}> Make new Employee</button>
            </form>
        </div>
    );
}


export default AboutUpdate;
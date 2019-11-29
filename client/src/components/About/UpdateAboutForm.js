import React,{useState} from 'react';
import useAboutPage from '../../views/AdminDashboard/useAboutPage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AboutUpdate=()=>{
    let {inputs,handleSubmit,setText,setName,setInfoCardName,setInfoCardPerson,setInfoCardText,handleNewSection,
        handleNewSectionChange,section,handleEmployeeChange,handleNewEmployee,employee,deleteSection,deleteEmployee}=useAboutPage();
    return(
        <div>
            <h2>Update or Delete Sections on About Page</h2>
            {
                inputs.data.map((stuff,index)=>{
                    if(stuff.type==="section"){
                        return(
                            <Form>
                                <Form.Label>Title of Section {index+1}:</Form.Label>
                                <Form.Control type="text"
                                placeholder="Name to Update"
                                value={inputs.data[index].name}
                                onChange={event=>setName(index,event.target.value)}
                                required/>
                                <Form.Label>Text of Section {index+1}</Form.Label>
                                <Form.Control as="textarea" rows="5" type="text"
                                placeholder="Text to Update"
                                value={inputs.data[index].text}
                                onChange={event=>setText(index,event.target.value)}
                                required/>
                                <Button type="submit" onClick={handleSubmit}> Update Section {index+1}</Button>
                                <Button type="submit" onClick={event=>deleteSection(index,event)}>Delete Section {index+1}</Button>
                            </Form>
                        )
                    }
                    else{
                        return(
                            <div>
                                <h2>Update or Delete Employees</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label>Title of Section {index+1}:</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Name to Update"
                                        value={inputs.data[index].name}
                                        onChange={event=>setInfoCardName(index,event.target.value)}
                                    />
                                    {stuff.team.map((information,index2)=>(
                                        <div>
                                        <Form.Label>Person {index2+1} of Section {index+1}</Form.Label>
                                        <Form.Control type="text"
                                        placeholder="Name to Update"
                                        value={information.personName}
                                        onChange={event=>setInfoCardPerson(index,index2,event.target.value)}
                                        required/>
                                        <Form.Label>Information of Person {index2+1} Section {index+1}</Form.Label>
                                        <Form.Control as="textarea" type="text"
                                        placeholder="Information to Update"
                                        value={information.info}
                                        onChange={event=>setInfoCardText(index,index2,event.target.value)}
                                        required/>
                                        <Button type="submit" onClick={handleSubmit}> Update Employee</Button>
                                        <Button type="submit" onClick={event=>deleteEmployee(index2,event)}>Delete Employee</Button>
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        )
                    }
                })
            }
            <h2>Add new section</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Section Title:</Form.Label>
                <Form.Control type="text" placeholder="Name for New Section" name="name" value={section.name} onChange={handleNewSectionChange} required></Form.Control>
                <Form.Label>Section Information:</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Text for New Section" name="text" value={section.text} onChange={handleNewSectionChange} required></Form.Control>
                <Form.Label>Section Unique id:</Form.Label>
                <Form.Control type="text" placeholder="ID for New Section" name="id" value={section.id} onChange={handleNewSectionChange} required></Form.Control>
                <Button type="submit" onClick={handleNewSection}>Make new Section</Button>
            </Form>
            <h2>Add new employee</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Employee information:</Form.Label>
                <Form.Control type="text" placeholder="Name for New employee" name="personName" value={employee.personName} onChange={handleEmployeeChange} required></Form.Control>
                <Form.Label>Employee information:</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Text for New employee" name="info" value={employee.info} onChange={handleEmployeeChange} required></Form.Control>
                <Button type="submit" onClick={event=>handleNewEmployee(event)}> Make new Employee</Button>
            </Form>
        </div>
    );
}


export default AboutUpdate;
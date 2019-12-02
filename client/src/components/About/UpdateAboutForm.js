import React from 'react';
import useAboutPage from '../../views/AdminDashboard/useAboutPage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AboutUpdateForm = () => {
    const {
        inputs, handleSubmit, setText, setName, setInfoCardName, setInfoCardPerson, setInfoCardText, handleNewSection,
        handleNewSectionChange, section, handleEmployeeChange, handleNewEmployee, employee, deleteSection, deleteEmployee
    } = useAboutPage();
    return (
        <div className='border-primary border p-4 m-3'>
            <h2>Update or Delete Sections on About Page</h2>
            {
                inputs.data.map((divs, index) => {
                    if (divs.type === "section") {
                        return (
                            <Form className='border-primary border p-4 m-3' key={divs.type + index}>
                                <Form.Label column=''>Title of Section {index + 1}:</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Name to Update"
                                              value={inputs.data[index].name}
                                              onChange={event => setName(index, event.target.value)}
                                              required/>
                                <Form.Label column=''>Text of Section {index + 1}</Form.Label>
                                <Form.Control as="textarea" rows="5" type="text"
                                              placeholder="Text to Update"
                                              value={inputs.data[index].text}
                                              onChange={event => setText(index, event.target.value)}
                                              required/>
                                <div className='mt-3 mb-3'>
                                    <Button className='mr-3' type="submit" onClick={handleSubmit}> Update
                                        Section {index + 1}</Button>
                                    <Button type="submit" onClick={event => deleteSection(index, event)}>Delete
                                        Section {index + 1}</Button>
                                </div>
                            </Form>
                        )
                    } else {
                        return (
                            <div className='border-primary border p-4 m-3' key={index}>
                                <h2>Update or Delete Employees</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label column=''>Title of Section {index + 1}:</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder="Name to Update"
                                                  value={inputs.data[index].name}
                                                  onChange={event => setInfoCardName(index, event.target.value)}
                                    />
                                    {divs.team.map((information, index2) => (
                                        <div key={information + index2}>
                                            <Form.Label column=''>Person {index2 + 1} of
                                                Section {index + 1}</Form.Label>
                                            <Form.Control type="text"
                                                          placeholder="Name to Update"
                                                          value={information.personName}
                                                          onChange={event => setInfoCardPerson(index, index2, event.target.value)}
                                                          required/>
                                            <Form.Label column=''>Information of
                                                Person {index2 + 1} Section {index + 1}</Form.Label>
                                            <Form.Control as="textarea" type="text"
                                                          placeholder="Information to Update"
                                                          value={information.info}
                                                          onChange={event => setInfoCardText(index, index2, event.target.value)}
                                                          required/>
                                            <div className='mt-3 mb-3'>
                                                <Button className='mr-3' type="submit" onClick={handleSubmit}> Update
                                                    Employee</Button>
                                                <Button type="submit" onClick={event => deleteEmployee(index2, event)}>Delete
                                                    Employee</Button>
                                            </div>
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        )
                    }
                })
            }
            <div className='border-primary border p-4 m-3'>
                <h2>Add new section</h2>
                <Form onSubmit={handleSubmit} className='border-primary border p-4 m-3'>
                    <Form.Label column=''>Section Title:</Form.Label>
                    <Form.Control type="text" placeholder="Name for New Section" name="name" value={section.name}
                                  onChange={handleNewSectionChange} required/>
                    <Form.Label column=''>Section Information:</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Text for New Section" name="text"
                                  value={section.text} onChange={handleNewSectionChange} required/>
                    <Form.Label column=''>Section Unique id:</Form.Label>
                    <Form.Control type="text" placeholder="ID for New Section" name="id" value={section.id}
                                  onChange={handleNewSectionChange} required/>
                    <Button className='mr-3 mt-3 mb-3' type="submit" onClick={handleNewSection}>Make new
                        Section</Button>
                </Form>
            </div>
            <div className='border-primary border p-4 m-3'>
                <h2>Add new employee</h2>
                <Form onSubmit={handleSubmit} className='border-primary border p-4 m-3'>
                    <Form.Label>Employee information:</Form.Label>
                    <Form.Control type="text" placeholder="Name for New employee" name="personName"
                                  value={employee.personName} onChange={handleEmployeeChange} required/>
                    <Form.Label column=''>Employee information:</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Text for New employee" name="info"
                                  value={employee.info} onChange={handleEmployeeChange} required/>
                    <Button className='mr-3 mt-3 mb-3' type="submit" onClick={event => handleNewEmployee(event)}> Make
                        new
                        Employee</Button>
                </Form>
            </div>
        </div>
    );
};


export default AboutUpdateForm;

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import useHomeUpdate from "../Forms/useHomeUpdate"


const HomeForm= () => {
    let {
        inputs, handleSubmit, setText, setName, handleNewSection,
        handleNewSectionChange, section, deleteSection,setInfoCardText,setInfoSub,setInfoName
    } = useHomeUpdate();
    return (
            <div className='border-primary border p-4 m-3'>
                <h2> Editing Home </h2>
                <Form className='border-primary border p-4 m-3'>
                        <Form.Label column=''>Text of Welcome</Form.Label>
                        <Form.Control as="textarea" type="text" rows="3"
                            placeholder="Text to Update"
                            value={inputs.data[0].text}
                            onChange={event => setText(0, event.target.value)}
                            required/>
                            <div className='mt-3 mb-3'>
                                <Button className='mr-3' type="submit" onClick={handleSubmit}>Update Welcome Message</Button>
                            </div>
                </Form>

                <p> *placeholder for the carousel editor*</p>
                <h4>Updating Product Info Cards</h4>
                <Form>
                {inputs.data[1].info.map((information, index2) => (
                                        <div>
                                            <Form.Label column=''>InfoCard {index2+1}</Form.Label>
                                            <Form.Control type="text"
                                                          placeholder="Name to Update"
                                                          value={information.title}
                                                          onChange={event => setInfoName(1, index2, event.target.value)}
                                                          required/>
                                            <Form.Label column=''>Subtitle:</Form.Label>
                                            <Form.Control type="text"
                                                          placeholder="Name to Update"
                                                          value={information.subtitle}
                                                          onChange={event => setInfoSub(1, index2, event.target.value)}
                                                          required/>
                                            <Form.Label column=''>Information:</Form.Label>
                                            <Form.Control as="textarea" type="text"
                                                          placeholder="Information to Update"
                                                          value={information.information}
                                                          onChange={event => setInfoCardText(1, index2, event.target.value)}
                                                          required/>
                                            <div className='mt-3 mb-3'>
                                                <Button className='mr-3' type="submit" onClick={handleSubmit}> Update
                                                    Employee</Button>
                                            </div>
                                        </div>
                                    ))}
                </Form>
                <h4>Updating About Section</h4>
                <Form className='border-primary border p-4 m-3'>
                                <Form.Label column=''>Title of About Section:</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Name to Update"
                                              value={inputs.data[2].name}
                                              onChange={event => setName(2, event.target.value)}
                                              required/>
                                <Form.Label column=''>Text of About Section</Form.Label>
                                <Form.Control as="textarea" type="text" rows="5"
                                              placeholder="Text to Update"
                                              value={inputs.data[2].text}
                                              onChange={event => setText(2, event.target.value)}
                                              required/>
                                <div className='mt-3 mb-3'>
                                    <Button className='mr-3' type="submit" onClick={handleSubmit}> Update About Section</Button>
                                </div>
                            </Form>
                <p> *placeholder for the 'our products' preview editor*</p>

                <h4>Updating Contact Section</h4>
                <Form className='border-primary border p-4 m-3'>
                                <Form.Label column=''>Title of Contact Section:</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Name to Update"
                                              value={inputs.data[3].name}
                                              onChange={event => setName(3, event.target.value)}
                                              required/>
                                <Form.Label column=''>Text of About Section</Form.Label>
                                <Form.Control as="textarea" type="text" rows="5"
                                              placeholder="Text to Update"
                                              value={inputs.data[3].text}
                                              onChange={event => setText(3, event.target.value)}
                                              required/>
                                <div className='mt-3 mb-3'>
                                    <Button className='mr-3' type="submit" onClick={handleSubmit}> Update Contact Section</Button>
                                </div>
                            </Form>
            </div>
        );
    };
    
    export default HomeForm;

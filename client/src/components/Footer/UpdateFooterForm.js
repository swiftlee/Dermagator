import React, {useState} from 'react';
import useFooterUpdate from '../../components/Footer/useFooterUpdate';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FooterUpdate = () => {
    let {inputs, handleSubmit, setText, setName} = useFooterUpdate();
    return (
        <div className='border-primary border p-4 m-3'>
            <h2>Update Footer Sections</h2>
            {
                <Form className='border-primary border p-4 m-3'>
                <Form.Label column=''>Name of Left Hand Footer:</Form.Label>
                <Form.Control type="text"
                              placeholder="Name to Update"
                              value={inputs.data[0].name}
                              onChange={event => setName(0, event.target.value)}
                              required/>
                <Form.Label column=''>Text of Left Hand Footer</Form.Label>
                <Form.Control as="textarea" rows="5" type="text"
                              placeholder="Text to Update"
                              value={inputs.data[0].text}
                              onChange={event => setText(0, event.target.value)}
                              required/>
                <div className='mt-3 mb-3'>
                    <Button className='mr-3' type="submit" onClick={handleSubmit}> Update Left Hand Footer</Button>
                </div>
                <Form.Label column=''>Name of Right Hand Footer:</Form.Label>
                <Form.Control type="text"
                              placeholder="Name to Update"
                              value={inputs.data[1].name}
                              onChange={event => setName(1, event.target.value)}
                              required/>
                <Form.Label column=''>Text of Left Hand Footer</Form.Label>
                <Form.Control as="textarea" rows="5" type="text"
                              placeholder="Text to Update"
                              value={inputs.data[1].text}
                              onChange={event => setText(1, event.target.value)}
                              required/>
                <div className='mt-3 mb-3'>
                    <Button className='mr-3' type="submit" onClick={handleSubmit}> Update Right Hand Footer</Button>
                </div>
                </Form>
                
            }
        </div>
    );
};


export default FooterUpdate;

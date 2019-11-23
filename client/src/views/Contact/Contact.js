import React from 'react';
import useContact from "./useContact";
import '../Login/Login.css';
import './Contact.css';
import Footer from "../../components/Footer/Footer";

const Contact = (props) => {
    const {inputs, errors, isValid, hasSubmitted, handleInputChange, handleSubmit} = useContact();
    return (
        <div className='text-center m-auto'>
            <div className='login-container' style={{transform: 'translateY(-10%)'}}>
                <h2 style={{top: '35%', position: 'absolute'}}>Email Us</h2>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                <div className='login-form'>
                    <div className='section' style={{marginTop: '75%'}}>
                        {
                            hasSubmitted && errors.email ? <span>{errors.email}</span> : null
                        }
                        <input type="email" name="email" onChange={handleInputChange} value={inputs.email}
                               required autoComplete='new-password'/>
                        <label className='login-label' htmlFor="email"><span
                            className='login-label-content'>Your email</span></label>
                    </div>
                    <div className='section'>
                        <input type="text" name="subject" onChange={handleInputChange} value={inputs.password}
                               required autoComplete='new-password'/>
                        <label className='login-label' htmlFor="subject"><span
                            className='login-label-content'>Subject</span></label>
                    </div>
                    {/* fix inability to type... remove value prop */}
                    <textarea className='form-control' onChange={handleInputChange}
                              placeholder='Your message of at least 16 characters...'
                              rows='10'
                              style={{
                                  resize: 'none',
                                  height: '20vh'
                              }}/>
                    <button className="btn btn-primary send-button mb-4" name="submit-button"
                            id={"submit-button"}
                            type="submit" value="SEND"
                            onClick={handleSubmit}>
                        <div className="_button">
                            <i className="fa fa-send"/><span
                            className="send-text">SEND</span>
                        </div>
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;

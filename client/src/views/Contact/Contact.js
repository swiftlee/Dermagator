import React from 'react';
import useContact from './useContact';
import '../Login/Login.css';
import './Contact.css';
import isEmpty from "is-empty";
import { ReCaptcha } from 'react-recaptcha-v3';
import config from '../../config/config';


const Contact = () => {
    const {inputs, errors, isValid, success, updateToken, handleInputChange, handleSubmit} = useContact();
    const verifyCallback = token => {
        updateToken(token);
    };

    const checkMark = () => {
        return (
            <svg className="checkMark" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6"
                        strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6"
                          strokeLinecap="round" strokeMiterlimit="10"
                          points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
        )
    };

    return (
        <div className='text-center m-auto' id="top">
            <div className='login-container' style={{transform: 'translateY(-10%)'}}>
                <h2 style={{top: '35%', position: 'absolute'}}>Email Us</h2>
                {
                    success ? checkMark() : null
                }
                {
                    !isEmpty(errors.success) ? <span style={{
                        position: 'absolute',
                        top: '40%',
                        fontSize: '10pt',
                        color: 'red',
                    }}>{errors.success}</span> : null
                }
                {
                    !isEmpty(errors.captcha) && !isValid ? <span style={{
                        position: 'absolute',
                        top: '40%',
                        fontSize: '10pt',
                        color: 'red',
                    }}>{errors.captcha}</span> : null
                }
                <link rel='stylesheet'
                      href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'/>
                <div className='login-form'>
                    <div className='section' style={{marginTop: '75%'}}>
                        {
                            !isEmpty(errors.email) && !isValid ? <span style={{
                                position: 'absolute',
                                fontSize: '10pt',
                                color: 'red',
                            }}>{errors.email}</span> : null
                        }
                        <input type='email' name='email' onChange={handleInputChange} value={inputs.email}
                               required autoComplete='new-password'/>
                        <label className='login-label' htmlFor='email'><span
                            className='login-label-content'>Your email</span></label>
                    </div>
                    <div className='section'>
                        {
                            !isEmpty(errors.subject) && !isValid ? <span style={{
                                position: 'absolute',
                                float: 'right',
                                fontSize: '10pt',
                                color: 'red',
                            }}>{errors.subject}</span> : null
                        }
                        <input type='text' name='subject' onChange={handleInputChange} value={inputs.subject}
                               required autoComplete='new-password'/>
                        <label className='login-label' htmlFor='subject'><span
                            className='login-label-content'>Subject</span></label>
                    </div>
                    {/* fix inability to type... remove value prop */}
                    <textarea className='form-control' onChange={handleInputChange}
                              name='text'
                              defaultValue={inputs.text}
                              placeholder='Your message of at least 16 characters...'
                              rows='10'
                              style={{
                                  resize: 'none',
                                  height: '20vh'
                              }}/>
                    {
                        !isEmpty(errors.text) && !isValid ?
                            <span style={{position: 'relative', float: 'left', fontSize: '10pt', color: 'red'}}
                                  className='mb-2 mt-1'>{errors.text}</span> : null
                    }
                    <button className='btn btn-primary send-button mb-4' name='submit-button'
                            id='submit-button'
                            type='submit' value='SEND'
                            onClick={handleSubmit}>
                        <div className='_button'>
                            <i className='fa fa-send'/><span
                            className='send-text'>SEND</span>
                        </div>
                    </button>
                    <ReCaptcha
                        sitekey={config.captcha.sitekey}
                        action='social'
                        verifyCallback={verifyCallback}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;

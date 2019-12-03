
import React, { useState } from 'react';
import './AccountSettings.css';
import GeneralForm from '../../Forms/GeneralForm';
import SecurityForm from '../../Forms/SecurityForm';
import AdminForm from "../../Forms/AdminForm";



const AccountSettings = (props) => {

    const [general, setGeneral] = useState(true);
    const [security, setSecurity] = useState(false);
    const [users, setUsers] = useState(false);
    

        return (
            <div data-aos="fade-up" data-aos-duration='1000'>

                <div className="row sticky-top">
                    <h1>Account Settings</h1>
                </div>


                <div className="row">
                    <div className="column left col-lg-2 col-sm-8 col-md-4">
                        <div className="vertical-menu sticky-top" style={{top: '10%'}}>

                            <a onClick={() => {setGeneral(true); setSecurity(false); setUsers(false)}} href="#">General</a>
                            <a onClick={() => {setGeneral(false); setSecurity(true); setUsers(false)}} href="#">Security</a>
                            <a onClick={() => {setGeneral(false); setSecurity(false); setUsers(true)}} href="#">Users</a>
                        </div>
                    </div>

                    <div className="column right col-lg-10 col-sm-5 col-md-8 pl-5">

                        {general ?
                            <div data-aos="fade-up" data-aos-duration='1000'>
                                <GeneralForm/>
                            </div> 
                            : null
                        }

                        {security ?
                            <div data-aos="fade-up" data-aos-duration='1000'>
                                <SecurityForm/>
                            </div> 
                            : null
                        }

                        {users ?
                            <div data-aos="fade-up" data-aos-duration='1000'>
                                {props.token.permissions.includes('create') || props.token.permissions.includes('super') ? <AdminForm token={props.token} jwt={props.jwt}/> : null}
                            </div>
                            : null
                        }

                        
                    </div>

                </div>

            </div>

        );
    
};

export default AccountSettings;

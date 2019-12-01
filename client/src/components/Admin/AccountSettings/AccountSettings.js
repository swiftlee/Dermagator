import React from 'react';
import './AccountSettings.css';
import GeneralForm from '../../Forms/GeneralForm';
import SecurityForm from '../../Forms/SecurityForm';
import AdminForm from "./AdminForm";


const AccountSettings = (props) => {

    return (
        <div data-aos="fade-up" data-aos-duration='1000'>

            <div className="row sticky-top">
                <h1>Account Settings</h1>
            </div>


            <div className="row">
                <div className="column left col-lg-2 col-sm-8 col-md-4">
                    <div className="vertical-menu sticky-top" style={{top: '10%'}}>
                        {/* <a href="#" className="active">Home</a> */}
                        <a href="#">General</a>
                        <a href="#">Security</a>
                        <a href="#">Users</a>
                    </div>
                </div>

                <div className="column right col-lg-10 col-sm-5 col-md-8 pl-5">
                    <GeneralForm/>
                    <SecurityForm/>
                    {props.token.permissions.includes('create') || props.token.permissions.includes('super') ? <AdminForm/> : null}
                </div>

            </div>

        </div>

    );
};

export default AccountSettings;

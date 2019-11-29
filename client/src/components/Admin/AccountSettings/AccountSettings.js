import React from 'react';
import './AccountSettings.css';
import GeneralForm from '../../Forms/GeneralForm';
import SecurityForm from '../../Forms/SecurityForm';


const AccountSettings = () => {
    return (
        <div
            data-aos="fade-up" data-aos-duration='1000'>

            <div className="row">
                <h1>Account Settings</h1>
            </div>


            <div className="row">
                <div className="column left col-lg-2 col-sm-1">
                    <div className="vertical-menu">
                        {/* <a href="#" className="active">Home</a> */}
                        <a href="#">General</a>
                        <a href="#">Security</a>
                        <a href="#">Users</a>
                    </div>
                </div>

                <div className="column right col-lg-10 col-sm-10">
                    <GeneralForm/>
                    <SecurityForm/>
                </div>

            </div>

        </div>

    );
};

export default AccountSettings;

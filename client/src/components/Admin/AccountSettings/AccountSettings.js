import React from 'react';
import './AccountSettings.css';
import GeneralForm from '../../Forms/GeneralForm';
import SecurityForm from '../../Forms/SecurityForm';



const AccountSettings= () => {
    return (
            <div
            data-aos="fade-up" data-aos-duration='1000'>
                
                
                <div class="row">
                    <h1>Account Settings</h1>
                </div>
                

                <div class="row">
                    <div class="column left">
                        <div class="vertical-menu">
                            {/* <a href="#" class="active">Home</a> */}
                            <a href="#">General</a>
                            <a href="#">Security</a>
                            <a href="#">Users</a>
                        </div>
                    </div>
                    
                    <div class="column right">
                        <GeneralForm/>
                        <SecurityForm/>
                    </div>

                </div>
            
            </div>
            
    );
}

export default AccountSettings;
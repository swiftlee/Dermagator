import React from 'react';
import {HashLink as Link} from "react-router-hash-link";


const InfoCard = ({title, subtitle, info,to}) => {

    return (
        <div className='ml-5' style={{width:'90%'}}>
            <div className="card border-0 shadow rounded">
                <Link to={to} style={{ textDecoration: 'none',color:"black" }}>
                <h5 className="card-header primary-bg">{title}</h5>
                <div className="card-body">
                    <h5 className="card-subtitle">{subtitle}</h5>
                    <p className="card-text">{info}</p>
                </div>
                </Link>
            </div>
        </div>
    )
};

export default InfoCard;
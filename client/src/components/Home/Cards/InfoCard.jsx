import React from 'react';

const InfoCard = ({title, subtitle, info}) => {

    return (
        <div className='ml-5' style={{width:'30%'}}>
            <div className="card border-0 shadow rounded">
                <h5 className="card-header">{title}</h5>
                <div className="card-body">
                    <h5 className="card-subtitle">{subtitle}</h5>
                    <p className="card-text">{info}</p>
                </div>
            </div>
        </div>
    )

};

export default InfoCard;
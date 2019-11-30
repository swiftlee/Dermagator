import React from 'react';
import data from "../../data/Footer"
const style = {
    borderTop: '1px solid #E7E7E7',
    padding: '20px',
    left: '0',
    bottom: '0',
    height: '20%',
    width: '100%'
};

const Footer = () => {
    return (
        <div>
            <div style={style} className = 'foot1'>
                <footer className='page-footer font-small pt-4'>
                    <div className='container-fluid text-center text-md-left'>
                        <div className='row'>
                            <div className='col-md-6 mt-md-0 mt-3'>
                                <h5 className='text-uppercase font-weight-bold'>{data.data[0].name}</h5>
                                <p>{data.data[0].text.split("\n").map((i,key)=>{
                                    return <div key={key}>{i}</div>
                                    })}</p>

                            </div>
                            <hr className='clearfix w-100 d-md-none pb-3'/>
                            <div className='col-md-6 mb-md-0 mb-3'>
                                <h5 className='text-uppercase font-weight-bold'>{data.data[1].name}</h5>
                                <p>{data.data[1].text.split("\n").map((i,key)=>{
                                return <div key={key}>{i}</div>
                                })}</p>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div>
                <div className='text-center py-3 foot2'
                     style={{color: 'rgba(255,255,255,0.6)'}}>©
                    2019 Copyright:
                    <a className='text-white' href='https://dermagator.com/'> dermagator.com</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
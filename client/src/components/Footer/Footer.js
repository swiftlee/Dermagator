import React from 'react';

const style = {
    backgroundColor: '#009688',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '20px',
    left: '0',
    bottom: '0',
    height: '20%',
    width: '100%'
};

const Footer = () => {
    return (
        <div>
            <div style={style}>
                <footer className='page-footer font-small text-white pt-4'>
                    <div className='container-fluid text-center text-md-left'>
                        <div className='row'>
                            <div className='col-md-6 mt-md-0 mt-3'>
                                <h5 className='text-uppercase font-weight-bold'>Footer text 1</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint,
                                    nulla, nihil
                                    repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime
                                    quam recusandae
                                    harum esse fugiat. Itaque, culpa?</p>

                            </div>
                            <hr className='clearfix w-100 d-md-none pb-3'/>
                            <div className='col-md-6 mb-md-0 mb-3'>
                                <h5 className='text-uppercase font-weight-bold'>Footer text 2</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga
                                    perferendis modi earum
                                    commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos
                                    ipsam, aspernatur id
                                    excepturi hic.</p>

                            </div>
                        </div>
                    </div>
                    <div className='text-center py-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 'auto', color: 'rgba(255,255,255,0.6)'}}>© 2019 Copyright:
                        <a className='text-white' href='https://dermagator.com/'> dermagator.com</a>
                    </div>
                </footer>
            </div>
        </div>
    )
};

export default Footer;
import React from 'react';
import './footer2.css'
import terminal from '../../../../assets/images/1.png.svg'

const Footer2 = () => {
    return (
        <div className='site-footer2'>
            <div className='container'>
                <center>
                <div className='footer2'>
                    <p>Copyright © <span>HasThemes</span>. All Rights Reserved</p>
                    <div className='footer2-terminal'>
                        <img src={terminal} alt="" />
                    </div>
                </div>
                </center>
            </div>
        </div>
    );
};

export default Footer2;
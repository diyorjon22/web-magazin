import React from 'react';
import './poligrafiya.css'
import pol1 from '../../../../assets/images/5.jpg.svg'
import pol2 from '../../../../assets/images/6.jpg.png'
import pol3 from '../../../../assets/images/4.jpg.svg'

const Poligrafiya = () => {
    return (
        <div className='site-poligrafiya'>
            <div className='container'>
                <div className='poligrafiya'>
                    <img src={pol1} alt="" />
                    <img src={pol2} alt="" />
                    <img src={pol3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Poligrafiya;
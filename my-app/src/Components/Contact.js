import React from 'react';
import email from '../images/email.png'
import linkedin from '../images/linkedin.png'
import resume from '../images/resume.png'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='contact-button-container'>
            <button className='icon-button' onClick={(e) => window.open('mailto:kimmygao808@gmail.com')}>
                <img src={email} alt="mail icon" className='icon' />
            </button>
            <button className='icon-button' onClick={(e) => window.open('https://www.linkedin.com/in/kim-gao-71a295184/')}>
                <img src={linkedin} alt="linkedin icon" className='icon' />
            </button>
            <button className='icon-button' onClick={(e) => window.open('https://github.com/kimchi8/kimchi8.github.io/blob/master/pages/Resume_Kim_Gao_2022.pdf')}>
                <img src={resume} alt="resume icon" className='icon' />
            </button>

        </div >
    );
}

export default Contact
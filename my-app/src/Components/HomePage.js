import React from 'react';

import Contact from './Contact';

import me from '../images/photo_me.jpeg'
import waves from '../images/wave.png'
import code from '../images/code.png'
import Test from './test'

const Home = () => {
    const subtext = "My Name is Kim \& I am a 3rd year Computer Science student. \n I am passionate about empowering girls in tech, coding \& design."
    return (
        <> 
        <div className='home-container'>
            <div className='text-container'>
                <span className='home-title'> {"Hello! 👋\n"} </span>
                <div className='home-subtext'>
                    {subtext}
                </div>
            </div>
            <div className='polaroid-container'>
                <div className='polaroid front'>
                    <img src={me} alt="Photo of Me" id='personal-photo' />
                    <img src={code} alt="code icon" id='code-photo' />
                </div>
                <div className='polaroid back'>
                    <img src={waves} alt="wave icon" id='wave-one' />
                    <img src={waves} alt="wave icon" id='wave-two' />
                </div>
            </div>
            <Contact />
        </div>
        </>
    );
}

export default Home
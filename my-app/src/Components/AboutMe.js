import React from 'react';
import vector from "../images/vector_person_dog.jpg"
import Contact from './Contact';

const AboutMeText = " I am originally from the city of Auckland, New Zealand and grew up mostly remembering sheep, fush-n-chups, and the greenery. \n\n I moved to Australia with my family + dachshund when I was nine, first residing on the Gold Coast and now in Brisbane. \n\n Currently I am pursuing a Computer Science degree at the University of Queensland and love taking on new opportunities which involve startups, UX Design \& Frontend!"
const About = () => {
    return <div className='about-me-container'>
        <div className='polaroid single-front'>
            <img src={vector} alt="Cute Vector Image" id='personal-vector-photo' />
            <span id="photo-referencing"> {"(Photo by Abbey Lossing)"}</span>
            <div id="contact-about">
                <Contact />
            </div>
        </div>
        <div className='polaroid single-back'>
        </div>
        <h1 className='about-title'> A little about me..</h1>
        <div className='about-subtitle'>
            {AboutMeText}</div>

    </div>
}

export default About
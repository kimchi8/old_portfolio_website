import React from 'react';
import ssp_image from "../images/SSP.png";
import audeara_image from "../images/Audeara.png";
import lit_image from "../images/LIT.png";
import ventures_image from "../images/ventures.jpeg";
import elipse_image from "../images/elipse_logo.png";

const UQLIT = ("Managed social media accounts including Facebook and Instagram with 200+ followers. Created marketing graphics using Canva, Photoshop and Illustrator Planned and co - managed marketing content for corporate, social, and online events");
const eLipse = ("Worked on multiple projects in a team of 4,  building educational web applications for University of Queensland students and staff. Worked on front-End Development in React & Vue.js frameworks Utilised front - end libraries including MathJax Used Docker and Linux commands");
const Ventures = ("Worked in a team of 10, developing pitches to increase student engagement. Engaged with the UQ student community promoting entrepreneurship and innovation programs and start-up culture. Co-facilitating the LeadHers program, which aims to upskill females in confidence & networking skills across faculties.");
const Audeara = ("Collaborated with a team, pitching ideas and brainstorming data frameworks suitable for login authentication Built a custom login authentication web application using Firebase and JavaScript Utilised cloud technology to implement authentication features");
const SSP = ("Developed a series of written and interactive story guides teaching the basics of good teamwork practices in a university environment Created graphics used in the interactive story and co-developed the script Conducted and analysed primary research data collected from UQ students");

const Work = () => {
    return <div className='work-container'>
        <div className='work-component one'>
            <div className='polaroid-mini front'>
                <img src={elipse_image} alt="elipse logo" id='work-photo' />
            </div>
            <div className='polaroid-mini back one'> </div>

            <div className='side-text'>
                <h1 className='work-title'>Web Developer @ eLIPSE</h1>
                <div className="date" >Dec 2021 - Present</div>

                {eLipse}
            </div>
        </div>
        <div className='work-component two'>
            <div className='polaroid-mini front two'>
                <img src={ventures_image} alt="ventures photo" id='ventures-photo' />
            </div>
            <div className='polaroid-mini back two'> </div>

            <div className='side-text'>
                <h1 className='work-title'>UQ Ventures Student Ambassador </h1>
                <div className="date" >Jan 2022 - Present</div>

                {Ventures}
            </div>
        </div>

        <div className='work-component three'>
            <div className='polaroid-mini front three'>
                <img src={lit_image} alt="LIT logo" id='work-photo' />
            </div>
            <div className='polaroid-mini back three'> </div>

            <div className='side-text'>
                <h1 className='work-title'>Ladies in Technology, Marketing Executive </h1>
                <div className="date" >Jan 2020 - Present</div>

                {UQLIT}
            </div>
            <div className='work-component four'>
                <div className='polaroid-mini front four'>
                    <img src={audeara_image} alt="Photo of women with headphones" id='audeara-photo' />
                </div>
                <div className='polaroid-mini back four'> </div>

                <div className='side-text'>
                    <h1 className='work-title'>Internship @ Audeara </h1>
                    <div className="date" >Sep 2021</div>

                    {Audeara}
                </div>
            </div>
            <div className='work-component five'>
                <div className='polaroid-mini front five'>
                    <img src={ssp_image} alt="Photo of SSP" id='work-photo' />
                </div>
                <div className='polaroid-mini back five'> </div>

                <div className='side-text'>
                    <h1 className='work-title'>Student Staff Partner</h1>
                    <div className="date" >Aug 2020 - Aug 2021</div>

                    {SSP}
                </div>
            </div >
        </div >
    </div >
}

export default Work
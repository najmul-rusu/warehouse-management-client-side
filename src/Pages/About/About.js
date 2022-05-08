import React from 'react';
import Logo from '../../Images/EveDiva.png'
import './About.css'

const About = () => {
    return (
        <div className='container d-flex my-5 p-5  align-items-center'>
            <div className='w-50'>
                <img className='about-img' src={Logo} alt="" />
            </div>
            <div className='w-50 px-4'>
                <h2>About EveDiva</h2>
                <p>At <strong>EveDiva</strong> we love every passion and interest on Earth because it is a reference to your <strong>UNIQUENESS</strong>. No matter where you're, who you're, and what you're hooked into we would like to be ready to provide you with high-value products. </p>
            </div>
        </div>
    );
};

export default About;
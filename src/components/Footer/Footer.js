import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import CourseDetails from '../CourseDetails/CourseDetails';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <ContactUs></ContactUs>
            <CourseDetails></CourseDetails>

            
            <h3 className="text-dark bg-info p-3">Copyrights reserved by Sahara,2021</h3>
        </div>
    );
};

export default Footer;
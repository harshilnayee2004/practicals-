import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <h3>Contact Us</h3>
                <p>Email: student@college.edu</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} My Practical 4 Project. Built by a student.</p>
            </div>
        </footer>
    );
};

export default Footer;

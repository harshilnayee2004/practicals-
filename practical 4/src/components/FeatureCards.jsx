import React from 'react';
import './FeatureCards.css';
import { FiBook, FiCode, FiUser } from 'react-icons/fi';

const FeatureCards = () => {
    return (
        <div className="features-container">
            <h2>Project Features</h2>
            <div className="cards-wrapper">
                <div className="card">
                    <FiBook className="card-icon" />
                    <h3>Learn React</h3>
                    <p>This project helps me learn how to build React applications.</p>
                </div>
                <div className="card">
                    <FiCode className="card-icon" />
                    <h3>Write CSS</h3>
                    <p>We are using plain CSS files to style these components.</p>
                </div>
                <div className="card">
                    <FiUser className="card-icon" />
                    <h3>Student Work</h3>
                    <p>Created as a practical assignment for my college course.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCards;

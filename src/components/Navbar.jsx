import React from 'react';
import "./Navbar.css";  // Updated CSS file import
import edyoda from '../assets/edyoda.svg';

const Navbar = () => {
    return (
        <div className='custom-navbar'>
            <div className='custom-left-section'>
                <div className='custom-logo-container'>
                    <img className="custom-logo-image" alt="Check" src={edyoda}></img>
                </div>
                <div className='custom-dropdown-container'>
                    <select className='custom-dropdown'>
                        <option className="custom-dropdown-option" value="Courses">Courses</option>
                    </select>
                    <select className='custom-dropdown'>
                        <option className="custom-dropdown-option" value="Programs">Programs</option>
                    </select>
                </div>
            </div>
            <div className='custom-right-section'>
                <div className="custom-search-icon">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
                <div className="custom-login-button">
                    <button>Log in</button>
                </div>
                <div className="custom-join-button">
                    <button>JOIN NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;


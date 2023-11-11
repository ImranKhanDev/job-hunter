
import { Link } from 'react-router-dom';
import './Header.css'
import Toggle from "react-toggle";
import React, { useState } from "react";
import Dark from '../Dark/Dark';
const Header = () => {

    return (
        <div className='header-container'>
            <div className="header">

                <Link to='/'>
                    <p className='p'>
                    <span>Job-Hunter </span>
                    <Dark></Dark>
                    </p>
                    </Link>

                <div className="details">
                    
                    <Link to="/applied" className='link'><span>Applied Jobs</span></Link>
                    <Link to="/blog" className='link  blog'><span>Blog
                    </span></Link> 
                   
                   
                </div>
                
                <button>Start Applying</button>
                 
            </div>
        </div>
    );
};

export default Header;
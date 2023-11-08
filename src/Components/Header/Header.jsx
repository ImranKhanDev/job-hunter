import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className="header">

              <Link to='/'>
                <span>Job-Hunter</span></Link>

                <div className="details">
                  
                    <Link to="/applied" className='link'><span>Applied Jobs</span></Link>
                    <Link to="/blog" className='link'><span>Blog
                    </span></Link>
                </div>
                <button>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;